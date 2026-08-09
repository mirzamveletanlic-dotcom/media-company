import { BeforeAfterSection } from "@/components/superside/BeforeAfterSection";
import { ComparisonSection } from "@/components/superside/ComparisonSection";
import { FinalCtaSection } from "@/components/superside/FinalCtaSection";
import { FootnoteList } from "@/components/superside/FootnoteList";
import { GlassWorkflowSection } from "@/components/superside/GlassWorkflowSection";
import { GuaranteesSection } from "@/components/superside/GuaranteesSection";
import { HeroSection } from "@/components/superside/HeroSection";
import { PricingSection, AnswersSection } from "@/components/superside/PricingSection";
import { ProblemSection } from "@/components/superside/ProblemSection";
import { ServiceGridSection } from "@/components/superside/ServiceGridSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServiceGridSection />
      <GlassWorkflowSection />
      <PricingSection />
      <GuaranteesSection />
      <BeforeAfterSection />
      <ComparisonSection />
      <AnswersSection />
      <FinalCtaSection />
      <FootnoteList />
    </>
  );
}
