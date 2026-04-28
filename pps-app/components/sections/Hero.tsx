import SystemMap from '@/components/artifacts/SystemMap';
import DashboardFragment from '@/components/artifacts/DashboardFragment';
import styles from '@/styles/modules/Hero.module.css';

/**
 * Hero — Above-the-fold section.
 *
 * Layout: Asymmetric 2-column grid.
 * Left: Editorial content — eyebrow → headline → subheadline → CTA pair
 *       → proof card → fit disclosure.
 * Right: SystemMap artifact (full pipeline diagram) + DashboardFragment (redacted).
 *
 * DESIGN.md rules:
 * - Canvas background. No image, no gradient, no pattern.
 * - Headline: --font-display, 700, --text-4xl
 * - Subheadline: --font-body, --text-md, --color-steel
 * - Staggered CSS hero-entry animations
 */
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-headline">
      <div className={`container ${styles.grid}`}>

        {/* Left — editorial content */}
        <div className={styles.content}>
          <span
            className={`eyebrow hero-entry hero-entry--delay-1 ${styles.eyebrow}`}
            aria-label="Company: Predictable Pipeline Systems Company"
          >
            Predictable Pipeline Systems Company
          </span>

          <h1
            id="hero-headline"
            className={`heading-display hero-entry hero-entry--delay-2 ${styles.headline}`}
          >
            Install the Systems That Turn Attention Into Qualified Conversations
          </h1>

          <p className={`body-intro hero-entry hero-entry--delay-3 ${styles.subheadline}`}>
            We help service businesses build the trust, conversion, and pipeline
            infrastructure needed to generate more qualified conversations and more
            predictable client acquisition.
          </p>

          {/* CTA row: primary + secondary */}
          <div className={`hero-entry hero-entry--delay-4 ${styles.ctaRow}`}>
            <a
              href="/diagnostic"
              className="cta-primary"
              id="hero-primary-cta"
            >
              Book a Pipeline Diagnostic
            </a>
            <a href="#system-overview" className={`cta-secondary ${styles.ctaSecondary}`} id="hero-secondary-cta">
              See How It Works
            </a>
          </div>

          {/* Support line below CTAs */}
          <p className={`hero-entry hero-entry--delay-4 ${styles.microcopy}`}>
            Not a generic agency. Not random marketing. A commercially intelligent
            front-end system for service businesses.
          </p>

          {/* Fit disclosure */}
          <p className={`hero-entry hero-entry--delay-4 ${styles.fitDisclosure}`}>
            Built specifically for high-trust service businesses.{' '}
            <a href="#who-its-for" className={styles.fitDisclosureLink}>
              See if it fits your situation →
            </a>
          </p>
        </div>

        {/* Right — artifact stack (grid-breaking) */}
        <div className={styles.artifact} aria-label="Pipeline system visualization">
          {/* Primary: System map */}
          <div className={styles.systemMapWrap}>
            <SystemMap />
          </div>
          {/* Secondary: Redacted dashboard fragment */}
          <div className={styles.dashboardWrap} aria-label="Pipeline dashboard fragment">
            <DashboardFragment />
          </div>
        </div>

      </div>

      {/* Baseline rule */}
      <div className="container">
        <hr className="rule" style={{ marginTop: 'var(--space-16)' }} />
      </div>
    </section>
  );
}
