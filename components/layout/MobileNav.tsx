"use client";

import Link from "next/link";
import { useEffect } from "react";
import { bookCallLink, mainNavLinks } from "@/lib/navigation";
import { BookCallLink } from "./BookCallLink";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const mobileLinks = [...mainNavLinks, bookCallLink];

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="mobile-nav-overlay fixed inset-0 z-50 bg-cream md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <nav
        id="mobile-navigation"
        aria-label="Main"
        className="flex h-full flex-col px-6 pt-28"
      >
        <ul className="flex flex-col gap-6">
          {mobileLinks.map((link, index) => (
            <li
              key={link.href}
              className="mobile-nav-link"
              style={{ animationDelay: `${index * 60 + 80}ms` }}
            >
              {link.href === bookCallLink.href ? (
                <BookCallLink className="text-body" />
              ) : (
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-h2 text-brown"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
