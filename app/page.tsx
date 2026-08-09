import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnswersPreviewSection } from "@/components/home/AnswersPreviewSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { GuaranteesSection } from "@/components/home/GuaranteesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PackageSection } from "@/components/home/PackageSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProofBarSection } from "@/components/home/ProofBarSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofBarSection />

      <ScrollReveal>
        <ProblemSection />
      </ScrollReveal>

      <ScrollReveal>
        <PackageSection />
      </ScrollReveal>

      <ScrollReveal>
        <GuaranteesSection />
      </ScrollReveal>

      <ScrollReveal>
        <BeforeAfterSection />
      </ScrollReveal>

      <ScrollReveal>
        <HowItWorksSection />
      </ScrollReveal>

      <ScrollReveal>
        <AnswersPreviewSection />
      </ScrollReveal>

      <ScrollReveal>
        <FinalCtaSection />
      </ScrollReveal>
    </>
  );
}
