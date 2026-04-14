import styles from '@/styles/modules/SystemOverview.module.css';

/**
 * SystemOverview — Why This Is Different.
 * Five differentiation points, presented as clear declarative statements.
 */

const differentiators = [
  {
    number: '01',
    title: 'We Don\u2019t Sell Random Services',
    description:
      'We install connected infrastructure. Every element is designed to work as part of a system — not as an isolated deliverable.',
  },
  {
    number: '02',
    title: 'We Think In Business Movement, Not Tasks',
    description:
      'Our measure of success is whether the front end of your business produces more qualified conversations. Not whether tasks were completed.',
  },
  {
    number: '03',
    title: 'We Focus On Qualified Conversations, Not Vanity Metrics',
    description:
      'Traffic, impressions, and engagement are not the goal. The goal is buyers who are ready to talk — and a system that gets them to you.',
  },
  {
    number: '04',
    title: 'We Build For Trust, Conversion, And Pipeline Together',
    description:
      'Most providers pick one. We engineer all three as a connected front-end system because that\u2019s what actually moves the business.',
  },
  {
    number: '05',
    title: 'We Operate Like A Systems Partner, Not A Vendor',
    description:
      'We\u2019re not here to deliver a project and disappear. We\u2019re here to install infrastructure that keeps working and improving over time.',
  },
];

export default function SystemOverview() {
  return (
    <section
      className={`section section--alt ${styles.overview}`}
      aria-labelledby="system-overview-heading"
      id="system-overview"
    >
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">Why This Works</span>
          <h2
            id="system-overview-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            Why This Is Different
          </h2>
        </div>

        {/* Differentiator grid */}
        <div
          className={`${styles.differenceGrid} reveal-group`}
          role="list"
          aria-label="What makes this approach different"
        >
          {differentiators.map((item) => (
            <article
              key={item.number}
              className={`card ${styles.differenceCard}`}
              role="listitem"
            >
              <div className={styles.stepHeader} aria-hidden="true">
                <span className={styles.stepNumber}>{item.number}</span>
                <div className={styles.copperRule} />
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
