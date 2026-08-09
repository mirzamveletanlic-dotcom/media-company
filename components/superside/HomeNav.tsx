"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNavLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function HomeNav() {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const onDark = overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        onDark ? "nav-bar-gradient" : "border-b border-hairline/80 bg-cream/92 backdrop-blur-lg"
      }`}
    >
      <div className="section-inner relative flex h-[var(--nav-height)] items-center">
        <Link
          href="/"
          className={`text-body font-semibold ${onDark ? "text-white" : "text-forest"}`}
        >
          {siteConfig.brand}
        </Link>

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-small transition-opacity hover:opacity-100 ${
                onDark ? "text-white/75 opacity-90 hover:text-white" : "text-near-black/65 hover:text-near-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center rounded-full bg-lime px-5 py-2.5 text-caption font-semibold text-forest transition-opacity hover:opacity-90"
          >
            Book a call
          </Link>
          <Link
            href="/contact"
            className={`hidden rounded-full border px-5 py-2.5 text-caption transition-colors md:inline-flex ${
              onDark
                ? "border-white/30 text-white hover:border-white/55"
                : "border-near-black/15 text-near-black hover:border-near-black/30"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
