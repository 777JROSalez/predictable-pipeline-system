import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─── Field constraints ────────────────────────────────────────────────────────
const LIMITS = {
  name: 100,
  company: 100,
  email: 254,   // RFC 5321 max
  message: 2000,
} as const;

// Max accepted JSON body size (16 KB)
const MAX_BODY_BYTES = 16_384;

// ─── Rate limiting (in-memory, best-effort per instance) ─────────────────────
// For multi-region or high-traffic production use, replace with Upstash Redis.
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // max submissions per window per IP

interface RateLimitEntry {
  count: number;
  windowStart: number;
}
const rateLimitStore = new Map<string, RateLimitEntry>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

// ─── Input interfaces ─────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  company: string;
  email: string;
  message: string;
  website?: string; // honeypot — must be empty; bots fill it
}

interface ValidationError {
  field: string;
  message: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: Partial<ContactPayload>): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!body.name?.trim()) {
    errors.push({ field: 'name', message: 'Name is required.' });
  } else if (body.name.trim().length > LIMITS.name) {
    errors.push({ field: 'name', message: `Name must be ${LIMITS.name} characters or fewer.` });
  }

  if (!body.company?.trim()) {
    errors.push({ field: 'company', message: 'Company is required.' });
  } else if (body.company.trim().length > LIMITS.company) {
    errors.push({ field: 'company', message: `Company must be ${LIMITS.company} characters or fewer.` });
  }

  if (!body.email?.trim()) {
    errors.push({ field: 'email', message: 'Email is required.' });
  } else if (!EMAIL_REGEX.test(body.email.trim())) {
    errors.push({ field: 'email', message: 'Enter a valid email address.' });
  } else if (body.email.trim().length > LIMITS.email) {
    errors.push({ field: 'email', message: 'Email address is too long.' });
  }

  if (!body.message?.trim()) {
    errors.push({ field: 'message', message: 'Message is required.' });
  } else if (body.message.trim().length > LIMITS.message) {
    errors.push({ field: 'message', message: `Message must be ${LIMITS.message} characters or fewer.` });
  }

  return errors;
}

// ─── HTML escaping (user data → email HTML) ───────────────────────────────────
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Strip newlines and CR to prevent email header injection in subjects
function safeSubject(str: string): string {
  return str.replace(/[\r\n]+/g, ' ').slice(0, 200);
}

// ─── SSRF guard for outbound webhook URL ──────────────────────────────────────
const BLOCKED_HOSTNAME_RE =
  /^(localhost|0\.0\.0\.0|::1|169\.254\.\d+\.\d+|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|(172\.(1[6-9]|2\d|3[01])\.\d+\.\d+))$/i;

function isSafeWebhookUrl(raw: string): boolean {
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return false;
    const host = url.hostname.toLowerCase().replace(/\.+$/, '');
    if (BLOCKED_HOSTNAME_RE.test(host)) return false;
    if (host.endsWith('.local') || host.endsWith('.internal') || host.endsWith('.localhost')) return false;
    return true;
  } catch {
    return false;
  }
}

// ─── Email templates ──────────────────────────────────────────────────────────
function buildAdminEmailHtml(s: {
  name: string;
  company: string;
  email: string;
  message: string;
  receivedAt: string;
}): string {
  const receivedLabel = new Date(s.receivedAt).toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/New_York',
  });

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0d0d0d;color:#e8e4d8;margin:0;padding:0;">
  <div style="max-width:600px;margin:40px auto;background:#111;border:1px solid #2a2a2a;border-radius:4px;overflow:hidden;">
    <div style="background:#1a1a1a;padding:20px 32px;border-bottom:1px solid #2a2a2a;">
      <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#b8a898;">Predictable Pipeline Systems</p>
      <h1 style="margin:8px 0 0;font-size:18px;font-weight:600;color:#e8e4d8;">New Pipeline Diagnostic Request</h1>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;width:120px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#b8a898;">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;font-size:15px;color:#e8e4d8;">${esc(s.name)}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#b8a898;">Company</td>
          <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;font-size:15px;color:#e8e4d8;">${esc(s.company)}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#b8a898;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;font-size:15px;"><a href="mailto:${esc(s.email)}" style="color:#c5a572;text-decoration:none;">${esc(s.email)}</a></td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#b8a898;">Received</td>
          <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;font-size:13px;color:#888;">${esc(receivedLabel)} ET</td>
        </tr>
      </table>
      <div style="margin-top:24px;">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#b8a898;">Pipeline Context</p>
        <div style="background:#0d0d0d;border:1px solid #2a2a2a;border-radius:3px;padding:16px;font-size:14px;line-height:1.6;color:#c8c0b0;white-space:pre-wrap;">${esc(s.message)}</div>
      </div>
    </div>
    <div style="padding:20px 32px;background:#0d0d0d;border-top:1px solid #1e1e1e;">
      <p style="margin:0;font-size:11px;color:#555;">Received automatically from predictablepipeline.com</p>
    </div>
  </div>
