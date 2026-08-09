import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { howItWorksSteps } from "@/lib/home-content";
import { SectionIntro } from "./SectionIntro";

export function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="screen-section bg-white px-6"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <ScrollReveal>
          <SectionIntro
            id="how-it-works-heading"
            eyebrow="Process"
            headline="How it works"
            align="center"
          />
        </ScrollReveal>

        <ol className="mt-20 grid gap-20 md:mt-28 md:grid-cols-3 md:gap-12">
          {howItWorksSteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 100}>
              <li className="text-center md:text-left">
                <p
                  className="text-display text-hairline"
                  aria-hidden="true"
                >
                  {String(step.step).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-h3 text-near-black">{step.title}</h3>
                <p className="mt-4 text-body text-grey">{step.description}</p>
                <p className="mt-8 text-small font-semibold tracking-wide text-near-black">
                  {step.timeline}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
