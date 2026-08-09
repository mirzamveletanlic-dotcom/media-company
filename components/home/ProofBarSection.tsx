import { proofStats } from "@/lib/home-content";

export function ProofBarSection() {
  return (
    <section aria-label="Client results" className="bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <ul className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4 md:gap-y-0">
          {proofStats.map((stat, index) => (
            <li
              key={stat.label}
              className={`${
                index > 0 ? "md:border-l md:border-white/15 md:pl-10" : ""
              }`}
            >
              <p className="text-display text-white">{stat.value}</p>
              <p className="mt-4 max-w-[220px] text-small leading-snug text-grey">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
