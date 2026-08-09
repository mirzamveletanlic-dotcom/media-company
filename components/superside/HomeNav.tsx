"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNavLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function HomeNav() {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const dark = overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? "nav-bar-gradient"
          : "border-b border-hairline bg-cream/95 backdrop-blur-md"
      }`}
    >
      <div className="section-inner relative flex h-[var(--nav-height)] items-center">
        <Link
          href="/"
          className={`relative z-10 text-body font-semibold ${dark ? "text-white" : "text-forest"}`}
        >
          {siteConfig.brand}
        </Link>

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-small transition-colors ${
                dark ? "text-white/80 hover:text-white" : "text-near-black/70 hover:text-near-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 ml-auto flex items-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center rounded-full bg-lime px-5 py-2.5 text-caption font-semibold text-forest transition-opacity hover:opacity-85"
          >
            Book a call
          </Link>
          <Link
            href="/contact"
            className={`hidden rounded-full border px-5 py-2.5 text-caption transition-colors md:inline-flex ${
              dark
                ? "border-white/35 text-white hover:border-white/60"
                : "border-near-black/20 text-near-black hover:border-near-black/40"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
