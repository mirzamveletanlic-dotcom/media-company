import { proofStats } from "@/lib/home-content";

export function ProofBarSection() {
  return (
    <section aria-label="Client results" className="bg-dark section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        <dl className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {proofStats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-small text-grey">{stat.label}</dt>
              <dd className="mt-3 text-h1 text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
