import Link from "next/link";

type ApplePillButtonProps = {
  href: string;
  children: string;
};

export function ApplePillButton({ href, children }: ApplePillButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-small text-white transition-opacity hover:opacity-80"
    >
      {children}
    </Link>
  );
}
