import styles from '@/styles/modules/SystemModules.module.css';

/**
 * SystemModules — How The System Works.
 * Three connected layers: Trust, Conversion, Pipeline.
 */

const layers = [
  {
    id: 'L-01',
    tag: 'TRUST',
    name: 'Trust',
    description:
      'Positioning clarity, proof and trust signals, and stronger front-end credibility. Buyers need to trust before they inquire. This layer builds it systematically.',
  },
  {
    id: 'L-02',
    tag: 'CONVERSION',
    name: 'Conversion',
    description:
      'CTA hierarchy, page structure, and lead capture flow. Once trust is established, the system makes it easy for the right buyer to take the next step.',
  },
  {
    id: 'L-03',
    tag: 'PIPELINE',
    name: 'Pipeline',
    description:
      'Inquiry movement, CRM readiness, and qualified conversation flow. A working pipeline turns captured attention into consistent, trackable business conversations.',
  },
];

export default function SystemModules() {
  return (
    <section
      className={`section ${styles.modules}`}
      aria-labelledby="modules-heading"
      id="system-modules"
    >
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">How It Works</span>
          <h2
            id="modules-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            How the System Works
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            Everything we build revolves around three connected layers:
          </p>
        </div>

        {/* Layer cards */}
        <div
          className={`${styles.moduleList} reveal-group`}
          role="list"
          aria-label="Three connected system layers"
        >
          {layers.map((layer) => (
            <article
              key={layer.id}
              className={`card ${styles.moduleCard}`}
              role="listitem"
            >
              <div className={styles.moduleHeader}>
                <div className={styles.moduleIdGroup}>
                  <span className={styles.moduleId}>{layer.id}</span>
                  <span className={styles.moduleTag}>{layer.tag}</span>
                </div>
                <div className={styles.copperRule} aria-hidden="true" />
              </div>

              <h3 className={styles.moduleName}>{layer.name}</h3>
              <p className={styles.moduleFunction}>{layer.description}</p>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <p className={`reveal ${styles.closingLine}`}>
          The goal is not more random activity. The goal is more qualified
          conversations.
        </p>
      </div>
    </section>
  );
}
