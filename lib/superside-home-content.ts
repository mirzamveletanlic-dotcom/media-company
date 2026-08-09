import { siteConfig } from "@/lib/site-config";

export const IMAGE_BLUR =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%23d8d0c4'/%3E%3C/svg%3E";

export const footnotes = {
  1: "Based on call-tracking data across 12 active clients, Jan–Dec 2025.",
  2: "Google local pack shows three businesses for most map searches in [CITY].",
  3: "Stanford Web Credibility Research, 2002 — still cited in UX industry surveys.",
  4: "30-day guarantee applies after client provides approved copy and assets within 5 business days.",
  5: "Renewal rate measured at 12-month mark across clients who joined before Jan 2025.",
  6: "Average launch timeline from signed agreement to live site, last 20 projects.",
} as const;

export type FootnoteId = keyof typeof footnotes;

export type MasonryTile = {
  src: string;
  alt: string;
  width: number;
  height: number;
  tileHeight: "sm" | "md" | "lg" | "xl";
};

export const hero = {
  headlineBefore: "Websites built to ",
  headlineSerif: "book jobs.",
  subline: `One team for trades, clinics, and restaurants in ${siteConfig.city}. Website, SEO, social, and video — $497/month, live in 21 days.`,
  masonryColumns: [
    [
      { src: "/images/hero.jpg", alt: "Contractor on a job site", width: 600, height: 750, tileHeight: "xl" as const },
      { src: "/images/after.jpg", alt: "Professional brand presentation", width: 600, height: 450, tileHeight: "md" as const },
      { src: "/images/step-launch.jpg", alt: "Website launch", width: 600, height: 400, tileHeight: "lg" as const },
    ],
    [
      { src: "/images/missed-calls.jpg", alt: "Local search on phone", width: 600, height: 500, tileHeight: "lg" as const },
      { src: "/images/step-build.jpg", alt: "Website design", width: 600, height: 799, tileHeight: "md" as const },
      { src: "/images/before.jpg", alt: "Website before redesign", width: 600, height: 500, tileHeight: "xl" as const },
    ],
    [
      { src: "/images/step-discovery.jpg", alt: "Content planning session", width: 600, height: 800, tileHeight: "xl" as const },
      { src: "/images/step-launch.jpg", alt: "Analytics review", width: 600, height: 400, tileHeight: "sm" as const },
      { src: "/images/missed-calls.jpg", alt: "Google map results", width: 600, height: 500, tileHeight: "md" as const },
    ],
  ],
} as const;

export const problem = {
  eyebrow: "THE PROBLEM",
  headlineBefore: "Missing jobs ",
  headlineSerif: "every week",
  stats: [
    { value: "62%", label: "Callers who hang up on voicemail", footnote: 1 as FootnoteId },
    { value: "3", label: "Spots in the Google map pack", footnote: 2 as FootnoteId },
    { value: "75%", label: "People who judge you by your website", footnote: 3 as FootnoteId },
  ],
  body: `Missed calls go to your competitor. When the phone rolls to voicemail on a job site, most callers never leave a message. If you are not in the map pack, you are invisible for the searches that book the most work.`,
  imageSrc: "/images/missed-calls.jpg",
  imageAlt: "Contractor missing a call on a job site",
  imageWidth: 1920,
  imageHeight: 1280,
} as const;

export const servicesSection = {
  eyebrow: "SERVICES",
  headlineBefore: "Everything to ",
  headlineSerif: "book more jobs",
} as const;

export const serviceCards = [
  {
    id: "websites",
    title: "Websites that book calls",
    description: "Mobile-first. Click-to-call above the fold. Copy written for one goal. Live in 21 days.",
    imageSrc: "/images/step-build.jpg",
    imageAlt: "Website design on a laptop",
    imageWidth: 1200,
    imageHeight: 799,
    descriptionPosition: "bottom" as const,
    href: "/services/website-design",
  },
  {
    id: "google",
    title: "Local SEO",
    description: "Google Business Profile, citations, review requests, and monthly ranking reports.",
    imageSrc: "/images/missed-calls.jpg",
    imageAlt: "Local search results on a phone",
    imageWidth: 1920,
    imageHeight: 1280,
    descriptionPosition: "below-title" as const,
    href: "/services/local-seo",
  },
  {
    id: "social",
    title: "Social media",
    description: "Eight on-brand posts per month. We edit your job-site photos and write every caption.",
    imageSrc: "/images/step-discovery.jpg",
    imageAlt: "Team planning social content",
    imageWidth: 1200,
    imageHeight: 800,
    descriptionPosition: "below-title" as const,
    href: "/services/social-media",
  },
  {
    id: "video",
    title: "Video production",
    description: "Quarterly shoots. Before/after reveals, walkthroughs, and testimonials for every channel.",
    imageSrc: "/images/hero.jpg",
    imageAlt: "Trade work in progress",
    imageWidth: 1920,
    imageHeight: 1272,
    descriptionPosition: "below-title" as const,
    href: "/services/brand-photography",
  },
  {
    id: "branding",
    title: "Branding",
    description: "Logo files, colours, fonts, and templates. One look from your van to your website.",
    imageSrc: "/images/after.jpg",
    imageAlt: "Professional brand presentation",
    imageWidth: 1920,
    imageHeight: 1282,
    descriptionPosition: "below-title" as const,
    href: "/services/website-design",
  },
  {
    id: "tracking",
    title: "Call tracking",
    description: "Know which calls become jobs. Monthly reports on calls, forms, and map rankings.",
    imageSrc: "/images/step-launch.jpg",
    imageAlt: "Analytics dashboard review",
    imageWidth: 1200,
    imageHeight: 800,
    descriptionPosition: "bottom" as const,
    href: "/pricing",
  },
] as const;