</body>
</html>`;
}

function buildAutoReplyHtml(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0d0d0d;color:#e8e4d8;margin:0;padding:0;">
  <div style="max-width:600px;margin:40px auto;background:#111;border:1px solid #2a2a2a;border-radius:4px;overflow:hidden;">
    <div style="background:#1a1a1a;padding:20px 32px;border-bottom:1px solid #2a2a2a;">
      <p style="margin:0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#b8a898;">Predictable Pipeline Systems</p>
      <h1 style="margin:8px 0 0;font-size:18px;font-weight:600;color:#e8e4d8;">We received your Pipeline Diagnostic request.</h1>
    </div>
    <div style="padding:32px;">
      <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#c8c0b0;">Hi ${esc(name)},</p>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#c8c0b0;">
        Thank you for submitting a Pipeline Diagnostic request. We have received your information and will review it carefully.
      </p>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#c8c0b0;">
        You can expect a reply from us within <strong style="color:#e8e4d8;">one business day</strong>. We will confirm receipt, assess fit, and outline the next step — before any commitment is made on either side.
      </p>
      <div style="border-left:2px solid #c5a572;padding:12px 20px;margin:24px 0;background:#0d0d0d;">
        <p style="margin:0;font-size:13px;line-height:1.6;color:#b8a898;">
          The Pipeline Diagnostic is a 30-minute structured review of your acquisition flow. Our goal is to identify the primary structural gap and give you a clear fit signal — not to sell you anything.
        </p>
      </div>
      <p style="margin:0;font-size:15px;line-height:1.7;color:#c8c0b0;">
        If you have any questions in the meantime, simply reply to this email.
      </p>
    </div>
    <div style="padding:20px 32px;background:#0d0d0d;border-top:1px solid #1e1e1e;">
      <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#888;">Predictable Pipeline Systems</p>
      <p style="margin:0;font-size:11px;color:#555;">Client Acquisition Infrastructure for Service Businesses</p>
    </div>
  </div>
</body>
</html>`;
}

// ─── Webhook dispatch ─────────────────────────────────────────────────────────
async function dispatchWebhook(url: string, payload: Record<string, string>): Promise<void> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) {
      console.error(`[PPS] Webhook returned ${res.status}`);
    }
  } catch (err) {
    console.error('[PPS] Webhook dispatch failed:', err instanceof Error ? err.message : 'unknown error');
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // ── 1. Payload size cap ────────────────────────────────────────────────
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, errors: [{ field: 'form', message: 'Request too large.' }] },
        { status: 413 }
      );
    }

    // ── 2. Rate limiting ───────────────────────────────────────────────────
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, errors: [{ field: 'form', message: 'Too many requests. Please wait a few minutes and try again.' }] },
        { status: 429, headers: { 'Retry-After': '900' } }
      );
    }

    // ── 3. Parse body ──────────────────────────────────────────────────────
    let body: Partial<ContactPayload>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, errors: [{ field: 'form', message: 'Invalid request.' }] },
        { status: 400 }
      );
    }

    // ── 4. Honeypot check (silent accept — do not reveal rejection to bots) ─
    if (body.website) {
      console.info('[PPS] Honeypot triggered — submission discarded silently.');
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // ── 5. Server-side field validation ───────────────────────────────────
    const errors = validate(body);
    if (errors.length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const submission = {
      name: body.name!.trim(),
      company: body.company!.trim(),
      email: body.email!.trim(),
      message: body.message!.trim(),
      receivedAt: new Date().toISOString(),
    };

    // ── 6. Email delivery ─────────────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    // Falls back to the primary contact address when env var is not set
    const adminEmail = process.env.RESEND_ADMIN_EMAIL ?? 'tylertejral@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

    if (resendKey) {
      const resend = new Resend(resendKey);
      const subject = safeSubject(
        `[PPS] Pipeline Diagnostic Request — ${submission.name} (${submission.company})`
      );

      const [notifyResult, replyResult] = await Promise.allSettled([
        resend.emails.send({
          from: `Predictable Pipeline Systems <${fromEmail}>`,
          to: [adminEmail],
          replyTo: submission.email,
          subject,
          html: buildAdminEmailHtml(submission),
        }),
        resend.emails.send({
          from: `Predictable Pipeline Systems <${fromEmail}>`,
          to: [submission.email],
          subject: 'We received your Pipeline Diagnostic request.',
          html: buildAutoReplyHtml(submission.name),
        }),
      ]);

      if (notifyResult.status === 'rejected') {
        console.error('[PPS] Admin notification email failed:', notifyResult.reason instanceof Error ? notifyResult.reason.message : 'unknown');
      }
      if (replyResult.status === 'rejected') {
        console.error('[PPS] Auto-reply email failed:', replyResult.reason instanceof Error ? replyResult.reason.message : 'unknown');
      }
    } else {
      console.warn('[PPS] Email delivery skipped — RESEND_API_KEY or RESEND_ADMIN_EMAIL not set.');
    }

    // ── 7. Optional webhook dispatch ──────────────────────────────────────
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      if (isSafeWebhookUrl(webhookUrl)) {
        await dispatchWebhook(webhookUrl, submission);
      } else {
        console.error('[PPS] WEBHOOK_URL blocked — failed SSRF safety check.');
      }
    }

    // ── 8. Minimal, PII-safe operational log ──────────────────────────────
    console.info(`[PPS] Assessment request received — company: ${submission.company} — at: ${submission.receivedAt}`);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    console.error('[PPS] Unhandled error in contact submission handler.');
    return NextResponse.json(
      { ok: false, errors: [{ field: 'form', message: 'Server error. Please try again.' }] },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405, headers: { Allow: 'POST' } });
}
