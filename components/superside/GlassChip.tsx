import type { ReactNode } from "react";

type GlassChipProps = {
  icon: ReactNode;
  label: string;
  description: string;
};

export function GlassChip({ icon, label, description }: GlassChipProps) {
  return (
    <div className="glass-chip flex items-start gap-4 rounded-2xl p-5 md:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white" aria-hidden="true">
        {icon}
      </div>
      <div>
        <p className="text-eyebrow uppercase tracking-widest text-white/55">{label}</p>
        <p className="mt-1.5 text-small leading-relaxed text-white/90">{description}</p>
      </div>
    </div>
  );
}

export function ClipboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
    </svg>
  );
}

export function SparkleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
      <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
    </svg>
  );
}
