import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { guarantees } from "@/lib/superside-home-content";
import { Footnote } from "./Footnote";

export function GuaranteesSection() {
  return (
    <section aria-labelledby="guarantees-heading" className="section-block bg-forest px-6">
      <div className="mx-auto max-w-wide">
        <h2 id="guarantees-heading" className="sr-only">
          Guarantees
        </h2>
        <ul className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
            <li key={item.claim}>
              <ScrollReveal>
                <p className="text-sub text-white">
                  {item.claim}
                  {"footnote" in item && item.footnote && (
                    <Footnote id={item.footnote} light />
                  )}
                </p>
                <p className="mt-4 text-small text-white/60">{item.detail}</p>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
