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
  { label: "Office hours", href: "/contact#hours" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-off-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <nav
          aria-label="Footer"
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <FooterColumn title="Services" links={footerServicesLinks} />
          <FooterColumn title="Answers" links={footerAnswersLinks} />
          <FooterColumn title="Company" links={footerCompanyLinks} />
          <FooterColumn title="Contact" links={footerContactLinks} />
        </nav>

        <div className="mt-16 border-t border-hairline pt-10">
          <p className="text-body font-semibold text-near-black">
            {siteConfig.legalName}
          </p>

          <address className="mt-4 not-italic">
            <p className="text-small text-grey">{formatAddress()}</p>
            <p className="mt-2 text-small">
              <a
                href={siteConfig.phoneHref}
                className="text-grey transition-opacity hover:text-near-black"
              >
                {siteConfig.phone}
              </a>
            </p>
          </address>

          <p className="mt-6 text-small text-grey">
            Serving{" "}
            {siteConfig.townsServed.map((town, index) => (
              <span key={town.href}>
                {index > 0 && index < siteConfig.townsServed.length - 1 && ", "}
                {index > 0 && index === siteConfig.townsServed.length - 1 && ", and "}
                <Link
                  href={town.href}
                  className="text-near-black underline decoration-hairline underline-offset-4 transition-opacity hover:opacity-60"
                >
                  {town.name}
                </Link>
              </span>
            ))}{" "}
            and surrounding towns in {siteConfig.region}.
          </p>

          <p className="mt-8 text-small text-grey">
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
