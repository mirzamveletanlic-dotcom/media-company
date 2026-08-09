import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IMAGE_BLUR, pricing } from "@/lib/superside-home-content";
import { LimeButton } from "./LimeButton";
import { SectionIntro } from "./SectionIntro";

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative overflow-hidden">
      <Image
        src={pricing.imageSrc}
        alt=""
        fill
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest/[0.96] via-forest/90 to-forest/55"
        aria-hidden="true"
      />

      <div className="section-inner relative section-pad">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-24">
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
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
