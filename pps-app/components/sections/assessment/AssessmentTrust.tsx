import styles from '@/styles/modules/assessment/AssessmentTrust.module.css';
import SystemMap from '@/components/artifacts/SystemMap';

/**
 * AssessmentTrust — Transparency and trust signals near the second booking CTA.
 *
 * Two-column layout on desktop:
 * Left: Four transparency statements that address common booking hesitations.
 * Right: SystemMap artifact — contextualizes what the prospect is being assessed on.
 *
 * No invented proof, no fake testimonials. Transparency is the trust layer here.
 */

const trustStatements = [
  {
    label: 'No pitch. No obligation.',
    detail:
      'Booking an assessment does not start an engagement or trigger a follow-up sales sequence. You get a fit signal and a defined next step — nothing else unless you request it.',
  },
  {
    label: 'We screen fit before the call, not during it.',
    detail:
      'Every request is reviewed before confirmation. If the signals suggest this is not the right layer for your business, we will tell you before we meet — and recommend what to do instead.',
  },
  {
    label: 'Same person. Every assessment.',
    detail:
      'The assessment is run by the same person who would architect your system — not a sales team or intake specialist. You are talking to the implementation layer from the first call.',
  },
  {
    label: 'If it is not the right fit, we tell you why.',
    detail:
      'A "no fit" result is not a dead end. We explain the structural reason and give you the priority action to address before the infrastructure layer makes sense.',
  },
];

export default function AssessmentTrust() {
  return (
    <section
      className={`section ${styles.trust}`}
      aria-labelledby="trust-heading"
    >
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">How We Run These</span>
          <h2
            id="trust-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            Operational transparency before you book.
          </h2>
        </div>

        {/* Two-column: statements + artifact */}
        <div className={styles.inner}>

          {/* Trust statements */}
          <div className={styles.statements}>
            <ul
              className={`${styles.statementList} reveal-group`}
              aria-label="How Pipeline Assessments are run"
            >
              {trustStatements.map((item) => (
                <li key={item.label} className={styles.statement}>
                  <div className={styles.statementHeader}>
                    <span className={styles.statementMark} aria-hidden="true">─</span>
                    <h3 className={styles.statementLabel}>{item.label}</h3>
                  </div>
                  <p className={styles.statementDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>

            {/* Process note */}
            <div className={`${styles.processNote} reveal`} aria-label="Assessment process summary">
              <div className={styles.processHeader}>
                <span className={`live-badge`}>
                  <span className="live-dot" aria-hidden="true" />
                  Assessment Protocol
                </span>
              </div>
              <ol className={styles.processList} aria-label="Assessment steps">
                {[
                  'Submit request — name, company, email, pipeline context',
                  'We review for fit signals and confirm within 1 business day',
                  'Receive a time to meet — 30 minutes, prepared review',
                  'Leave with: diagnostic, fit signal, next step, priority action',
                ].map((step, i) => (
                  <li key={step} className={styles.processStep}>
                    <span className={styles.processStepNum}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.processStepText}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Artifact — SystemMap */}
          <div className={`${styles.artifactCol} reveal`} aria-label="Pipeline infrastructure context">
            <p className={styles.artifactLabel}>
              What we are assessing against — the five-node acquisition pipeline standard.
            </p>
            <SystemMap />
          </div>

        </div>
      </div>
    </section>
  );
}
