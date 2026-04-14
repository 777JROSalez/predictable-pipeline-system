import styles from '@/styles/modules/OutcomeBlocks.module.css';

/**
 * OutcomeBlocks — Reframe Section.
 * Left/right comparison: what most providers sell vs. what actually drives movement.
 */

const whatProvidersSell = [
  'websites',
  'SEO',
  'ads',
  'automation',
  'CRM',
  'lead generation',
  'disconnected services',
];

const whatDrivesMovement = [
  'stronger trust',
  'cleaner conversion',
  'clearer inquiry flow',
  'better opportunity capture',
  'more usable pipeline movement',
  'integrated front-end systems',
];

export default function OutcomeBlocks() {
  return (
    <section
      className={`section section--alt ${styles.reframe}`}
      aria-labelledby="reframe-heading"
      id="outcomes"
    >
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow reveal">The Real Fix</span>
          <h2
            id="reframe-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            The Answer Isn&rsquo;t More Random Marketing. It&rsquo;s Better Infrastructure.
          </h2>
        </div>

        {/* Left/right comparison */}
        <div className={`${styles.comparisonGrid} reveal-group`}>
          {/* Left: What Most Providers Sell */}
          <div className={`${styles.comparisonPanel} ${styles.panelOld}`}>
            <span className={`${styles.panelLabel} ${styles.panelLabelOld}`}>
              What Most Providers Sell
            </span>
            <ul className={styles.itemList} aria-label="What most providers sell">
              {whatProvidersSell.map((item) => (
                <li key={item} className={styles.item}>
                  <span className={`${styles.itemMark} ${styles.itemMarkOld}`} aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: What Actually Drives Movement */}
          <div className={`${styles.comparisonPanel} ${styles.panelNew}`}>
            <span className={`${styles.panelLabel} ${styles.panelLabelNew}`}>
              What Actually Drives Movement
            </span>
            <ul className={styles.itemList} aria-label="What actually drives movement">
              {whatDrivesMovement.map((item) => (
                <li key={item} className={styles.item}>
                  <span className={`${styles.itemMark} ${styles.itemMarkNew}`} aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing statement */}
        <p className={`reveal ${styles.closingStatement}`}>
          Businesses don&rsquo;t need more fragments. They need a machine that
          connects them.
        </p>
      </div>
    </section>
  );
}
