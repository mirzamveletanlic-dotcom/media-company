import Link from "next/link";

type PillButtonProps = {
  href: string;
  children: string;
};

export function PillButton({ href, children }: PillButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-body text-white transition-opacity hover:opacity-80"
    >
      {children}
    </Link>
  );
}
