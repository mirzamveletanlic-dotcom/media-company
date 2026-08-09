"use client";

import Link from "next/link";
import { mainNavLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { BookCallLink } from "@/components/layout/BookCallLink";

export function SupersideNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-6 md:h-20">
        <Link href="/" className="text-body font-semibold text-white">
          {siteConfig.brand}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <BookCallLink className="!text-caption" />
      </div>
    </header>
  );
}
