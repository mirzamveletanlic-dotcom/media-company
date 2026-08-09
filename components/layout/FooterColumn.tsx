import Link from "next/link";
import type { NavLink } from "@/lib/navigation";

type FooterColumnProps = {
  title: string;
  links: NavLink[];
};

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <section aria-labelledby={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2
        id={title.toLowerCase().replace(/\s+/g, "-")}
        className="text-small font-semibold text-brown"
      >
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-small text-grey transition-opacity hover:text-brown hover:opacity-80"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
