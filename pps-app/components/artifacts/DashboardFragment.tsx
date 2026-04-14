/**
 * DashboardFragment — Dark command-panel artifact for the hero section.
 *
 * This is handcrafted HTML/CSS — not an image — so it is lightweight,
 * fully accessible, and renders at 90+ Lighthouse performance.
 *
 * Purpose: Communicates "live monitored pipeline" without stock photography.
 * It is a functional visual artifact, not decoration.
 */
import styles from '@/styles/modules/DashboardFragment.module.css';

const stages = [
  { label: 'COLD', count: '···', rate: '—' },
  { label: 'QUALIFIED', count: '···', rate: '~48%' },
  { label: 'ACTIVE', count: '···', rate: '~46%' },
  { label: 'CLOSE', count: '···', rate: '~45%' },
];

const metrics = [
  { label: 'Pipeline Value', value: '——', delta: '↑ trending', live: true },
  { label: 'Stage Velocity', value: '< 14d', delta: '↓ improving', live: false },
  { label: 'Close Rate', value: '> 55%', delta: '↑ above avg', live: true },
];

export default function DashboardFragment() {
  return (
    <figure
      className={styles.fragment}
      aria-label="Pipeline monitoring dashboard — illustrative system view"
      role="img"
    >
      {/* Header bar */}
      <div className={styles.header}>
        <span className={styles.systemLabel}>PIPELINE.SYS</span>
        <span className={styles.liveBadge} aria-label="Illustrative demo view">
          <span className={styles.liveDot} aria-hidden="true" />
          DEMO
        </span>
      </div>

      {/* Routing diagram */}
      <div className={styles.routing} aria-label="Pipeline stages">
        {stages.map((stage, index) => (
          <div key={stage.label} className={styles.stageGroup}>
            <div
              className={`${styles.stage} ${stage.label === 'ACTIVE' ? styles.stageActive : ''}`}
            >
              <span className={styles.stageLabel}>{stage.label}</span>
              <span className={styles.stageCount}>{stage.count}</span>
            </div>
            {index < stages.length - 1 && (
              <div className={styles.connector} aria-hidden="true">
                <span className={styles.connectorRate}>{stages[index + 1].rate}</span>
                <span className={styles.connectorArrow}>──›</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Metric cards */}
      <div className={styles.metricsGrid} aria-label="Key metrics">
        {metrics.map((metric) => (
          <dl key={metric.label} className={styles.metricCard}>
            <dt className={styles.metricLabel}>{metric.label}</dt>
            <dd className={styles.metricValue}>{metric.value}</dd>
            <dd
              className={`${styles.metricDelta} ${metric.live ? styles.metricDeltaLive : styles.metricDeltaCopper}`}
            >
              {metric.delta}
            </dd>
          </dl>
        ))}
      </div>

      {/* Status line */}
      <div className={styles.statusLine}>
        <span className={styles.statusItem}>
          <span className={styles.statusDot} aria-hidden="true" />
          System nominal
        </span>
        <span className={styles.statusTimestamp}>Illustrative view</span>
      </div>
    </figure>
  );
}
