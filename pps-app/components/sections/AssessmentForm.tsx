'use client';

import { useState, useEffect, FormEvent } from 'react';
import styles from '@/styles/modules/AssessmentForm.module.css';
import { CALENDLY_DIAGNOSTIC_URL } from '@/lib/config';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CALENDLY_URL = CALENDLY_DIAGNOSTIC_URL;

/**
 * sessionStorage key used to persist the submitted state across back-navigation.
 * Scoped to the session tab so a fresh visit always shows the form.
 */
const SUBMITTED_KEY = 'pps_diagnostic_submitted';

/**
 * How long (ms) to wait after "Continue to Booking" is clicked before
 * automatically resetting the form back to idle.
 */
const POST_BOOKING_RESET_MS = 4000;

interface FormFields {
  name: string;
  company: string;
  email: string;
  message: string;
  website: string; // honeypot — must stay empty; bots fill it
}

interface FieldErrors {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  form?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FIELDS: FormFields = {
  name: '',
  company: '',
  email: '',
  message: '',
  website: '', // honeypot
};

interface AssessmentFormProps {
  /**
   * Prefix for all form field IDs.
   * Required when more than one instance of AssessmentForm appears
   * on the same page — duplicate IDs break label associations and
   * screen-reader behaviour.
   * Defaults to 'af' for single-form pages.
   */
  idPrefix?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateClient(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.company.trim()) errors.company = 'Company is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!fields.message.trim()) errors.message = 'Message is required.';

