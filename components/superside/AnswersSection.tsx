import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { answers } from "@/lib/superside-home-content";
import { SectionIntro } from "./SectionIntro";

export function AnswersSection() {
  return (
    <section id="answers" aria-labelledby="answers-heading" className="section-pad bg-cream">
      <div className="section-inner max-w-copy">
        <ScrollReveal>
          <SectionIntro
            id="answers-heading"
            eyebrow={answers.eyebrow}
            headlineBefore={answers.headlineBefore}
            headlineSerif={answers.headlineSerif}
          />
          <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
            {answers.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-5 text-body text-forest transition-opacity hover:opacity-70"
                >
                  {item.question}
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
