import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { proofStats } from "@/lib/home-content";

export function ProofNumbersSection() {
  return (
    <section
      aria-label="Client results"
      className="viewport-full flex items-center bg-brown px-6"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <ul className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 md:gap-y-0">
          {proofStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 80}>
              <li
                className={`text-center md:text-left ${
                  index > 0 ? "md:border-l md:border-white/15 md:pl-10" : ""
                }`}
              >
                <p className="text-display text-white">{stat.value}</p>
                <p className="mt-4 text-small text-grey">{stat.label}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
