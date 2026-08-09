import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { guarantees } from "@/lib/superside-home-content";
import { Footnote } from "./Footnote";
import { SectionIntro } from "./SectionIntro";

export function GuaranteesSection() {
  return (
    <section aria-labelledby="guarantees-heading" className="section-pad border-t border-hairline bg-cream">
      <div className="section-inner">
        <ScrollReveal className="mb-12 md:mb-16">
          <SectionIntro
            id="guarantees-heading"
            eyebrow={guarantees.eyebrow}
            headlineBefore={guarantees.headlineBefore}
            headlineSerif={guarantees.headlineSerif}
          />
        </ScrollReveal>

        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {guarantees.items.map((item) => (
            <li key={item.claim}>
              <ScrollReveal>
                <p className="text-sub leading-snug text-near-black">
                  {item.claim}
                  {"footnote" in item && item.footnote && <Footnote id={item.footnote} />}
                </p>
                <p className="mt-3 text-small text-grey">{item.detail}</p>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
