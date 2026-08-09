import { problemContent } from "@/lib/home-content";
import { MonitorIcon, PhoneIcon, SearchIcon } from "./ProblemIcons";

const iconMap = {
  phone: PhoneIcon,
  search: SearchIcon,
  monitor: MonitorIcon,
} as const;

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="bg-white section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 id="problem-heading" className="text-h1 text-near-black max-w-text">
          {problemContent.headline}
        </h2>

        <ul className="mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
          {problemContent.cards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <li
                key={card.id}
                className="border-t border-hairline pt-8"
              >
                <Icon className="h-6 w-6 text-near-black" />
                <h3 className="mt-6 text-h3 text-near-black">{card.title}</h3>
                <p className="mt-4 text-body text-grey">{card.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