  return errors;
}

/**
 * AssessmentForm — Contact / audit request form.
 * Renders inside AuditCta's dark action column and on the /assessment page.
 * Submits to /api/contact via fetch; handles idle / submitting / success / error states.
 *
 * Post-submit: shows a clean success state with a "Continue to Booking" CTA that
 * opens Calendly in a new tab. Clicking that CTA shows a brief confirmation note
 * then auto-resets the form after POST_BOOKING_RESET_MS. A secondary "Start New
 * Diagnostic" link resets immediately. Submission state is persisted in
 * sessionStorage so that back-navigation restores the success view rather than
 * leaving a blank or broken-looking form.
 *
 * Pass a unique `idPrefix` whenever two instances appear on the same page
 * to prevent duplicate HTML IDs.
 */
export default function AssessmentForm({ idPrefix = 'af' }: AssessmentFormProps) {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState<string>('');
  const [bookingClicked, setBookingClicked] = useState(false);

  // Restore submitted state on mount so back-button shows success, not a blank form
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SUBMITTED_KEY) === 'true') {
        setStatus('success');
      }
    } catch {
      // sessionStorage unavailable in some private-browsing environments — degrade silently
    }
  }, []);

  // Auto-reset the form a few seconds after the user opens Calendly
  useEffect(() => {
    if (!bookingClicked) return;
    const timer = setTimeout(() => {
      try { sessionStorage.removeItem(SUBMITTED_KEY); } catch { /* */ }
      setFields(INITIAL_FIELDS);
      setFieldErrors({});
      setFormError('');
      setBookingClicked(false);
      setStatus('idle');
    }, POST_BOOKING_RESET_MS);
    return () => clearTimeout(timer);
  }, [bookingClicked]);

  function resetForm() {
    try { sessionStorage.removeItem(SUBMITTED_KEY); } catch { /* */ }
    setFields(INITIAL_FIELDS);
    setFieldErrors({});
    setFormError('');
    setBookingClicked(false);
    setStatus('idle');
  }

  function handleBookingClick() {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    setBookingClicked(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError('');

    const errors = validateClient(fields);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        const serverErrors: FieldErrors = {};
        if (Array.isArray(data.errors)) {
          for (const err of data.errors) {
            if (err.field && err.field !== 'form') {
              serverErrors[err.field as keyof FieldErrors] = err.message;
            } else {
              setFormError(err.message || 'Something went wrong. Please try again.');
            }
          }
        } else {
          setFormError('Something went wrong. Please try again.');
        }
        setFieldErrors(serverErrors);
        setStatus('error');
        return;
      }

      try {
        sessionStorage.setItem(SUBMITTED_KEY, 'true');
      } catch {
        // sessionStorage unavailable — proceed without persisting
      }

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'pipeline_diagnostic_form',
          value: 1,
        });
      }

      setStatus('success');
    } catch {
      setFormError('Could not reach the server. Please check your connection.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="alert" aria-live="polite">
        {/* Step progress indicator */}
        <div className={styles.stepTrack} aria-hidden="true">
          <span className={styles.stepDone}>Step 1 — Tell us about your pipeline</span>
          <span className={styles.stepSeparator}>→</span>
          <span className={styles.stepNext}>Step 2 — Book your diagnostic</span>
        </div>

        <span className={styles.successEyebrow}>Information received</span>
        <h3 className={styles.successHeading}>
          We&rsquo;ve got your details.
        </h3>
        <p className={styles.successBody}>
          Your Pipeline Diagnostic request has been logged. The next step is
          picking a time — we&rsquo;ll review your pipeline before the call so
          you get specific, actionable findings, not a generic pitch.
        </p>

        <div className={styles.successAction}>
          <button
            type="button"
            className={`cta-primary ${styles.successCta}`}
            onClick={handleBookingClick}
            disabled={bookingClicked}
          >
            {bookingClicked ? 'Booking opened →' : 'Continue to Booking →'}
          </button>

          {bookingClicked ? (
            <p className={styles.bookingConfirm} aria-live="polite">
              Booking opened in a new tab. This page will reset automatically.
            </p>
          ) : (
            <p className={styles.successNote}>
              Opens Calendly in a new tab. Your current page stays intact.
            </p>
          )}

          <button
            type="button"
            className={styles.successReset}
            onClick={resetForm}
          >
            Start New Diagnostic
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Pipeline Diagnostic request form"
    >
      {/* Step microcopy */}
      <div className={styles.stepTrack} aria-hidden="true">
        <span className={`${styles.stepDone} ${styles.stepActive}`}>Step 1 — Tell us about your pipeline</span>
        <span className={styles.stepSeparator}>→</span>
        <span className={styles.stepUpcoming}>Step 2 — Book your diagnostic</span>
      </div>

      {/* Name */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${idPrefix}-name`}>
          Name
        </label>
        <input
          className={styles.input}
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={fields.name}
          onChange={handleChange}
          aria-invalid={fieldErrors.name ? 'true' : undefined}
          aria-describedby={fieldErrors.name ? `${idPrefix}-name-error` : undefined}
          disabled={status === 'submitting'}
        />
        {fieldErrors.name && (
          <span id={`${idPrefix}-name-error`} className={styles.fieldError} role="alert">
            {fieldErrors.name}
          </span>
        )}
      </div>

      {/* Company */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${idPrefix}-company`}>
          Company
        </label>
        <input
          className={styles.input}
          id={`${idPrefix}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Your company name"
          value={fields.company}
          onChange={handleChange}
          aria-invalid={fieldErrors.company ? 'true' : undefined}
          aria-describedby={fieldErrors.company ? `${idPrefix}-company-error` : undefined}
          disabled={status === 'submitting'}
        />
        {fieldErrors.company && (
          <span id={`${idPrefix}-company-error`} className={styles.fieldError} role="alert">
            {fieldErrors.company}
          </span>
        )}
      </div>

      {/* Email */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${idPrefix}-email`}>
          Work Email
        </label>
        <input
          className={styles.input}
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={fields.email}
          onChange={handleChange}
          aria-invalid={fieldErrors.email ? 'true' : undefined}
          aria-describedby={fieldErrors.email ? `${idPrefix}-email-error` : undefined}
          disabled={status === 'submitting'}
        />
        {fieldErrors.email && (
          <span id={`${idPrefix}-email-error`} className={styles.fieldError} role="alert">
            {fieldErrors.email}
          </span>
        )}
      </div>

      {/* Message */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${idPrefix}-message`}>
          Tell us about your pipeline
        </label>
        <textarea
          className={styles.textarea}
          id={`${idPrefix}-message`}
          name="message"
          placeholder="Briefly describe where your acquisition flow breaks down or where you're seeing the most friction."
          value={fields.message}
          onChange={handleChange}
          aria-invalid={fieldErrors.message ? 'true' : undefined}
          aria-describedby={fieldErrors.message ? `${idPrefix}-message-error` : undefined}
          disabled={status === 'submitting'}
        />
        {fieldErrors.message && (
          <span id={`${idPrefix}-message-error`} className={styles.fieldError} role="alert">
            {fieldErrors.message}
          </span>
        )}
      </div>

      {/* Honeypot — hidden from real users; bots fill it and get silently discarded */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input
          id={`${idPrefix}-website`}
          name="website"
          type="text"
          value={fields.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Submit */}
      <div className={styles.submitRow}>
        <button
          type="submit"
          className={`cta-primary ${styles.submitButton}`}
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Book a Pipeline Diagnostic'}
        </button>

        {formError && (
          <p className={styles.formError} role="alert">
            {formError}
          </p>
        )}
      </div>
    </form>
  );
}
