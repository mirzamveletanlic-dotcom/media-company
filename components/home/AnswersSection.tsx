import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { answerLinks } from "@/lib/home-content";

export function AnswersSection() {
  return (
    <section
      aria-labelledby="answers-heading"
      className="viewport-full flex items-center bg-cream px-6 py-20"
    >
      <div className="mx-auto w-full max-w-[820px]">
        <h2 id="answers-heading" className="sr-only">
          Common questions
        </h2>
        <ul>
          {answerLinks.map((item, index) => (
            <ScrollReveal key={item.href} delay={index * 80}>
              <li className="border-t border-hairline py-10 text-center last:border-b">
                <Link
                  href={item.href}
                  className="text-h3 text-brown transition-opacity hover:opacity-60"
                >
                  {item.question} ›
                </Link>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
