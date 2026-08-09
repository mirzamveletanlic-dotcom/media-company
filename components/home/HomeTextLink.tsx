import Link from "next/link";
import type { ReactNode } from "react";

type HomeTextLinkProps = {
  href: string;
  children: ReactNode;
};

export function HomeTextLink({ href, children }: HomeTextLinkProps) {
  return (
    <Link
      href={href}
      className="text-body text-bronze underline decoration-hairline underline-offset-4 transition-opacity hover:opacity-70"
    >
      {children} ›
    </Link>
  );
}
