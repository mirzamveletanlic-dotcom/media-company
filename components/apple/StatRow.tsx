import { Footnote } from "./Footnote";
import type { FootnoteId } from "@/lib/apple-home-content";

type StatItem = {
  value: string;
  label: string;
  footnote?: FootnoteId;
};

type StatRowProps = {
  stats: StatItem[];
  dark?: boolean;
};

export function StatRow({ stats, dark = false }: StatRowProps) {
  const valueClass = dark ? "text-stat text-white" : "text-stat text-near-black";

  return (
    <dl className="grid gap-12 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="sr-only">{stat.label}</dt>
          <dd className={valueClass}>
            {stat.value}
            {stat.footnote && <Footnote id={stat.footnote} />}
          </dd>
          <p className="mt-3 text-caption text-grey">{stat.label}</p>
        </div>
      ))}
    </dl>
  );
}
