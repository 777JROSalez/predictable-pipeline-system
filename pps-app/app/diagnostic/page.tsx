import type { Metadata } from 'next';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import ScrollRevealSection from '@/components/ui/ScrollRevealSection';
import AssessmentForm from '@/components/sections/AssessmentForm';
import styles from '@/styles/modules/Diagnostic.module.css';

export const metadata: Metadata = {
  title: 'Pipeline Leak Diagnostic — Predictable Pipeline Systems',
  description:
    'Find where your pipeline is breaking. A focused diagnostic for service businesses — we identify the trust, conversion, or follow-up leak that is stopping attention from becoming qualified conversations.',
  openGraph: {
    title: 'Pipeline Leak Diagnostic — Predictable Pipeline Systems',
    description:
      'Find where your pipeline is breaking. A structured diagnostic that identifies the trust, conversion, or follow-up leak in your acquisition flow.',
    type: 'website',
    siteName: 'Predictable Pipeline Systems',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pipeline Leak Diagnostic — Predictable Pipeline Systems',
    description:
      'Find where your pipeline is breaking. A structured diagnostic for service businesses.',
  },
};

const leakPoints = [
  {
    id: '01',
    label: 'Trust Leak',
    title: 'Trust Leak',
    body: 'People land on your business but do not feel enough confidence, clarity, or proof to take the next step.',
  },
  {
    id: '02',
    label: 'Conversion Leak',
    title: 'Conversion Leak',
    body: 'People are interested, but the page, CTA, offer path, or booking flow does not move them clearly into action.',
  },
  {
    id: '03',
    label: 'Pipeline Leak',
    title: 'Pipeline Leak',
    body: 'Leads come in, but routing, follow-up, qualification, or booking systems fail to turn them into qualified conversations.',
  },
];

const diagnosticFindings = [
  'Where your current acquisition path is leaking',
  'Whether the issue is trust, conversion, pipeline, or follow-up',
  'What friction is stopping qualified conversations',
  'What should be fixed first',
  'Whether your current front end can handle more demand without breaking',
];

/**
 * Diagnostic Page — Cold-traffic pre-frame for the Pipeline Leak Diagnostic.
 *
 * Funnel: Creator / Manychat → /diagnostic → AssessmentForm → Calendly
 *
 * Section map:
 *  1. Nav
 *  2. Hero           — Headline + CTA that scrolls to form
 *  3. Leak Points    — 3-card breakdown of where pipelines break
 *  4. Leave With     — What the diagnostic identifies + CTA to form
 *  5. Form Block     — AssessmentForm (idPrefix="af-diagnostic")
 *  6. Footer
 */
export default function DiagnosticPage() {
  return (
    <>
      <Nav />

      <main id="main-content">

        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section
          className={`section ${styles.hero}`}
          aria-labelledby="diagnostic-headline"
        >
          <div className="container">
            <div className={styles.heroContent}>
              <span
                className={`eyebrow hero-entry hero-entry--delay-1 ${styles.heroEyebrow}`}
              >
                Pipeline Leak Diagnostic
              </span>

              <h1
                id="diagnostic-headline"
                className={`hero-entry hero-entry--delay-2 ${styles.heroHeadline}`}
              >
                Find Where Your Pipeline Is Breaking
              </h1>

              <p className={`hero-entry hero-entry--delay-3 ${styles.heroSubheadline}`}>
                Most service businesses do not have a lead problem first. They
                have a leak in trust, conversion, or follow-up that stops
                attention from becoming qualified conversations.
              </p>

              <div className={`hero-entry hero-entry--delay-4 ${styles.ctaRow}`}>
                <a href="#diagnostic-form" className="cta-primary">
                  Book Your Pipeline Diagnostic
                </a>
              </div>

              <p className={`hero-entry hero-entry--delay-4 ${styles.heroSupport}`}>
                A focused diagnostic for service businesses that want clearer
                client acquisition movement, cleaner inquiry flow, and stronger
                follow-up structure.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Leak Points ──────────────────────────────────── */}
        <ScrollRevealSection>
          <section
            className={`section section--alt ${styles.leakPoints}`}
            aria-labelledby="leak-points-heading"
          >
            <div className="container">
              <div className={styles.sectionHeader}>
                <span className="eyebrow reveal">Where Pipelines Break</span>
                <h2
                  id="leak-points-heading"
                  className={`heading-section reveal ${styles.sectionHeadline}`}
                >
                  The 3 Places Pipeline Usually Breaks
                </h2>
              </div>

              <div
                className={`${styles.leakGrid} reveal-group`}
                role="list"
                aria-label="Common pipeline leak points"
              >
                {leakPoints.map((point) => (
                  <article
                    key={point.id}
                    className={styles.leakCard}
                    role="listitem"
                    aria-label={point.title}
                  >
                    <span className={styles.leakMark}>{point.label}</span>
                    <h3 className={styles.leakTitle}>{point.title}</h3>
                    <p className={styles.leakBody}>{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollRevealSection>

        {/* ── 3. What You Leave With ──────────────────────────── */}
        <ScrollRevealSection>
          <section
            className={`section ${styles.leaveWith}`}
            aria-labelledby="leave-with-heading"
          >
            <div className="container">
              <div className={styles.leaveWithInner}>

                <div className={styles.leaveWithContent}>
                  <span className="eyebrow reveal">The Diagnostic</span>
                  <h2
                    id="leave-with-heading"
                    className={`heading-section reveal ${styles.sectionHeadline}`}
                  >
                    What We Identify on the Diagnostic
                  </h2>

                  <ul
                    className={`reveal ${styles.bulletList}`}
                    aria-label="What the diagnostic identifies"
                  >
                    {diagnosticFindings.map((item) => (
                      <li key={item} className={styles.bulletItem}>
                        <span className={styles.bulletMark} aria-hidden="true">─</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={`reveal ${styles.leaveWithCta}`}>
                    <a href="#diagnostic-form" className="cta-primary">
                      Start Your Pipeline Leak Diagnostic
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </ScrollRevealSection>

        {/* ── 4. Form Block ───────────────────────────────────── */}
        <section
          className={`section section--dark ${styles.formBlock}`}
          id="diagnostic-form"
          aria-labelledby="diagnostic-form-heading"
        >
          <div className="container">
            <div className={styles.formInner}>

              {/* Left: context copy */}
              <div className={styles.formContent}>
                <span className="eyebrow" style={{ color: 'var(--color-panel-label)' }}>
                  Pipeline Leak Diagnostic
                </span>
                <h2
                  id="diagnostic-form-heading"
                  className={`heading-section ${styles.formHeadline}`}
                >
                  Ready to find the leak?
                </h2>
                <p className={styles.formDesc}>
                  Answer a few quick questions so we can understand your current
                  pipeline before the call.
                </p>
              </div>

              {/* Right: form panel */}
              <div className={styles.formPanel}>
                <AssessmentForm idPrefix="af-diagnostic" />
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
