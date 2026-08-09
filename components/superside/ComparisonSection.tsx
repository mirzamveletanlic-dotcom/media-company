import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { comparison } from "@/lib/superside-home-content";
import { SectionIntro } from "./SectionIntro";

export function ComparisonSection() {
  return (
    <section aria-labelledby="why-us-heading" className="section-pad border-t border-hairline bg-cream">
      <div className="section-inner">
        <ScrollReveal className="mb-12 md:mb-16">
          <SectionIntro
            id="why-us-heading"
            eyebrow={comparison.eyebrow}
            headlineBefore={comparison.headlineBefore}
            headlineSerif={comparison.headlineSerif}
          />
        </ScrollReveal>

        <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
          {comparison.tiles.map((tile) => (
            <li
              key={tile.title}
              className={`rounded-[var(--radius-card)] p-8 ${
                tile.highlight ? "bg-forest text-white" : "bg-white"
              }`}
            >
              <h3 className={`text-sub ${tile.highlight ? "text-lime" : "text-forest"}`}>
                {tile.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {tile.items.map((item) => (
                  <li
                    key={item}
                    className={`flex gap-3 text-small leading-relaxed ${
                      tile.highlight ? "text-white/85" : "text-near-black"
                    }`}
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        tile.highlight ? "bg-lime" : "bg-forest"
                      }`}
                      aria-hidden="true"
                    />
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
