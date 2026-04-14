import styles from '@/styles/modules/assessment/AssessmentFitPanel.module.css';

/**
 * AssessmentFitPanel — Fit criteria for the Pipeline Assessment.
 *
 * Condensed version of the homepage SectorFit, reframed for the
 * assessment conversion context. This is not a repeat — the homepage
 * version speaks to the infrastructure product; this one speaks to
 * assessment readiness and booking fit.
 *
 * Two-column: clear fit signals / disqualifying signals.
 */

const goodFit = [
  {
    signal: 'You have a proven service offer and existing delivery capacity',
    detail:
      'The infrastructure is designed to generate more qualified conversations, not prove the offer works.',
  },
  {
    signal: 'You have attention — but it is not converting consistently',
    detail:
      'Traffic, referrals, or organic reach exists. The gap is in routing, follow-up, or booking conversion.',
  },
  {
    signal: 'You want infrastructure, not another campaign',
    detail:
      'You understand the difference between a one-time tactic and an installed acquisition system.',
  },
  {
    signal: 'You are at or above six figures ARR and actively selling',
    detail:
      'The complexity and investment of this infrastructure is calibrated for businesses ready to scale beyond founder-led referral.',
  },
];

const notFit = [
  {
    signal: 'No existing traffic or inbound signals to route',
    detail:
      'This infrastructure amplifies and converts existing attention. It does not generate traffic from zero.',
  },
  {
    signal: 'Offer is unproven or fulfillment is inconsistent',
    detail:
      'If you cannot reliably deliver the service, installing more acquisition creates operational stress, not growth.',
  },
  {
    signal: 'Looking for a 30-day campaign or quick fix',
    detail:
      'An audit takes 5 days. A full build takes 3–4 weeks. This is installed infrastructure — not a sprint deliverable.',
  },
  {
    signal: 'E-commerce, product, or transactional businesses',
    detail:
      'This system is engineered for service businesses where the sale starts with a qualified conversation.',
  },
];

export default function AssessmentFitPanel() {
  return (
    <section
      className={`section section--alt ${styles.fitPanel}`}
      aria-labelledby="fit-panel-heading"
    >
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">Fit Criteria</span>
          <h2
            id="fit-panel-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            Designed for a specific operator profile.
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            The assessment is useful only if the infrastructure is a realistic
            next layer. Read both columns before booking — this saves everyone time.
          </p>
        </div>

        {/* Two columns */}
        <div className={styles.columns}>

          {/* Good fit */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.tag} data-variant="fit">GOOD FIT</span>
              <span className={styles.columnTitle}>Book if you match these signals</span>
            </div>
            <ul
              className={`${styles.list} reveal-group`}
              aria-label="Good fit signals for the Pipeline Assessment"
            >
              {goodFit.map((item) => (
                <li key={item.signal} className={styles.fitItem}>
                  <div className={styles.fitItemHeader}>
                    <span className={styles.fitMark} aria-hidden="true">─</span>
                    <h3 className={styles.fitSignal}>{item.signal}</h3>
                  </div>
                  <p className={styles.fitDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.tag} data-variant="not">NOT A FIT</span>
              <span className={styles.columnTitle}>Disqualifying signals</span>
            </div>
            <ul
              className={`${styles.list} reveal-group`}
              aria-label="Disqualifying signals for the Pipeline Assessment"
            >
              {notFit.map((item) => (
                <li key={item.signal} className={`${styles.fitItem} ${styles.fitItemMuted}`}>
                  <div className={styles.fitItemHeader}>
                    <span className={styles.notMark} aria-hidden="true">×</span>
                    <h3 className={styles.fitSignal}>{item.signal}</h3>
                  </div>
                  <p className={styles.fitDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
