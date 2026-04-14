import styles from '@/styles/modules/assessment/AssessmentFinalCta.module.css';
import AssessmentForm from '@/components/sections/AssessmentForm';

/**
 * AssessmentFinalCta — Repeated conversion section at the bottom of the page.
 *
 * Dark (charcoal) background section — mirrors homepage AuditCta visual weight.
 * Two-column layout: left framing copy + deliverable summary / right form.
 *
 * Repeating the form removes the scroll-back friction for prospects who read
 * the full page before deciding to book.
 */

export default function AssessmentFinalCta() {
  return (
    <section
      className={`section section--dark ${styles.finalCta}`}
      id="book-assessment-final"
      aria-labelledby="final-cta-heading"
    >
      <div className="container">
        <div className={styles.inner}>

          {/* Left: Framing copy */}
          <div className={styles.content}>
            <span className="eyebrow reveal">Pipeline Diagnostic</span>
            <h2
              id="final-cta-heading"
              className={`heading-section reveal ${styles.headline}`}
            >
              Ready to run the diagnostic?
            </h2>
            <p className={`body-copy reveal ${styles.description}`}>
              30 minutes. A structured review. A clear fit signal and a defined
              next step before any engagement decision is made.
            </p>

            {/* Recap deliverables */}
            <div className={`${styles.recap} reveal`} aria-label="Diagnostic deliverables recap">
              <span className={styles.recapLabel}>You leave with</span>
              <ul className={styles.recapList} aria-label="What you receive from the diagnostic">
                {[
                  'Acquisition flow diagnostic',
                  'Fit signal — yes, not yet, or wrong layer',
                  'Defined next step',
                  'Priority infrastructure action',
                ].map((item) => (
                  <li key={item} className={styles.recapItem}>
                    <span className={styles.recapMark} aria-hidden="true">─</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className={styles.microcopy}>
              30 min&nbsp;·&nbsp;No obligation&nbsp;·&nbsp;Fit signal, not a pitch
            </p>
          </div>

          {/* Right: Form */}
          <div className={`${styles.formSide} reveal`}>
            <div className={styles.formHeader}>
              <span className={styles.formEyebrow}>Request Your Diagnostic</span>
              <p className={styles.formDesc}>
                We review each request before confirming. If there&apos;s a fit,
                you&apos;ll hear back within one business day.
              </p>
            </div>
            <AssessmentForm idPrefix="af-final" />
          </div>

        </div>
      </div>
    </section>
  );
}
