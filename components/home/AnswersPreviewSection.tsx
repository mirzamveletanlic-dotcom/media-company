import Link from "next/link";
import { answerCards } from "@/lib/home-content";

export function AnswersPreviewSection() {
  return (
    <section aria-labelledby="answers-heading" className="bg-white section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 id="answers-heading" className="text-h1 text-near-black">
          Common questions
        </h2>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2">
          {answerCards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="group flex h-full flex-col justify-between border border-hairline p-8 transition-colors hover:border-near-black"
              >
                <h3 className="text-h3 text-near-black group-hover:opacity-70">
                  {card.question}
                </h3>
                <span className="mt-8 text-small text-grey">Read the answer →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
