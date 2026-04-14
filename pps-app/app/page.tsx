import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import ProblemStatement from '@/components/sections/ProblemStatement';
import OutcomeBlocks from '@/components/sections/OutcomeBlocks';
import SystemModules from '@/components/sections/SystemModules';
import SystemOverview from '@/components/sections/SystemOverview';
import SectorFit from '@/components/sections/SectorFit';
import CaseStudySnapshots from '@/components/sections/CaseStudySnapshots';
import ProofBlock from '@/components/sections/ProofBlock';
import ArtifactGallery from '@/components/sections/ArtifactGallery';
import InvestmentScope from '@/components/sections/InvestmentScope';
import FAQ from '@/components/sections/FAQ';
import AuditCta from '@/components/sections/AuditCta';
import Footer from '@/components/sections/Footer';
import ScrollRevealSection from '@/components/ui/ScrollRevealSection';

/**
 * Homepage — Full section assembly.
 *
 * Section map:
 *  1. Nav                  ─ Sticky navigation · "Book a Pipeline Diagnostic" CTA
 *  2. Hero                 ─ Headline: "Install the Systems That Turn Attention Into Qualified Conversations"
 *  3. Trust Strip          ─ High-trust service industry categories
 *  4. Problem Section      ─ "Most Service Businesses Don't Have a Lead Problem. They Have a System Problem."
 *  5. Reframe Section      ─ "The Answer Isn't More Random Marketing. It's Better Infrastructure."
 *  6. How The System Works ─ Three connected layers: Trust · Conversion · Pipeline
 *  7. Why This Is Different ─ Five differentiators as structured statements
 *  8. Who This Is For      ─ Six best-fit situations + industry line
 *  9. System Installs      ─ Representative anonymised business installs
 * 10. Outcomes Section     ─ "What We Actually Help Create" — five honest outcomes
 * 11. Artifact Gallery     ─ System map + dashboard visual
 * 12. Engagements          ─ Pipeline Diagnostic · Predictable Pipeline Installation · Pipeline Optimization & Management
 * 13. FAQ                  ─ Objection handling
 * 14. Process + Final CTA  ─ "What Working Together Looks Like" + booking form
 * 15. Footer               ─ Brand · nav · credibility tags · legal
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Navigation */}
      <Nav />

      <main id="main-content">

        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Problem Section */}
        <ScrollRevealSection>
          <ProblemStatement />
        </ScrollRevealSection>

        {/* 5. Reframe Section */}
        <ScrollRevealSection>
          <OutcomeBlocks />
        </ScrollRevealSection>

        {/* 6. How The System Works */}
        <ScrollRevealSection>
          <SystemModules />
        </ScrollRevealSection>

        {/* 7. Why This Is Different */}
        <ScrollRevealSection>
          <SystemOverview />
        </ScrollRevealSection>

        {/* 8. Who This Is For */}
        <ScrollRevealSection>
          <SectorFit />
        </ScrollRevealSection>

        {/* 9. System Installs */}
        <ScrollRevealSection>
          <CaseStudySnapshots />
        </ScrollRevealSection>

        {/* 10. Outcomes Section */}
        <ScrollRevealSection>
          <ProofBlock />
        </ScrollRevealSection>

        {/* 11. Artifact Gallery */}
        <ScrollRevealSection>
          <ArtifactGallery />
        </ScrollRevealSection>

        {/* 12. Engagements */}
        <ScrollRevealSection>
          <InvestmentScope />
        </ScrollRevealSection>

        {/* 13. FAQ */}
        <ScrollRevealSection>
          <FAQ />
        </ScrollRevealSection>

        {/* 14. Process Section + Final CTA */}
        <ScrollRevealSection>
          <AuditCta />
        </ScrollRevealSection>

      </main>

      {/* 15. Footer */}
      <Footer />
    </>
  );
}
