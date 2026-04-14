import styles from '@/styles/modules/SectorFit.module.css';

/**
 * SectorFit — Who This Is For.
 * Six best-fit situation cards + industry line.
 * Kept tight and specific — no broad "not for" sprawl.
 */

const fitSituations = [
  {
    title: 'Real Offer, Weak System',
    description:
      'You have a legitimate service and real buyers — but the front end of the business isn\u2019t converting that potential into consistent conversations.',
  },
  {
    title: 'Some Demand, Low Movement',
    description:
      'Interest exists. Referrals come in. But there\u2019s no structured system turning that interest into qualified pipeline movement.',
  },
  {
    title: 'Outdated Website / Weak Trust',
    description:
      'Your website doesn\u2019t build confidence. Buyers visit and leave without taking action because the trust infrastructure isn\u2019t there.',
  },
  {
    title: 'Scattered Customer Acquisition',
    description:
      'Client acquisition is happening through multiple disconnected efforts — none of them tracked, none of them systematic.',
  },
  {
    title: 'Need More Structure',
    description:
      'Revenue is coming in but you can\u2019t explain why, can\u2019t replicate it reliably, and can\u2019t see where the front end is leaking.',
  },
  {
    title: 'High-Trust Service Business',
    description:
      'Your buyers need to trust you before they engage. That trust doesn\u2019t build itself — it needs a system behind it.',
  },
];

export default function SectorFit() {
  return (
    <section
      className={`section ${styles.sectorFit}`}
      aria-labelledby="sector-fit-heading"
      id="who-its-for"
    >
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">Fit Criteria</span>
          <h2
            id="sector-fit-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            Built For Service Businesses That Need A Stronger Front End
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            This is a strong fit for businesses that have a real offer but weak
            trust, conversion, or inquiry movement on the front end.
          </p>
        </div>

        {/* Fit situation cards */}
        <div
          className={`${styles.fitGrid} reveal-group`}
          role="list"
          aria-label="Best-fit business situations"
        >
          {fitSituations.map((situation) => (
            <article
              key={situation.title}
              className={`card ${styles.fitCard}`}
              role="listitem"
            >
              <div className={styles.roleHeader}>
                <div className={styles.roleMark} aria-hidden="true" />
                <h3 className={styles.role}>{situation.title}</h3>
              </div>
              <p className={styles.fit}>{situation.description}</p>
            </article>
          ))}
        </div>

        {/* Industry line */}
        <p className={`reveal ${styles.industryLine}`}>
          <span className={styles.industryLabel}>Industries</span>
          HVAC, legal, healthcare staffing, home services, premium local
          services, and other high-trust service businesses.
        </p>
      </div>
    </section>
  );
}
