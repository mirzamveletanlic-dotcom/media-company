import { siteConfig } from "@/lib/site-config";

export const IMAGE_BLUR =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%23ddd6cc'/%3E%3C/svg%3E";

export const footnotes = {
  1: "Based on call-tracking data across 12 active clients, Jan–Dec 2025.",
  2: "Google local pack shows three businesses for most map searches in [CITY].",
  3: "Stanford Web Credibility Research, 2002 — still cited in UX industry surveys.",
  4: "30-day guarantee applies after client provides approved copy and assets within 5 business days.",
  5: "Renewal rate measured at 12-month mark across clients who joined before Jan 2025.",
  6: "Average launch timeline from signed agreement to live site, last 20 projects.",
} as const;

export type FootnoteId = keyof typeof footnotes;

/* ─── 1. Hero — full-bleed photo ─────────────────────────────────────────── */

export const hero = {
  eyebrow: "PRICING MODEL",
  headlineLines: ["Take leads from", "invisible to booked"] as const,
  headlineSerif: "3x faster.",
  bodyBefore: `[BRAND] offers website, SEO, social, and video for trades and clinics in ${siteConfig.city} — `,
  bodyLink: { text: "with published pricing.", href: "/pricing" },
  bodyAfter: " One team. Live in 21 days. $497/month.",
  imageSrc: "/images/step-discovery.jpg",
  imageAlt: "Team planning local marketing",
  imageWidth: 1200,
  imageHeight: 800,
} as const;

/* ─── 2. Split — cream, image right ──────────────────────────────────────── */

export const splitProblem = {
  id: "problem",
  eyebrow: "THE LEAK",
  headlineBefore: "Missing jobs ",
  headlineSerif: "every week",
  body: "Missed calls go to your competitor. When the phone rolls to voicemail on a job site, most callers never leave a message. If you are not in the map pack, you are invisible for the searches that book the most work.",
  imageSrc: "/images/missed-calls.jpg",
  imageAlt: "Contractor missing a call on a job site",
  imageWidth: 1920,
  imageHeight: 1280,
  imageFirst: false,
} as const;

/* ─── 3. Service grid header ─────────────────────────────────────────────── */

export const servicesSection = {
  eyebrow: "SERVICES",
  headlineBefore: "Everything to ",
  headlineSerif: "book more jobs",
} as const;

export const serviceCards = [
  {
    id: "websites",
    title: "Websites that book calls",
    description: "Mobile-first. Click-to-call above the fold. Live in 21 days.",
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
    description: "Google Business Profile, citations, and review requests.",
    imageSrc: "/images/missed-calls.jpg",
    imageAlt: "Local search on a phone",
    imageWidth: 1920,
    imageHeight: 1280,
    descriptionPosition: "below-title" as const,
    href: "/services/local-seo",
  },
  {
    id: "social",
    title: "Social media",
    description: "Eight on-brand posts per month. We write and design every one.",
    imageSrc: "/images/step-discovery.jpg",
    imageAlt: "Team planning content",
    imageWidth: 1200,
    imageHeight: 800,
    descriptionPosition: "below-title" as const,
    href: "/services/social-media",
  },
  {
    id: "video",
    title: "Video production",
    description: "Quarterly shoots. Before/after reveals and walkthroughs.",
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
    description: "Logo, colours, fonts, and templates. One look everywhere.",
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
    description: "Know which calls become jobs. Monthly ranking reports.",
    imageSrc: "/images/step-launch.jpg",
    imageAlt: "Analytics review",
    imageWidth: 1200,
    imageHeight: 800,
    descriptionPosition: "bottom" as const,
    href: "/pricing",
  },
] as const;

/* ─── 4. Glass workflow — full-bleed ─────────────────────────────────────── */

export const workflowSection = {
  eyebrow: "HOW WE WORK",
  headlineBefore: "Local marketing guided by ",
  headlineSerif: "industry experts",
  body: "Discovery, build, and launch — handled for you while you stay on the job site. Then we report the numbers every month.",
  imageSrc: "/images/hero.jpg",
  imageWidth: 1920,
  imageHeight: 1272,
  steps: [
    {
      icon: "clipboard" as const,
      label: "Discovery",
      description: "15-minute call. We learn your trade, area, and what a booked job is worth.",
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

/* ─── 5. Proof bar ───────────────────────────────────────────────────────── */

export const proofBar = {
  stats: [
    { value: "21", label: "Days to live site", footnote: 6 as FootnoteId },
    { value: "$497", label: "Flat monthly price" },
    { value: "62%", label: "Callers lost to voicemail", footnote: 1 as FootnoteId },
    { value: "30", label: "Day launch guarantee", footnote: 4 as FootnoteId },
  ],
} as const;

/* ─── 6. Split — cream, image left ───────────────────────────────────────── */

export const splitValue = {
  id: "why-us",
  eyebrow: "HASSLE-FREE HELP",
  headlineBefore: "Big-agency output, ",
  headlineSerif: "without the overhead",
  body: "One subscription covers your website, local SEO, social, video, and reporting. No juggling vendors. No surprise invoices.",
  bullets: [
    "Live in 30 days or we keep working free",
    "You own your site, domain, and ad accounts",
    "Monthly numbers — calls, forms, and rankings",
  ],
  imageSrc: "/images/step-build.jpg",
  imageAlt: "Marketing team at work",
  imageWidth: 1200,
  imageHeight: 799,
  imageFirst: true,
} as const;

/* ─── 7. Pricing — full-bleed photo ──────────────────────────────────────── */

export const pricing = {
  eyebrow: "PRICING",
  headlineBefore: "One price. ",
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
  body: "No setup fee. Cancel with 30 days notice — you keep your site and domain.",
  imageSrc: "/images/missed-calls.jpg",
  imageWidth: 1920,
  imageHeight: 1280,
} as const;

/* ─── 8. Before / after ──────────────────────────────────────────────────── */

export const beforeAfter = {
  eyebrow: "PROOF",
  headlineBefore: "Before and ",
  headlineSerif: "after",
  beforeSrc: "/images/before.jpg",
  afterSrc: "/images/after.jpg",
  beforeAlt: "Website before redesign",
  afterAlt: "Website after redesign",
  width: 1920,
  height: 1282,
} as const;

/* ─── 9. FAQ + comparison ────────────────────────────────────────────────── */

export const faqSection = {
  eyebrow: "ANSWERS",
  headlineBefore: "Compared ",
  headlineSerif: "honestly",
  comparison: [
    { label: "[BRAND]", detail: "$497/mo · live in 21 days · you own everything" },
    { label: "Typical agency", detail: "$3k–8k upfront · 8–16 weeks · they own the CMS" },
    { label: "Do it yourself", detail: "$30–50/mo · your weekends · no SEO or tracking" },
  ],
  items: [
    { question: "How much does a website cost?", href: "/faq#website-cost" },
    { question: "How long does a site take to build?", href: "/faq#timeline" },
    { question: "What is included in $497/month?", href: "/faq#whats-included" },
    { question: "Do you work with HVAC companies?", href: "/faq#trades" },
  ],
} as const;

/* ─── 10. Final CTA ──────────────────────────────────────────────────────── */

export const finalCta = {
  headlineBefore: "Stop losing jobs ",
  headlineSerif: "you never knew about.",
  imageSrc: "/images/hero.jpg",
  imageWidth: 1920,
  imageHeight: 1272,
} as const;
