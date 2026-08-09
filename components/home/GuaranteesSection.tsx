import { guarantees } from "@/lib/home-content";
import { CheckIcon } from "./ProblemIcons";

export function GuaranteesSection() {
  return (
    <section aria-labelledby="guarantees-heading" className="bg-dark section-padding">
      <div className="mx-auto max-w-text px-6">
        <h2 id="guarantees-heading" className="sr-only">
          Our guarantees
        </h2>

        <ul className="space-y-12 md:space-y-16">
          {guarantees.map((promise) => (
            <li key={promise} className="flex gap-5">
              <CheckIcon className="mt-1 h-6 w-6 shrink-0 text-white" />
              <p className="text-h2 text-white">{promise}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
