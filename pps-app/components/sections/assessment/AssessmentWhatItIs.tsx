import styles from '@/styles/modules/assessment/AssessmentWhatItIs.module.css';

/**
 * AssessmentWhatItIs — Clarifies what the assessment is and is not.
 *
 * Prevents misaligned expectations before the prospect scrolls deeper.
 * Two-column layout: "What it is" / "What it is not".
 */

const isItems = [
  {
    label: 'A structured diagnostic',
    detail:
      'We enter the call with a defined review framework — not an open agenda. Five areas of your acquisition infrastructure are assessed against an operational standard.',
  },
  {
    label: 'Infrastructure-focused',
    detail:
      'We review systems, routing logic, follow-up architecture, and attribution. Not brand, content, or traffic volume.',
  },
  {
    label: 'Preparation-light for you',
    detail:
      'We do the framework work. You come with access and context. The review takes 30 minutes — not a half-day discovery process.',
  },
  {
    label: 'Fit-first',
    detail:
      'The output is a clear signal: right fit, not yet, or wrong layer entirely. No ambiguous "we can help" endings.',
  },
];

const isNotItems = [
  {
    label: 'Not a sales call',
    detail:
      'We are reviewing fit, not closing you. If you are not the right stage or setup, we will tell you — and explain why.',
  },
  {
    label: 'Not a free consulting session',
    detail:
      'We are not solving your pipeline problems in 30 minutes. We are diagnosing the structural layer — the gap, not the fix.',
  },
  {
    label: 'Not open-ended discovery',
    detail:
      'We are not learning your business from scratch on the call. Each diagnostic follows the same five-area review protocol.',
  },
  {
    label: 'Not a commitment to engage',
    detail:
      'Booking a diagnostic does not start an engagement. A fit signal, a defined next step — then a decision. In that order.',
  },
];

export default function AssessmentWhatItIs() {
  return (
    <section
      className={`section section--alt ${styles.whatItIs}`}
      aria-labelledby="what-it-is-heading"
    >
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">The Diagnostic</span>
          <h2
            id="what-it-is-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            A structured diagnostic.
            <br />
            Not a sales call.
          </h2>
        </div>

        {/* Two columns */}
        <div className={styles.columns}>

          {/* What it is */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.columnTag} data-variant="is">IS</span>
              <span className={styles.columnTitle}>What the diagnostic is</span>
            </div>
            <ul className={`${styles.list} reveal-group`} aria-label="What the diagnostic is">
              {isItems.map((item) => (
                <li key={item.label} className={styles.listItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemMark} aria-hidden="true">─</span>
                    <h3 className={styles.itemLabel}>{item.label}</h3>
                  </div>
                  <p className={styles.itemDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* What it is not */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.columnTag} data-variant="not">IS NOT</span>
              <span className={styles.columnTitle}>What it is not</span>
            </div>
            <ul className={`${styles.list} reveal-group`} aria-label="What the diagnostic is not">
              {isNotItems.map((item) => (
                <li key={item.label} className={`${styles.listItem} ${styles.listItemMuted}`}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemMarkNot} aria-hidden="true">×</span>
                    <h3 className={styles.itemLabel}>{item.label}</h3>
                  </div>
                  <p className={styles.itemDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
