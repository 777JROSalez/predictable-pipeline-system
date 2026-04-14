import styles from '@/styles/modules/ProblemStatement.module.css';

/**
 * ProblemStatement — System gap narrative.
 * Headline, intro, 6 pain cards, and closing line.
 */

const painCards = [
  {
    title: 'Weak Trust',
    description: "The front end of the business doesn\u2019t build enough credibility to move buyers from interest to inquiry.",
  },
  {
    title: 'Low Conversion',
    description: "Traffic and attention exist, but the page structure and CTA hierarchy aren\u2019t converting that attention into action.",
  },
  {
    title: 'Leaking Inquiry Flow',
    description: "Inquiries come in but don\u2019t move forward. No structured follow-up, no routing, no system behind the response.",
  },
  {
    title: 'Disconnected Tools',
    description: "CRM, website, booking, and follow-up tools all exist \u2014 but they don\u2019t talk to each other or produce measurable output.",
  },
  {
    title: 'Inconsistent Pipeline',
    description: "Some months bring solid interest. Other months bring nothing. No one knows why, because there\u2019s no infrastructure to read.",
  },
  {
    title: 'Founder-Dependent Growth',
    description: "Client acquisition still depends on the founder\u2019s relationships and manual effort. Nothing moves when they step back.",
  },
];

export default function ProblemStatement() {
  return (
    <section
      className={`section ${styles.problem}`}
      aria-labelledby="problem-heading"
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.headerBlock}>
          <span className="eyebrow reveal">The System Gap</span>
          <h2
            id="problem-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            Most Service Businesses Don&rsquo;t Have a Lead Problem. They Have a System Problem.
          </h2>
          <p className={`body-intro reveal ${styles.intro}`}>
            A lot of service businesses are getting some attention, some referrals,
            or some inconsistent interest — but the front end of the business is
            still weak.
          </p>
        </div>

        {/* Pain cards */}
        <div
          className={`${styles.painGrid} reveal-group`}
          role="list"
          aria-label="Common front-end system problems"
        >
          {painCards.map((card) => (
            <article
              key={card.title}
              className={`card ${styles.painCard}`}
              role="listitem"
            >
              <div className={styles.painCardMark} aria-hidden="true" />
              <h3 className={styles.painCardTitle}>{card.title}</h3>
              <p className={styles.painCardDescription}>{card.description}</p>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <p className={`reveal ${styles.closingLine}`}>
          The result is wasted attention, leaking opportunity, and unpredictable
          pipeline movement.
        </p>
      </div>
    </section>
  );
}
