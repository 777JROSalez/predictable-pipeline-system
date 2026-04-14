import styles from '@/styles/modules/AuditCta.module.css';
import AssessmentForm from '@/components/sections/AssessmentForm';

/**
 * AuditCta — Two-part: Process Section (canvas) + Final CTA (dark panel).
 *
 * Part 1: "What Working Together Looks Like" — 3 steps
 * Part 2: Final CTA with headline, body copy, and booking form
 */

const steps = [
  {
    number: '01',
    title: 'Pipeline Diagnostic',
    description:
      'We review how your front-end customer acquisition is currently functioning. Where the trust is weak, where conversion breaks down, and where inquiry flow is leaking.',
  },
  {
    number: '02',
    title: 'System Recommendation',
    description:
      'We give you a clear, written picture of what the structural opportunity looks like and what the right system would address.',
  },
  {
    number: '03',
    title: 'Installation',
    description:
      'If there\u2019s a genuine fit, we build and install the connected infrastructure — trust layer, conversion layer, and pipeline layer — as a working system.',
  },
];

export default function AuditCta() {
  return (
    <>
      {/* Part 1: Process Section */}
      <section
        className={`section ${styles.process}`}
        aria-labelledby="process-heading"
      >
        <div className="container">
          <div className={styles.processHeader}>
            <span className="eyebrow reveal">Working Together</span>
            <h2
              id="process-heading"
              className={`heading-section reveal ${styles.processHeadline}`}
            >
              What Working Together Looks Like
            </h2>
          </div>

          <div
            className={`${styles.processSteps} reveal-group`}
            role="list"
            aria-label="Engagement process steps"
          >
            {steps.map((step, index) => (
              <div key={step.number} className={styles.stepGroup} role="listitem">
                <article className={`card ${styles.processCard}`}>
                  <div className={styles.stepHeader} aria-hidden="true">
                    <span className={styles.stepNumber}>{step.number}</span>
                    <div className={styles.copperRule} />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </article>
                {index < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true">
                    <span className={styles.connectorArrow}>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className={`reveal ${styles.processClose}`}>
            Clean process. Clear recommendation. Serious implementation.
          </p>
        </div>
      </section>

      {/* Part 2: Final CTA — dark panel */}
      <section
        className={`section section--dark ${styles.auditCta}`}
        aria-labelledby="assessment-heading"
        id="assessment-cta"
      >
        <div className="container">
          <div className={styles.inner}>
            {/* Left: Heading */}
            <div className={styles.content}>
              <span className="eyebrow reveal">Pipeline Diagnostic</span>
              <h2
                id="assessment-heading"
                className={`heading-section reveal ${styles.headline}`}
              >
                If The Front End Of The Business Is Weak, It Will Keep Costing
                You Movement.
              </h2>
            </div>

            {/* Right: Action block */}
            <div className={`${styles.action} reveal`}>
              <p className={`body-copy ${styles.description}`}>
                If your website, trust layer, or inquiry flow is underbuilt, it
                usually costs more than it looks like. The right fix is not more
                noise. It&rsquo;s a stronger system.
              </p>

              <div className={styles.deliverables}>
                <span className="eyebrow" style={{ color: 'var(--color-panel-label)' }}>
                  In the diagnostic we look at
                </span>
                <ul className={styles.deliverableList} aria-label="Diagnostic scope">
                  {[
                    'How your front-end customer acquisition is currently functioning',
                    'Where the trust, conversion, or pipeline flow is leaking',
                    'Whether there is a real structural opportunity to improve it',
                    'What the right next move looks like for your specific situation',
                  ].map((item) => (
                    <li key={item} className={styles.deliverableItem}>
                      <span className={styles.deliverableMark} aria-hidden="true">─</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <AssessmentForm idPrefix="af-cta" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
