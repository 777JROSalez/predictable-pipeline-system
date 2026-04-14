import styles from '@/styles/modules/assessment/AssessmentHero.module.css';
import AssessmentForm from '@/components/sections/AssessmentForm';

/**
 * AssessmentHero — Above-the-fold section of the Pipeline Assessment page.
 *
 * Two-column layout on desktop:
 * Left: Headline, context, outcome list, microcopy.
 * Right: Dark form panel with AssessmentForm (reused from homepage).
 *
 * The form panel uses a dark surface (charcoal) within the ivory canvas —
 * consistent with the command-center aesthetic and form style expectations.
 */

const outcomes = [
  'Current acquisition flow reviewed against infrastructure standard',
  'Primary structural gap identified and named',
  'Clear fit signal — right stage and setup, or not',
  'Defined next step if we move forward',
];

export default function AssessmentHero() {
  return (
    <section
      className={`section ${styles.hero}`}
      id="book-assessment"
      aria-labelledby="assessment-page-heading"
    >
      <div className="container">
        <div className={styles.inner}>

          {/* Left: Context + Outcomes */}
          <div className={styles.content}>
            <span className={`eyebrow hero-entry hero-entry--delay-1 ${styles.eyebrow}`}>
              Pipeline Diagnostic
            </span>

            <h1
              id="assessment-page-heading"
              className={`hero-entry hero-entry--delay-2 ${styles.headline}`}
            >
              30 minutes.
              <br />
              One structural
              <br />
              diagnosis.
            </h1>

            <p className={`hero-entry hero-entry--delay-3 ${styles.subCopy}`}>
              Not a sales call. A structured review of your acquisition flow —
              where it breaks, what&apos;s missing, and whether installing the
              infrastructure is the right move for your service business right now.
            </p>

            <ul
              className={`hero-entry hero-entry--delay-4 ${styles.outcomes}`}
              aria-label="What the diagnostic covers"
            >
              {outcomes.map((outcome) => (
                <li key={outcome} className={styles.outcome}>
                  <span className={styles.outcomeMark} aria-hidden="true">─</span>
                  {outcome}
                </li>
              ))}
            </ul>

            <p className={styles.microcopy}>
              30 min&nbsp;·&nbsp;No obligation&nbsp;·&nbsp;Fit signal, not a pitch
            </p>
          </div>

          {/* Right: Form panel */}
          <div className={styles.formPanel} aria-label="Book your Pipeline Diagnostic">
            <div className={styles.formHeader}>
              <span className={styles.formEyebrow}>Request Your Diagnostic</span>
              <p className={styles.formDesc}>
                We review each request before confirming. If there&apos;s a
                fit, you&apos;ll hear back within one business day to set a time.
              </p>
            </div>
            <AssessmentForm idPrefix="af-hero" />
          </div>

        </div>
      </div>
    </section>
  );
}
