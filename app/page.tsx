import { BeforeAfterSection } from "@/components/superside/BeforeAfterSection";
import { FaqSection } from "@/components/superside/FaqSection";
import { FinalCtaSection } from "@/components/superside/FinalCtaSection";
import { FootnoteList } from "@/components/superside/FootnoteList";
import { GlassWorkflowSection } from "@/components/superside/GlassWorkflowSection";
import { HeroSection } from "@/components/superside/HeroSection";
import { HomeNav } from "@/components/superside/HomeNav";
import { PricingSection } from "@/components/superside/PricingSection";
import { ProofBar } from "@/components/superside/ProofBar";
import { ServiceGridSection } from "@/components/superside/ServiceGridSection";
import { SplitSection } from "@/components/superside/SplitSection";
import { splitProblem, splitValue } from "@/lib/superside-home-content";

export default function HomePage() {
  return (
    <>
      <HomeNav />
      <HeroSection />
      <SplitSection {...splitProblem} />
      <ServiceGridSection />
      <GlassWorkflowSection />
      <ProofBar />
      <SplitSection {...splitValue} showCta />
      <PricingSection />
      <BeforeAfterSection />
      <FaqSection />
      <FinalCtaSection />
      <FootnoteList />
    </>
  );
}
