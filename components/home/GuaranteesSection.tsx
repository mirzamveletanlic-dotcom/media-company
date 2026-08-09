import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { guarantees } from "@/lib/home-content";

export function GuaranteesSection() {
  return (
    <section aria-labelledby="guarantees-heading" className="bg-dark">
      <h2 id="guarantees-heading" className="sr-only">
        Our guarantees
      </h2>
      <ul>
        {guarantees.map((promise, index) => (
          <li
            key={promise}
            className="viewport-third flex items-center justify-center px-6"
          >
            <ScrollReveal delay={index * 80}>
              <p className="max-w-[820px] text-center text-h1 text-white">
                {promise}
              </p>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
