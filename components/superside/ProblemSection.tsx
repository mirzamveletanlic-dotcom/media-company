import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { problem } from "@/lib/superside-home-content";
import { Eyebrow } from "./Eyebrow";
import { Footnote } from "./Footnote";
import { MixedHeadline } from "./MixedHeadline";
import { RoundedImage } from "./RoundedImage";

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="section-block bg-cream">
      <div className="mx-auto grid max-w-wide items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        <ScrollReveal>
          <Eyebrow>{problem.eyebrow}</Eyebrow>
          <MixedHeadline
            id="problem-heading"
            before={problem.headlineBefore}
            serif={problem.headlineSerif}
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
          <p
            className="mt-10 max-w-copy text-body text-near-black"
            dangerouslySetInnerHTML={{ __html: problem.body }}
          />
        </ScrollReveal>

        <div className="aspect-[4/5] overflow-hidden rounded-image">
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
