import Link from "next/link";
import type { ReactNode } from "react";

type AppleTextLinkProps = {
  href: string;
  children: ReactNode;
  light?: boolean;
};

export function AppleTextLink({ href, children, light = false }: AppleTextLinkProps) {
  const className = light
    ? "text-body text-accent hover:underline"
    : "text-body text-accent hover:underline";

  return (
    <Link href={href} className={className}>
      {children} ›
    </Link>
  );
}
