import Link from "next/link";
import {
  footerAnswersLinks,
  footerCompanyLinks,
  footerServicesLinks,
} from "@/lib/navigation";
import { formatAddress, siteConfig } from "@/lib/site-config";
import { FooterColumn } from "./FooterColumn";

const footerContactLinks = [
  { label: "Book a call", href: "/book" },
  { label: siteConfig.phone, href: siteConfig.phoneHref },
  { label: siteConfig.email, href: siteConfig.emailHref },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep">
      <div className="section-inner section-pad">
        <nav aria-label="Footer" className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Services" links={footerServicesLinks} />
          <FooterColumn title="Answers" links={footerAnswersLinks} />
          <FooterColumn title="Company" links={footerCompanyLinks} />
          <FooterColumn title="Contact" links={footerContactLinks} />
        </nav>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-body font-semibold text-white">{siteConfig.legalName}</p>
          <address className="mt-4 not-italic text-small text-white/55">
            {formatAddress()}
          </address>
          <p className="mt-6 text-small text-white/55">
            Serving{" "}
            {siteConfig.townsServed.map((town, i) => (
              <span key={town.href}>
                {i > 0 && i < siteConfig.townsServed.length - 1 && ", "}
                {i > 0 && i === siteConfig.townsServed.length - 1 && ", and "}
                <Link href={town.href} className="text-lime/90 hover:text-lime">
                  {town.name}
                </Link>
              </span>
            ))}{" "}
            and surrounding towns in {siteConfig.region}.
          </p>
          <p className="mt-8 text-caption text-white/35">
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
