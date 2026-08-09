import { BeforeAfterSection } from "@/components/superside/BeforeAfterSection";
import { ComparisonSection } from "@/components/superside/ComparisonSection";
import { FeatureSplit } from "@/components/superside/FeatureSplit";
import { FinalCtaSection } from "@/components/superside/FinalCtaSection";
import { FootnoteList } from "@/components/superside/FootnoteList";
import { GuaranteesSection } from "@/components/superside/GuaranteesSection";
import { HeroSection } from "@/components/superside/HeroSection";
import { PricingSection, AnswersSection } from "@/components/superside/PricingSection";
import { ProblemSection } from "@/components/superside/ProblemSection";
import { ProcessSection } from "@/components/superside/ProcessSection";
import { services } from "@/lib/superside-home-content";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />

      <section id="services" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Services
        </h2>
        {services.map((service) => (
          <FeatureSplit key={service.id} {...service} />
        ))}
      </section>

      <PricingSection />
      <GuaranteesSection />
      <ProcessSection />
      <BeforeAfterSection />
      <ComparisonSection />
      <AnswersSection />
      <FinalCtaSection />
      <FootnoteList />
    </>
  );
}
