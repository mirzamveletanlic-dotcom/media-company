import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { packageContent } from "@/lib/home-content";
import { HomeTextLink } from "./HomeTextLink";

export function PackageSection() {
  return (
    <section
      aria-labelledby="package-heading"
      className="viewport-full flex items-center bg-cream px-6"
    >
      <div className="mx-auto w-full max-w-[680px] text-center">
        <ScrollReveal>
          <h2 id="package-heading" className="text-display text-brown">
            {packageContent.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ul className="mt-16 space-y-5">
            {packageContent.items.map((item) => (
              <li key={item} className="text-body text-brown">
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p className="mt-20 text-display text-brown">
            ${packageContent.monthlyPrice}
            <span className="text-h3 font-normal text-grey">/month</span>
          </p>
          <div className="mt-10">
            <HomeTextLink href="/pricing">Full pricing breakdown</HomeTextLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
