/**
 * SystemMap — Inline SVG artifact showing full acquisition pipeline.
 *
 * Renders a node-edge diagram on a dark command panel surface.
 * Nodes: Attention → Routing → Follow-Up → Booked Call → Reporting
 * Active node uses --color-mint border with pulse glow.
 *
 * DESIGN.md §10.1: System map rules:
 * - Dark panel surface (--color-panel-bg)
 * - Node labels in --font-mono, --text-xs, --color-panel-text
 * - Edge connectors: --color-copper (active), --color-rule (inactive)
 * - Active nodes: --color-mint border, --color-mint-pulse glow
 * - Never fill nodes — border color communicates state
 */
import styles from '@/styles/modules/SystemMap.module.css';

export default function SystemMap() {
  return (
    <figure
      className={styles.mapContainer}
      aria-label="Client acquisition pipeline infrastructure diagram"
      role="img"
    >
      {/* Header */}
      <div className={styles.mapHeader}>
        <span className={styles.mapLabel}>ACQUISITION.SYS — PIPELINE MAP</span>
        <span className={styles.liveBadge} aria-label="System live">
          <span className={styles.liveDot} aria-hidden="true" />
          LIVE
        </span>
      </div>

      {/* Main pipeline flow — horizontal */}
      <div className={styles.pipeline}>

        {/* Node: Attention */}
        <div className={styles.nodeGroup}>
          <div className={styles.node}>
            <span className={styles.nodeId}>01</span>
            <span className={styles.nodeLabel}>ATTENTION</span>
            <span className={styles.nodeDesc}>Traffic &amp; signals captured</span>
          </div>
          <div className={styles.nodeMeta}>
            <span className={styles.nodeCount}>∞</span>
          </div>
        </div>

        {/* Connector */}
        <div className={styles.connector} aria-hidden="true">
          <span className={styles.connectorArrow}>──›</span>
          <span className={styles.connectorLabel}>Qualified</span>
        </div>

        {/* Node: Routing */}
        <div className={styles.nodeGroup}>
          <div className={styles.node}>
            <span className={styles.nodeId}>02</span>
            <span className={styles.nodeLabel}>ROUTING</span>
            <span className={styles.nodeDesc}>Scored &amp; segmented</span>
          </div>
          <div className={styles.nodeMeta}>
            <span className={styles.nodeCount}>47.9%</span>
          </div>
        </div>

        {/* Connector */}
        <div className={styles.connector} aria-hidden="true">
          <span className={styles.connectorArrow}>──›</span>
          <span className={styles.connectorLabel}>Nurtured</span>
        </div>

        {/* Node: Follow-Up (active — mint) */}
        <div className={styles.nodeGroup}>
          <div className={`${styles.node} ${styles.nodeActive}`}>
            <span className={styles.nodeId}>03</span>
            <span className={styles.nodeLabel}>FOLLOW-UP</span>
            <span className={styles.nodeDesc}>Sequenced touchpoints</span>
          </div>
          <div className={styles.nodeMeta}>
            <span className={`${styles.nodeCount} ${styles.nodeCountActive}`}>45.6%</span>
          </div>
        </div>

        {/* Connector */}
        <div className={styles.connector} aria-hidden="true">
          <span className={styles.connectorArrow}>──›</span>
          <span className={styles.connectorLabel}>Booked</span>
        </div>

        {/* Node: Booked Call */}
        <div className={styles.nodeGroup}>
          <div className={styles.node}>
            <span className={styles.nodeId}>04</span>
            <span className={styles.nodeLabel}>CALL BOOKED</span>
            <span className={styles.nodeDesc}>Confirmed &amp; qualified</span>
          </div>
          <div className={styles.nodeMeta}>
            <span className={styles.nodeCount}>62%</span>
          </div>
        </div>

        {/* Connector */}
        <div className={styles.connector} aria-hidden="true">
          <span className={styles.connectorArrow}>──›</span>
          <span className={styles.connectorLabel}>Reported</span>
        </div>

        {/* Node: Reporting */}
        <div className={styles.nodeGroup}>
          <div className={styles.node}>
            <span className={styles.nodeId}>05</span>
            <span className={styles.nodeLabel}>REPORTING</span>
            <span className={styles.nodeDesc}>Tracked &amp; optimised</span>
          </div>
          <div className={styles.nodeMeta}>
            <span className={styles.nodeCount}>+28pp</span>
          </div>
        </div>

      </div>

      {/* Status bar */}
      <div className={styles.statusBar}>
        <span className={styles.statusItem}>
          <span className={styles.statusDot} aria-hidden="true" />
          All modules nominal
        </span>
        <span className={styles.statusDivider} aria-hidden="true">·</span>
        <span className={styles.statusItem}>5 nodes active</span>
        <span className={styles.statusTimestamp}>Updated 2m ago</span>
      </div>
    </figure>
  );
}
