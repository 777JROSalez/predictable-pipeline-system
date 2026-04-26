import type { NextConfig } from 'next';

// Content-Security-Policy
// next.config headers() cannot use per-request nonces, so inline scripts
// need 'unsafe-inline' here. The high-value directives are:
//   frame-ancestors 'none'   → clickjacking prevention
//   object-src 'none'        → no Flash / plugin execution
//   base-uri 'self'          → no base-tag injection
//   form-action 'self'       → forms only submit to this origin
//   upgrade-insecure-requests → force HTTPS for mixed content
//
// If you later add analytics (GA4, Plausible, etc.) extend connect-src / script-src.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://www.facebook.com https://facebook.com",
  "connect-src 'self' https://www.facebook.com https://facebook.com",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: CSP,
  },
  {
    // Enforce HTTPS for 2 years; include subdomains
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    // Prevent MIME-type sniffing
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Belt-and-suspenders framing protection alongside CSP frame-ancestors
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    // Don't send the full referrer URL to external origins
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    // Disable browser features this site does not use
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'interest-cohort=()',
    ].join(', '),
  },
  {
    // Prevent browsers from pre-fetching DNS for links on the page
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
