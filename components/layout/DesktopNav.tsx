import Link from "next/link";
import { mainNavLinks } from "@/lib/navigation";
import { BookCallLink } from "./BookCallLink";

type DesktopNavProps = {
  inverted?: boolean;
};

export function DesktopNav({ inverted = false }: DesktopNavProps) {
  const linkClass = inverted
    ? "text-small text-white/90 transition-opacity hover:opacity-60"
    : "text-small text-near-black transition-opacity hover:opacity-60";

  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-8">
        {mainNavLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <BookCallLink inverted={inverted} />
        </li>
      </ul>
    </nav>
  );
}
