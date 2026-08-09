type EyebrowProps = {
  children: string;
  light?: boolean;
};

export function Eyebrow({ children, light = false }: EyebrowProps) {
  const color = light ? "text-white/70" : "text-grey";
  const line = light ? "bg-white/30" : "bg-hairline";

  return (
    <div className="mb-6">
      <p className={`text-eyebrow uppercase tracking-widest ${color}`}>{children}</p>
      <div className={`mt-3 h-px w-full max-w-[200px] ${line}`} aria-hidden="true" />
    </div>
  );
}