export const workflowSection = {
  eyebrow: "HOW WE WORK",
  headlineBefore: "Three steps to ",
  headlineSerif: "live and tracking",
  body: "You stay on the job site. We handle discovery, build, and launch — then report the numbers every month.",
  imageSrc: "/images/hero.jpg",
  imageWidth: 1920,
  imageHeight: 1272,
  steps: [
    {
      icon: "clipboard" as const,
      label: "Discovery",
      description: "15-minute call. We learn your trade, service area, and what a booked job is worth.",
    },
    {
      icon: "sparkle" as const,
      label: "Build",
      description: "Copy, design, and SEO in one doc. You approve before anything goes live.",
    },
    {
      icon: "chart" as const,
      label: "Launch",
      description: "Site live, Google profile optimized, call tracking on. First report in 30 days.",
    },
  ],
} as const;

export const pricing = {
  eyebrow: "PRICING",
  headlineBefore: "$497/month. ",
  headlineSerif: "Published online.",
  price: 497,
  includes: [
    "Custom website — live in ~21 days",
    "Local SEO — profile, citations, reviews",
    "Call tracking — know what converts",
    "8 social posts per month",
    "Quarterly video shoot",
    "Monthly report — calls and rankings",
  ],
  body: `No setup fee. No surprise invoices. Cancel with 30 days notice — you keep your site and domain.`,
} as const;

export const guarantees = {
  eyebrow: "GUARANTEES",
  headlineBefore: "Promises we ",
  headlineSerif: "actually keep",
  items: [
    {
      claim: "Live in 30 days or we keep working free.",
      detail: "When you provide copy and assets within 5 business days.",
      footnote: 4 as FootnoteId,
    },
    {
      claim: "One flat price. No surprise invoices.",
      detail: "$497/month. Everything listed. Nothing hidden.",
    },
    {
      claim: "You own your site and ad accounts.",
      detail: "Domain, hosting credentials, and ad access — always yours.",
    },
    {
      claim: "Monthly numbers, not vanity metrics.",
      detail: "Calls, form fills, and map rankings. Every report.",
    },
  ],
} as const;

export const beforeAfter = {
  eyebrow: "RESULTS",
  headlineBefore: "Before and ",
  headlineSerif: "after",
  beforeSrc: "/images/before.jpg",
  afterSrc: "/images/after.jpg",
  beforeAlt: "Contractor website before redesign",
  afterAlt: "Contractor website after redesign",
  width: 1920,
  height: 1282,
} as const;

export const comparison = {
  eyebrow: "WHY US",
  headlineBefore: "Compared ",
  headlineSerif: "honestly",
  tiles: [
    {
      title: "[BRAND]",
      highlight: true,
      items: [
        "$497/month, published online",
        "Live in 21 days on average",
        "One team: site, SEO, social, video",
        "You own everything we build",
      ],
    },
    {
      title: "Typical agency",
      highlight: false,
      items: [
        "$3,000–$8,000 upfront, then retainers",
        "8–16 week timelines common",
        "Separate vendors for site, SEO, ads",
        "Agency owns the CMS and ad accounts",
      ],
    },
    {
      title: "Do it yourself",
      highlight: false,
      items: [
        "Squarespace/Wix: $30–$50/month",
        "Your evenings and weekends",
        "No SEO, no tracking, no strategy",
        "Looks like every other template site",
      ],
    },
  ],
} as const;

export const answers = {
  eyebrow: "ANSWERS",
  headlineBefore: "Straight ",
  headlineSerif: "answers",
  items: [
    { question: "How much does a website cost?", href: "/faq#website-cost" },
    { question: "How long does a site take to build?", href: "/faq#timeline" },
    { question: "What is included in $497/month?", href: "/faq#whats-included" },
    { question: "Do you work with HVAC companies?", href: "/faq#trades" },
  ],
} as const;

export const finalCta = {
  headlineBefore: "Stop losing jobs ",
  headlineSerif: "you never knew about.",
  imageSrc: "/images/hero.jpg",
  imageWidth: 1920,
  imageHeight: 1272,
} as const;
