import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqSection } from "@/lib/superside-home-content";
import { siteConfig } from "@/lib/site-config";
import { SectionIntro } from "./SectionIntro";

export function FaqSection() {
  return (
    <section id="answers" aria-labelledby="faq-heading" className="section-pad bg-cream">
      <div className="section-inner grid gap-16 lg:grid-cols-2 lg:gap-24">
        <ScrollReveal>
          <SectionIntro
            id="faq-heading"
            eyebrow={faqSection.eyebrow}
            headlineBefore={faqSection.headlineBefore}
            headlineSerif={faqSection.headlineSerif}
          />
          <ul className="mt-10 space-y-6">
            {faqSection.comparison.map((row) => (
              <li key={row.label} className="border-t border-hairline pt-6 first:border-t-0 first:pt-0">
                <p className="text-sub text-forest">
                  {row.label.replace("[BRAND]", siteConfig.brand)}
                </p>
                <p className="mt-2 text-small text-grey">{row.detail}</p>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="text-eyebrow uppercase tracking-widest text-grey">Common questions</p>
          <div className="mt-3 h-px w-full max-w-[180px] bg-hairline" aria-hidden="true" />
          <ul className="mt-8 divide-y divide-hairline">
            {faqSection.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-5 text-body text-near-black transition-opacity hover:opacity-60"
                >
                  {item.question}
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
