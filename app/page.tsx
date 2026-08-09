import { AnswersSection } from "@/components/home/AnswersSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { GuaranteesSection } from "@/components/home/GuaranteesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MissedCallsSection } from "@/components/home/MissedCallsSection";
import { PackageSection } from "@/components/home/PackageSection";
import { ProofNumbersSection } from "@/components/home/ProofNumbersSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofNumbersSection />
      <MissedCallsSection />
      <BeforeAfterSection />
      <PackageSection />
      <GuaranteesSection />
      <HowItWorksSection />
      <AnswersSection />
      <FinalCtaSection />
    </>
  );
}
