import { BookCallLink } from "@/components/layout/BookCallLink";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { finalCtaContent } from "@/lib/home-content";

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="screen-section bg-dark px-6 text-center"
    >
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal>
          <p className="text-small font-semibold text-grey">Get started</p>
          <h2 id="final-cta-heading" className="mt-5 text-display text-white">
            {finalCtaContent.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="mt-12 flex justify-center">
            <BookCallLink inverted />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
