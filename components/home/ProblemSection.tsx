import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { problemContent } from "@/lib/home-content";
import { SectionIntro } from "./SectionIntro";

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="screen-section bg-white px-6"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <ScrollReveal>
          <SectionIntro
            id="problem-heading"
            eyebrow="The problem"
            headline={problemContent.headline}
            align="center"
          />
        </ScrollReveal>

        <ul className="mt-20 grid gap-16 md:mt-28 md:grid-cols-3 md:gap-12">
          {problemContent.cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 100}>
              <li className="text-center md:text-left">
                <h3 className="text-h3 text-near-black">{card.title}</h3>
                <p className="mt-5 text-body leading-relaxed text-grey">{card.body}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
