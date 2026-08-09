"use client";

import Link from "next/link";
import { mainNavLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { BookCallLink } from "@/components/layout/BookCallLink";
import { GhostButton } from "./GhostButton";

export function SupersideNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="relative flex h-16 items-center px-6 md:h-[72px] lg:px-10">
        {/* Logo */}
        <Link href="/" className="relative z-10 text-body font-semibold text-white">
          {siteConfig.brand}
        </Link>

        {/* Center nav — absolutely centered like Superside */}
        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex xl:gap-9"
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="relative z-10 ml-auto flex items-center gap-3">
          <BookCallLink className="!px-5 !py-2.5 !text-caption" />
          <GhostButton href="/contact" className="hidden md:inline-flex">
            Contact
          </GhostButton>
        </div>
      </div>
    </header>
  );
}
