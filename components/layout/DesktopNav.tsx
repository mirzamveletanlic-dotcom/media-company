import Link from "next/link";
import { bookCallLink, mainNavLinks } from "@/lib/navigation";
import { BookCallLink } from "./BookCallLink";

export function DesktopNav() {
  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-8">
        {mainNavLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-small text-near-black transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <BookCallLink />
        </li>
      </ul>
    </nav>
  );
}
