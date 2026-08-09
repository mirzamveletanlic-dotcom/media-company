import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { pricing } from "@/lib/superside-home-content";
import { LimeButton } from "./LimeButton";
import { SectionIntro } from "./SectionIntro";

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="section-pad bg-forest">
      <div className="section-inner grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        <ScrollReveal>
          <SectionIntro
            id="pricing-heading"
            eyebrow={pricing.eyebrow}
            headlineBefore={pricing.headlineBefore}
            headlineSerif={pricing.headlineSerif}
            light
          />
          <p className="mt-8 max-w-copy text-body text-white/70">{pricing.body}</p>
          <div className="mt-10">
            <LimeButton href="/book" className="!px-7 !py-3.5">
              Book a call
            </LimeButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="text-stat text-lime">${pricing.price}/mo</p>
          <ul className="mt-8 space-y-4 border-t border-white/15 pt-8">
            {pricing.includes.map((item) => (
              <li key={item} className="flex gap-3 text-body text-white/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
