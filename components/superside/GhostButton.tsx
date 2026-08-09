import Link from "next/link";

type GhostButtonProps = {
  href: string;
  children: string;
};

export function GhostButton({ href, children }: GhostButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 text-small text-white transition-colors hover:border-white/70"
    >
      {children}
    </Link>
  );
}
