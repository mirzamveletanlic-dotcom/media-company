type SectionIntroProps = {
  eyebrow: string;
  headlineBefore: string;
  headlineSerif: string;
  light?: boolean;
  id?: string;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  headlineBefore,
  headlineSerif,
  light = false,
  id,
  className = "",
}: SectionIntroProps) {
  const eyebrowColor = light ? "text-white/60" : "text-grey";
  const lineColor = light ? "bg-white/25" : "bg-hairline";
  const headlineColor = light ? "text-white" : "text-near-black";
  const serifColor = light ? "text-white" : "text-forest";

  return (
    <header className={className}>
      <p className={`text-eyebrow uppercase tracking-widest ${eyebrowColor}`}>{eyebrow}</p>
      <div className={`mt-3 h-px w-full max-w-[180px] ${lineColor}`} aria-hidden="true" />
      <h2
        id={id}
        className={`mt-6 text-section leading-tight tracking-tight ${headlineColor}`}
      >
        {headlineBefore}
        <span className={`font-serif-accent ${serifColor}`}>{headlineSerif}</span>
      </h2>
    </header>
  );
}
