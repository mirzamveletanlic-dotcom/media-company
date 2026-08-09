export type NavLink = {
  label: string;
  href: string;
};

export const mainNavLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const bookCallLink: NavLink = {
  label: "Book a call",
  href: "/book",
};

export const footerServicesLinks: NavLink[] = [
  { label: "Website design", href: "/services/website-design" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Social media", href: "/services/social-media" },
  { label: "Brand photography", href: "/services/brand-photography" },
];

export const footerAnswersLinks: NavLink[] = [
  { label: "How much does a website cost?", href: "/faq#website-cost" },
  { label: "How long does a site take?", href: "/faq#timeline" },
  { label: "What's included in pricing?", href: "/faq#whats-included" },
  { label: "Do you work with trades?", href: "/faq#trades" },
  { label: "Do you work with clinics?", href: "/faq#clinics" },
  { label: "How do I get started?", href: "/faq#get-started" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book a call", href: "/book" },
];
