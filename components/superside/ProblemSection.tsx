import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { problem } from "@/lib/superside-home-content";
import { Footnote } from "./Footnote";
import { SectionIntro } from "./SectionIntro";
import { RoundedImage } from "./RoundedImage";

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="section-pad bg-cream">
      <div className="section-inner grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <SectionIntro
            id="problem-heading"
            eyebrow={problem.eyebrow}
            headlineBefore={problem.headlineBefore}
            headlineSerif={problem.headlineSerif}
          />
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            {problem.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-stat text-forest">
                  {stat.value}
                  <Footnote id={stat.footnote} />
                </dd>
                <p className="mt-2 text-caption text-grey">{stat.label}</p>
              </div>
            ))}
          </dl>
          <p className="mt-10 max-w-copy text-body text-near-black">{problem.body}</p>
        </ScrollReveal>

        <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-card)]">
          <RoundedImage
            src={problem.imageSrc}
            alt={problem.imageAlt}
            width={problem.imageWidth}
            height={problem.imageHeight}
          />
        </div>
      </div>
    </section>
  );
}
