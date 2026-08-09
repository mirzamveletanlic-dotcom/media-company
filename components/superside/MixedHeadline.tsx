type MixedHeadlineProps = {
  before: string;
  serif: string;
  after?: string;
  light?: boolean;
  className?: string;
  id?: string;
};

export function MixedHeadline({
  before,
  serif,
  after = "",
  light = false,
  className = "",
  id,
}: MixedHeadlineProps) {
  const color = light ? "text-white" : "text-near-black";

  return (
    <h2 id={id} className={`text-hero ${color} ${className}`.trim()}>
      {before}
      <span className="font-serif-accent">{serif}</span>
      {after}
    </h2>
  );
}
