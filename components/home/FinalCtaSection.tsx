import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { finalCtaContent } from "@/lib/home-content";
import { PillButton } from "./PillButton";

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="viewport-full flex items-center justify-center bg-dark px-6 text-center"
    >
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal>
          <h2 id="final-cta-heading" className="text-display text-white">
            {finalCtaContent.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="mt-12 flex justify-center">
            <PillButton href="/book">Book a call</PillButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
