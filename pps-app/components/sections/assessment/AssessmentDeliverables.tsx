import styles from '@/styles/modules/assessment/AssessmentDeliverables.module.css';

/**
 * AssessmentDeliverables — What the prospect leaves with after the assessment.
 *
 * Four concrete outputs, regardless of whether an engagement follows.
 * This builds trust by demonstrating value-before-commitment and sets
 * accurate expectations about the session output.
 */

const deliverables = [
  {
    index: '01',
    title: 'Acquisition Flow Diagnostic',
    description:
      'A documented read of your current acquisition flow — entry points, routing gaps, and the primary structural failure point annotated against the pipeline standard.',
    qualifier: 'Delivered during the call',
  },
  {
    index: '02',
    title: 'Fit Signal',
    description:
      'A clear verdict on infrastructure readiness: right fit now, not yet, or wrong layer for your stage. Not a vague "we could help" — a concrete signal with reasoning.',
    qualifier: 'No ambiguity, no soft sell',
  },
  {
    index: '03',
    title: 'Defined Next Step',
    description:
      'If the fit is confirmed, we define the engagement structure on the call — scope, timeline, and what the build phase looks like. If not, we tell you what to address first.',
    qualifier: 'Regardless of fit decision',
  },
  {
    index: '04',
    title: 'Priority Action',
    description:
      'One concrete infrastructure action tied to your most critical gap — whether you move forward with us or not. You leave with something operationally useful.',
    qualifier: 'No commitment required',
  },
];

export default function AssessmentDeliverables() {
  return (
    <section
      className={`section ${styles.deliverables}`}
      aria-labelledby="deliverables-heading"
    >
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">Assessment Output</span>
          <h2
            id="deliverables-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            What you leave with.
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            Four outputs from a single 30-minute session — delivered on the call,
            not a week later. No follow-up deck, no PDF with vague recommendations.
          </p>
        </div>

        {/* Deliverable cards */}
        <div
          className={`${styles.grid} reveal-group`}
          role="list"
          aria-label="Pipeline Assessment deliverables"
        >
          {deliverables.map((item) => (
            <article
              key={item.index}
              className={`card ${styles.card}`}
              role="listitem"
            >
              <div className={styles.cardIndex}>{item.index}</div>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.cardDescription}>{item.description}</p>

              <div className={styles.cardQualifier}>
                <span className={styles.qualifierMark} aria-hidden="true">─</span>
                <span className={styles.qualifierText}>{item.qualifier}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
