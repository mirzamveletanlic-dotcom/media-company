import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { comparison } from "@/lib/superside-home-content";
import { Eyebrow } from "./Eyebrow";
import { MixedHeadline } from "./MixedHeadline";

export function ComparisonSection() {
  return (
    <section aria-labelledby="why-us-heading" className="section-block bg-cream px-6">
      <div className="mx-auto max-w-wide">
        <ScrollReveal className="mb-16 max-w-copy">
          <Eyebrow>{comparison.eyebrow}</Eyebrow>
          <MixedHeadline
            id="why-us-heading"
            before={comparison.headlineBefore}
            serif={comparison.headlineSerif}
          />
        </ScrollReveal>
        <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
          {comparison.tiles.map((tile) => (
            <li key={tile.title}>
              <h3 className="text-sub text-forest">{tile.title}</h3>
              <ul className="mt-6 space-y-3">
                {tile.items.map((item) => (
                  <li key={item} className="flex gap-3 text-body text-near-black">
                    <span className="text-lime" aria-hidden="true">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
