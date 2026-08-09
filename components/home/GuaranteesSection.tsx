import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { guarantees } from "@/lib/home-content";

export function GuaranteesSection() {
  return (
    <section
      aria-labelledby="guarantees-heading"
      className="screen-section bg-dark px-6"
    >
      <div className="mx-auto w-full max-w-[820px] text-center">
        <ScrollReveal>
          <h2 id="guarantees-heading" className="sr-only">
            Our guarantees
          </h2>
          <p className="text-small font-semibold text-grey">Our guarantees</p>
        </ScrollReveal>

        <ul className="mt-16 space-y-16 md:mt-20 md:space-y-24">
          {guarantees.map((promise, index) => (
            <ScrollReveal key={promise} delay={index * 120}>
              <li>
                <p className="text-h1 text-white">{promise}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
