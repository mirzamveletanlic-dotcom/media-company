import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { proofBar } from "@/lib/superside-home-content";
import { Footnote } from "./Footnote";

export function ProofBar() {
  return (
    <section aria-label="Key metrics" className="bg-forest py-16 lg:py-20">
      <div className="section-inner">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {proofBar.stats.map((stat) => (
            <li key={stat.label}>
              <ScrollReveal>
                <p className="text-stat text-lime">
                  {stat.value}
                  {"footnote" in stat && stat.footnote && (
                    <Footnote id={stat.footnote} light />
                  )}
                </p>
                <p className="mt-3 text-small text-white/60">{stat.label}</p>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
