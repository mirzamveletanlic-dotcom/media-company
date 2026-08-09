"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled || menuOpen
            ? "border-b border-hairline bg-white"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <Link
            href="/"
            className="text-body font-semibold tracking-tight text-near-black"
          >
            {siteConfig.brand}
          </Link>

          <div className="hidden md:block">
            <DesktopNav />
          </div>

          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 w-full bg-near-black transition-transform duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-near-black transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-near-black transition-transform duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
