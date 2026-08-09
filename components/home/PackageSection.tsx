import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { packageContent } from "@/lib/home-content";
import { SectionIntro } from "./SectionIntro";

export function PackageSection() {
  return (
    <section
      aria-labelledby="package-heading"
      className="screen-section bg-white px-6"
    >
      <div className="mx-auto w-full max-w-[680px] text-center">
        <ScrollReveal>
          <SectionIntro
            id="package-heading"
            eyebrow="Pricing"
            headline={packageContent.headline}
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="mt-16 text-display text-near-black">
            ${packageContent.monthlyPrice}
            <span className="ml-1 text-h3 font-normal text-grey">/month</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <ul className="mt-20 w-full text-left">
            {packageContent.items.map((item) => (
              <li
                key={item}
                className="border-t border-hairline py-5 text-body text-near-black last:border-b"
              >
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={280}>
          <Link
            href="/pricing"
            className="mt-12 inline-block text-small text-accent transition-opacity hover:opacity-70"
          >
            See full pricing breakdown ›
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
