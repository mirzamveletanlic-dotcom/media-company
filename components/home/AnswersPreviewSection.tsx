import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { answerCards } from "@/lib/home-content";
import { SectionIntro } from "./SectionIntro";

export function AnswersPreviewSection() {
  return (
    <section
      aria-labelledby="answers-heading"
      className="section-padding-lg bg-white px-6"
    >
      <div className="mx-auto w-full max-w-[820px]">
        <ScrollReveal>
          <SectionIntro
            id="answers-heading"
            eyebrow="FAQ"
            headline="Common questions"
            align="center"
          />
        </ScrollReveal>

        <ul className="mt-16 md:mt-20">
          {answerCards.map((card, index) => (
            <ScrollReveal key={card.href} delay={index * 80}>
              <li>
                <Link
                  href={card.href}
                  className="group flex items-center justify-between gap-6 border-b border-hairline py-6 transition-opacity hover:opacity-60"
                >
                  <h3 className="text-h3 text-near-black">{card.question}</h3>
                  <span
                    className="shrink-0 text-h3 text-grey transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </Link>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
