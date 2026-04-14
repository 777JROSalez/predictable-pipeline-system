import styles from '@/styles/modules/ProofBlock.module.css';

/**
 * ProofBlock — What We Actually Help Create.
 * Five outcome cards. No inflated KPIs. Honest operational outcomes.
 */

const outcomes = [
  {
    title: 'More Qualified Conversations',
    description:
      'Not more noise — more buyers who are genuinely ready to talk. The system filters and routes so the conversations that reach you are worth having.',
  },
  {
    title: 'Stronger Buyer Trust',
    description:
      'A front end that builds credibility before the conversation starts. Buyers arrive warmer, more informed, and more confident in the fit.',
  },
  {
    title: 'Cleaner Inquiry Flow',
    description:
      'Inquiries move forward instead of leaking. Follow-up is structured, automatic, and consistent — not dependent on memory or manual effort.',
  },
  {
    title: 'Better Conversion Movement',
    description:
      'More of the right people take the next step. Page structure, CTA hierarchy, and capture flow are built to convert attention into action.',
  },
  {
    title: 'More Usable Pipeline Activity',
    description:
      'Pipeline that is visible, trackable, and readable week to week. You can see what is moving, what is stalling, and why.',
  },
];

export default function ProofBlock() {
  return (
    <section
      className={`section ${styles.proof}`}
      aria-labelledby="proof-heading"
      id="proof"
    >
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">What We Create</span>
          <h2
            id="proof-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            What We Help Create
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            We do not optimize for vanity. We optimize for the things that
            actually help the business move.
          </p>
        </div>

        {/* Outcome cards */}
        <div
          className={`${styles.outcomeGrid} reveal-group`}
          role="list"
          aria-label="System outcomes"
        >
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className={`card ${styles.outcomeCard}`}
              role="listitem"
            >
              <div className={styles.outcomeMark} aria-hidden="true" />
              <h3 className={styles.outcomeTitle}>{outcome.title}</h3>
              <p className={styles.outcomeDescription}>{outcome.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
