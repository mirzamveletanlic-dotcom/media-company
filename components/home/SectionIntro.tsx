type SectionIntroProps = {
  id?: string;
  eyebrow?: string;
  headline: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionIntro({
  id,
  eyebrow,
  headline,
  align = "left",
  dark = false,
  className = "",
}: SectionIntroProps) {
  const alignClass = align === "center" ? "mx-auto max-w-[820px] text-center" : "max-w-text";
  const headlineColor = dark ? "text-white" : "text-near-black";
  const eyebrowColor = dark ? "text-grey" : "text-grey";

  return (
    <header className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className={`text-small font-semibold tracking-wide ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`${eyebrow ? "mt-5" : ""} text-h1 ${headlineColor}`}
      >
        {headline}
      </h2>
    </header>
  );
}
