import SystemMap from '@/components/artifacts/SystemMap';
import DashboardFragment from '@/components/artifacts/DashboardFragment';
import styles from '@/styles/modules/ArtifactGallery.module.css';

/**
 * ArtifactGallery — Visual showcase of system map and dashboard artifacts.
 *
 * Communicates engineering specificity by showing actual system deliverables.
 * DESIGN.md §10: Artifacts are functional system visuals, not decoration.
 *
 * Displays:
 * 1. Full acquisition pipeline map (SystemMap)
 * 2. Dashboard fragment (DashboardFragment)
 * Each with a label, description, and artifact metadata tag.
 */

const artifactMeta = [
  {
    id: 'ART-01',
    type: 'SYSTEM MAP',
    title: 'Acquisition Pipeline Architecture',
    description:
      'Node-edge diagram showing all five infrastructure modules, their inputs, outputs, and stage conversion rates. Delivered at diagnostic completion.',
    status: 'DEMO',
  },
  {
    id: 'ART-02',
    type: 'DASHBOARD FRAGMENT',
    title: 'Pipeline Monitoring Dashboard',
    description:
      'Weekly reporting view showing stage volumes, sequence conversion rates, booked call attribution, and delta vs. prior period.',
    status: 'REDACTED',
  },
];

export default function ArtifactGallery() {
  return (
    <section
      className={`section ${styles.gallery}`}
      aria-labelledby="gallery-heading"
      id="artifact-gallery"
    >
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">System Deliverables</span>
          <h2
            id="gallery-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            What the installed system produces.
          </h2>
          <p className={`body-copy reveal ${styles.intro}`}>
            These are functional deliverables — not mockups. Numbers shown are
            illustrative of what a typical client installation produces and tracks.
          </p>
        </div>

        {/* Artifact grid */}
        <div className={`${styles.artifactGrid} reveal-group`}>
          {artifactMeta.map((meta, index) => (
            <div key={meta.id} className={styles.artifactFrame}>
              {/* Artifact metadata strip */}
              <div className={styles.artifactMeta}>
                <div className={styles.artifactIdGroup}>
                  <span className={styles.artifactId}>{meta.id}</span>
                  <span className={styles.artifactType}>{meta.type}</span>
                </div>
                <span className={styles.statusRedacted}>
                  {meta.status}
                </span>
              </div>

              {/* Artifact visual */}
              <div className={styles.artifactVisual}>
                {index === 0 ? <SystemMap /> : <DashboardFragment />}
              </div>

              {/* Artifact description */}
              <div className={styles.artifactDescription}>
                <h3 className={styles.artifactTitle}>{meta.title}</h3>
                <p className={styles.artifactText}>{meta.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
