"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNavLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-cream/95 backdrop-blur-md"
          : "border-b border-transparent bg-cream"
      }`}
    >
      <div className="section-inner flex h-[var(--nav-height)] items-center justify-between">
        <Link href="/" className="text-body font-semibold text-forest">
          {siteConfig.brand}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small text-near-black/70 transition-colors hover:text-near-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="inline-flex items-center rounded-full bg-lime px-5 py-2.5 text-caption font-semibold text-forest transition-opacity hover:opacity-85"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
