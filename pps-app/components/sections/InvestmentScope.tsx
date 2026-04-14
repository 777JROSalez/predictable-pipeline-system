import styles from '@/styles/modules/InvestmentScope.module.css';

/**
 * InvestmentScope — Investment levels, scope options, and engagement model.
 *
 * Three engagement tiers shown as structured scope cards.
 * Communicates commercial seriousness through precision:
 * named deliverables, defined timelines, clear pricing structure.
 *
 * DESIGN.md: No generic pricing tables. Scope must be deliverable-specific.
 */

const engagements = [
  {
    id: 'ENG-01',
    name: 'Pipeline Diagnostic',
    tag: 'DIAGNOSTIC',
    timeline: '5 days',
    description:
      'A structured diagnostic of your current front-end system. We review trust, conversion, and inquiry flow — and deliver a clear picture of where the business is leaking and what the right fix looks like.',
    deliverables: [
      'Front-end acquisition flow reviewed in full',
      'Gap analysis — trust, conversion, and pipeline',
      'Identification of the primary structural problem',
      'Written system recommendation with build plan',
      'Clear fit signal — right move, or not',
    ],
    pricing: 'Scoped per engagement',
    note: 'Starting point for any engagement.',
    highlight: false,
    cta: true,
  },
  {
    id: 'ENG-02',
    name: 'Predictable Pipeline Installation',
    tag: 'CORE',
    timeline: '3–4 weeks',
    description:
      'Full installation of the trust, conversion, and pipeline infrastructure. Includes the Diagnostic, system design, build, and deployment across all three connected layers.',
    deliverables: [
      'Trust layer — positioning clarity and credibility signals',
      'Conversion layer — CTA hierarchy and lead capture flow',
      'Pipeline layer — inquiry routing and CRM readiness',
      'Structured follow-up and inquiry movement system',
      'Reporting and pipeline visibility dashboard',
    ],
    pricing: 'Scoped per engagement',
    note: 'Includes the Pipeline Diagnostic as Phase 1.',
    highlight: true,
  },
  {
    id: 'ENG-03',
    name: 'Pipeline Optimization & Management',
    tag: 'ONGOING',
    timeline: 'Monthly retainer',
    description:
      'Ongoing management and optimization layer on top of an installed system. Weekly reporting, conversion improvement, and quarterly architecture review.',
    deliverables: [
      'Weekly pipeline reporting (automated + reviewed)',
      'Monthly conversion and flow optimization',
      'System updates based on performance data',
      'Quarterly front-end architecture review',
      'Direct access to your system operator',
    ],
    pricing: 'Monthly retainer · scoped per system',
    note: 'Available to existing installation clients only.',
    highlight: false,
  },
];

export default function InvestmentScope() {
  return (
    <section
      className={`section section--alt ${styles.investment}`}
      aria-labelledby="investment-heading"
      id="investment-scope"
    >
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">Engagements</span>
          <h2
            id="investment-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            Three ways to work together.
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            All engagements start with the Pipeline Diagnostic. Scope and pricing
            are defined per engagement — not bundled into generic packages.
          </p>
        </div>

        {/* Engagement cards */}
        <div
          className={`${styles.grid} reveal-group`}
          role="list"
          aria-label="Engagement options"
        >
          {engagements.map((eng) => (
            <article
              key={eng.id}
              className={`${styles.engCard} ${eng.highlight ? styles.engCardHighlight : ''}`}
              role="listitem"
              aria-label={`${eng.name} engagement option`}
            >
              {/* Card header */}
              <div className={styles.engHeader}>
                <div className={styles.engIdGroup}>
                  <span className={styles.engId}>{eng.id}</span>
                  <span className={styles.engTag}>{eng.tag}</span>
                </div>
                <span className={styles.engTimeline}>{eng.timeline}</span>
              </div>

              <h3 className={styles.engName}>{eng.name}</h3>
              <p className={styles.engDescription}>{eng.description}</p>

              {/* Deliverables list */}
              <div className={styles.deliverablesBlock}>
                <span className={styles.deliverablesLabel}>Deliverables</span>
                <ul className={styles.deliverablesList} aria-label={`${eng.name} deliverables`}>
                  {eng.deliverables.map((item) => (
                    <li key={item} className={styles.deliverableItem}>
                      <span className={styles.deliverableMark} aria-hidden="true">─</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing footer */}
              <div className={styles.engFooter}>
                <div className={styles.pricingRow}>
                  <span className={styles.pricingValue}>{eng.pricing}</span>
                </div>
                <p className={styles.engNote}>{eng.note}</p>
                {(eng.highlight || eng.cta) && (
                  <a href="#assessment-cta" className={`cta-primary ${styles.engCta}`}>
                    Book a Pipeline Diagnostic
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
