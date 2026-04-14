import styles from '@/styles/modules/CaseStudySnapshots.module.css';

/**
 * CaseStudySnapshots — Three redacted case study cards.
 *
 * Each snapshot answers: What business type? What was the problem?
 * What was installed? What changed? In what timeframe?
 *
 * Uses Evidence Card pattern from DESIGN.md §7.4:
 * - Oxblood authority mark (■)
 * - Metric-anchored outcomes
 * - Sector + role attribution (name optional / redacted)
 */

const snapshots = [
  {
    sector: 'Professional Services Firm',
    role: 'Principal · Multi-person team · Anonymised',
    problem: 'Inbound inquiries came through multiple channels with no routing. Most never received structured follow-up. Pipeline was tracked manually and inconsistently.',
    installed: 'Unified intake layer, automated follow-up sequence, booking page with pre-qualification logic, weekly attribution report.',
    outcome: 'Pipeline movement confirmed within 60 days. Booked call rate from inbound improved above the previous baseline.',
    timeframe: '60 days post-install',
    metric: 'More movement',
    metricLabel: 'In 60 days',
  },
  {
    sector: 'B2B Consulting Practice',
    role: 'Founder · Solo operator scaling · Anonymised',
    problem: 'Operating on referral entirely. No outbound system. No follow-up sequence. Months of uneven revenue with no visibility into why.',
    installed: 'Lead routing with signal scoring, multi-touch follow-up sequence, automated booking system, monthly reporting dashboard.',
    outcome: 'First non-referral booked call within two weeks of go-live. Multiple new clients from sequence-generated pipeline in first quarter.',
    timeframe: 'Q1 post-install',
    metric: 'First non-referral clients',
    metricLabel: 'From structured pipeline',
  },
  {
    sector: 'Service Business · B2B Focus',
    role: 'Founder · Growing team · Anonymised',
    problem: 'Outreach was ad-hoc. No structured follow-up cadence. Leads marked "follow up later" and never touched again. Close rate was low and unexplained.',
    installed: 'Routing engine with ICP scoring, multi-step sequence with reply-triggered branching, CRM pipeline stages with velocity tracking.',
    outcome: 'Stage velocity improved over 90 days. Close rate moved upward. Pipeline became measurable for the first time.',
    timeframe: '90 days post-install',
    metric: 'Measurable pipeline',
    metricLabel: 'For the first time',
  },
];

export default function CaseStudySnapshots() {
  return (
    <section
      className={`section section--alt ${styles.snapshots}`}
      aria-labelledby="cases-heading"
      id="case-studies"
    >
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">System Installs</span>
          <h2
            id="cases-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            What installing this system has looked like in practice.
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            All clients anonymised. Business type, situation, and installed
            system are representative. Outcomes described are truthful but
            not guaranteed — every business situation is different.
          </p>
        </div>

        {/* Snapshot cards */}
        <div
          className={`${styles.grid} reveal-group`}
          role="list"
          aria-label="Case study snapshots"
        >
          {snapshots.map((snap) => (
            <article
              key={snap.sector}
              className={`card ${styles.snapshotCard}`}
              role="listitem"
            >
              {/* Sector header */}
              <div className={styles.snapshotHeader}>
                <span className={styles.authorityMark} aria-hidden="true" />
                <div>
                  <span className={styles.snapshotSector}>{snap.sector}</span>
                  <span className={styles.snapshotRole}>{snap.role}</span>
                </div>
              </div>

              {/* Problem */}
              <div className={styles.snapshotBlock}>
                <span className={styles.blockLabel}>Problem</span>
                <p className={styles.blockText}>{snap.problem}</p>
              </div>

              {/* Installed */}
              <div className={styles.snapshotBlock}>
                <span className={styles.blockLabel}>Installed</span>
                <p className={styles.blockText}>{snap.installed}</p>
              </div>

              {/* Outcome metric */}
              <div className={styles.outcomeStrip}>
                <div>
                  <span className={styles.outcomeMetricValue}>{snap.metric}</span>
                  <span className={styles.outcomeMetricLabel}>{snap.metricLabel}</span>
                </div>
                <div className={styles.outcomeDivider} aria-hidden="true" />
                <div>
                  <span className={styles.outcomeTimeframe}>{snap.timeframe}</span>
                  <span className={styles.outcomeResult}>{snap.outcome}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
