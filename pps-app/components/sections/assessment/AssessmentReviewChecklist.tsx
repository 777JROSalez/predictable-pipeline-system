import styles from '@/styles/modules/assessment/AssessmentReviewChecklist.module.css';

/**
 * AssessmentReviewChecklist — Five-area review protocol displayed as
 * dark command-panel checklist cards.
 *
 * Each card represents one review area with a checklist of what gets examined.
 * This communicates operational depth and sets accurate expectations for
 * what the prospect will be asked about.
 */

const reviewAreas = [
  {
    id: '01',
    area: 'Acquisition Infrastructure',
    description: 'How are leads entering the system and being captured?',
    checks: [
      'Traffic sources and primary entry points',
      'Lead capture form and landing page conversion',
      'Lead tagging, routing, and initial qualification logic',
    ],
  },
  {
    id: '02',
    area: 'Routing & Qualification',
    description: 'How are leads sorted, scored, and directed after entry?',
    checks: [
      'Qualification criteria and scoring setup',
      'Segmentation between warm, cold, and disqualified leads',
      'Routing logic to sales pipeline or nurture flow',
    ],
  },
  {
    id: '03',
    area: 'Follow-Up Architecture',
    description: 'What happens after a lead enters but does not book?',
    checks: [
      'Sequence depth, timing intervals, and automation coverage',
      'Touchpoint types: email, retargeting, and SMS',
      'Re-engagement triggers for stalled or cold leads',
    ],
  },
  {
    id: '04',
    area: 'CRM & Attribution',
    description: 'Can you trace a booked call back to its source?',
    checks: [
      'Pipeline stage setup and visibility',
      'Source attribution from entry point to closed deal',
      'Stage velocity tracking and reporting cadence',
    ],
  },
  {
    id: '05',
    area: 'Conversion Checkpoints',
    description: 'Where does the pipeline break or stall?',
    checks: [
      'Primary drop-off point and stall zone identification',
      'Show/no-show rate and recovery mechanism',
      'Close-rate pattern and recurring objection structure',
    ],
  },
];

export default function AssessmentReviewChecklist() {
  return (
    <section
      className={`section ${styles.checklist}`}
      aria-labelledby="review-checklist-heading"
    >
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">Review Protocol</span>
          <h2
            id="review-checklist-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            Five areas. Every assessment.
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            The assessment follows a fixed five-area protocol. No open-ended
            conversation — a defined review framework applied to your specific
            acquisition setup.
          </p>
        </div>

        {/* Review area cards */}
        <div
          className={`${styles.grid} reveal-group`}
          role="list"
          aria-label="Pipeline assessment review areas"
        >
          {reviewAreas.map((area) => (
            <article
              key={area.id}
              className={styles.card}
              role="listitem"
            >
              {/* Card header */}
              <div className={styles.cardHeader}>
                <span className={styles.areaId}>{area.id}</span>
                <div className={styles.areaMeta}>
                  <h3 className={styles.areaName}>{area.area}</h3>
                  <p className={styles.areaDesc}>{area.description}</p>
                </div>
              </div>

              <div className={styles.divider} aria-hidden="true" />

              {/* Checklist */}
              <ul className={styles.checks} aria-label={`Review items for ${area.area}`}>
                {area.checks.map((check) => (
                  <li key={check} className={styles.checkItem}>
                    <span className={styles.checkMark} aria-hidden="true">─</span>
                    {check}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Protocol note */}
        <p className={`reveal ${styles.protocolNote}`}>
          <span className={styles.protocolLabel}>Protocol note:</span>{' '}
          Each area is reviewed in sequence. The assessment produces a gap map,
          not a general impression. You will know exactly where your primary
          structural failure point is before the call ends.
        </p>

      </div>
    </section>
  );
}
