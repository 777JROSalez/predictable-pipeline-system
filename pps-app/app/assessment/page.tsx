import type { Metadata } from 'next';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import ScrollRevealSection from '@/components/ui/ScrollRevealSection';
import AssessmentHero from '@/components/sections/assessment/AssessmentHero';
import AssessmentWhatItIs from '@/components/sections/assessment/AssessmentWhatItIs';
import AssessmentReviewChecklist from '@/components/sections/assessment/AssessmentReviewChecklist';
import AssessmentFitPanel from '@/components/sections/assessment/AssessmentFitPanel';
import AssessmentDeliverables from '@/components/sections/assessment/AssessmentDeliverables';
import AssessmentTrust from '@/components/sections/assessment/AssessmentTrust';
import AssessmentFinalCta from '@/components/sections/assessment/AssessmentFinalCta';

export const metadata: Metadata = {
  title: 'Book a Pipeline Diagnostic — Predictable Pipeline Systems',
  description:
    'A 30-minute structured diagnostic for service businesses. We review your acquisition flow, identify the primary gap, and give you a clear fit signal — before any commitment is made.',
  openGraph: {
    title: 'Book a Pipeline Diagnostic — Predictable Pipeline Systems',
    description:
      'Not a sales call. A structured review of your acquisition infrastructure with a clear next step.',
    type: 'website',
    siteName: 'Predictable Pipeline Systems',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Pipeline Diagnostic — Predictable Pipeline Systems',
    description:
      'Not a sales call. A structured review of your acquisition infrastructure with a clear next step.',
  },
};

/**
 * Assessment Page — Primary conversion route for Pipeline Assessment bookings.
 *
 * Section map:
 *  1. Hero + booking form       ─ Above fold: headline, form, outcomes
 *  2. What this is              ─ Diagnostic vs. sales call framing
 *  3. What we review            ─ 5 review area checklist cards
 *  4. Fit criteria              ─ Good fit / not fit operator signals
 *  5. What you leave with       ─ 4 concrete deliverables
 *  6. Trust + transparency      ─ How we run assessments + artifact
 *  7. Final booking CTA         ─ Repeated form + secondary CTA
 */
export default function AssessmentPage() {
  return (
    <>
      <Nav />

      <main id="main-content">

        {/* 1. Hero + booking form */}
        <AssessmentHero />

        {/* 2. What this assessment is */}
        <ScrollRevealSection>
          <AssessmentWhatItIs />
        </ScrollRevealSection>

        {/* 3. What we review */}
        <ScrollRevealSection>
          <AssessmentReviewChecklist />
        </ScrollRevealSection>

        {/* 4. Fit criteria */}
        <ScrollRevealSection>
          <AssessmentFitPanel />
        </ScrollRevealSection>

        {/* 5. What you leave with */}
        <ScrollRevealSection>
          <AssessmentDeliverables />
        </ScrollRevealSection>

        {/* 6. Trust + transparency */}
        <ScrollRevealSection>
          <AssessmentTrust />
        </ScrollRevealSection>

        {/* 7. Final booking CTA */}
        <ScrollRevealSection>
          <AssessmentFinalCta />
        </ScrollRevealSection>

      </main>

      <Footer />
    </>
  );
}
