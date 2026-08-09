import Link from "next/link";
import type { ReactNode } from "react";

type HomeTextLinkProps = {
  href: string;
  children: ReactNode;
  light?: boolean;
};

export function HomeTextLink({ href, children, light = false }: HomeTextLinkProps) {
  const color = light
    ? "text-white/90 hover:text-white"
    : "text-accent hover:opacity-70";

  return (
    <Link href={href} className={`text-body transition-opacity ${color}`}>
      {children} ›
    </Link>
  );
}
