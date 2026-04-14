import styles from '@/styles/modules/TrustStrip.module.css';

/**
 * TrustStrip — Thin horizontal band communicating sector authority.
 * Uses sector labels and operator categories rather than logos or testimonials.
 *
 * DESIGN.md rule: "Trust Strip — Logos or sector labels (no testimonials yet).
 * Thin horizontal band."
 */

const sectors = [
  'HVAC & Home Services',
  'Legal & Professional Services',
  'Healthcare Staffing',
  'Premium Local Services',
  'High-Trust B2B Services',
  'Consulting & Advisory Practices',
];

// This is a server component — no 'use client' needed
// We use a shared CSS class for scroll behavior
export default function TrustStrip() {
  return (
    <section
      className={styles.strip}
      aria-label="Sectors and operator categories served"
    >
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.label}>Built for</span>
          <div className={styles.sectors} role="list">
            {sectors.map((sector, index) => (
              <span
                key={sector}
                className={styles.sector}
                role="listitem"
              >
                {sector}
                {index < sectors.length - 1 && (
                  <span className={styles.divider} aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
