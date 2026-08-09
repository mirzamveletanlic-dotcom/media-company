"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { stickyNavLinks } from "@/lib/apple-home-content";
import { ApplePillButton } from "./ApplePillButton";

export function StickyProductNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-wide items-center justify-between gap-4 px-6 md:h-14">
        <Link href="/" className="shrink-0 text-small font-semibold text-near-black">
          {siteConfig.brand}
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {stickyNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-small text-near-black transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ApplePillButton href="/book">Book a call</ApplePillButton>
      </div>
    </nav>
  );
}
