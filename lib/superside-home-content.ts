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
  headlineBefore: "Your ",
  headlineSerif: "marketing team's",
  headlineAfter: " marketing team",
  subline: `Websites, SEO, social, and video for trades, clinics, and restaurants in ${siteConfig.city}. One flat price. Live in 21 days.`,
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
      { src: "/images/hero.jpg", alt: "Trade work in progress", width: 600, height: 750, tileHeight: "sm" as const },
      { src: "/images/missed-calls.jpg", alt: "Google map results", width: 600, height: 500, tileHeight: "md" as const },
    ],
  ],
} as const;

export const problem = {
  eyebrow: "THE LEAK",
  headlineBefore: "Costing you jobs ",
  headlineSerif: "every week",
  stats: [
    { value: "62%", label: "Callers who hang up on voicemail", footnote: 1 as FootnoteId },
    { value: "3", label: "Spots in the Google map pack", footnote: 2 as FootnoteId },
    { value: "75%", label: "People who judge you by your website", footnote: 3 as FootnoteId },
  ],
  body: `<strong>Missed calls go to your competitor.</strong> When the phone rolls to voicemail on a job site, most callers never leave a message. <strong>If you are not in the map pack, you are invisible</strong> for the searches that book the most work.`,
  imageSrc: "/images/missed-calls.jpg",
  imageAlt: "Contractor missing a call on a job site",
  imageWidth: 1920,
  imageHeight: 1280,
} as const;

export const services = [
  {
    id: "websites",
    eyebrow: "WEBSITES",
    headlineBefore: "Built to ",
    headlineSerif: "book jobs",
    bg: "cream" as const,
    imageFirst: false,
    imageSrc: "/images/step-build.jpg",
    imageAlt: "Website design in progress",
    imageWidth: 1200,
    imageHeight: 799,
    body: `<strong>Every page is written for one goal: a booked call.</strong> Mobile-first layout, click-to-call above the fold, and forms that work on a cracked phone screen at a job site. <strong>Live in 21 days on average.</strong>`,
    stat: { value: "21", label: "Days to live site on average", footnote: 6 as FootnoteId },
  },
  {
    id: "google",
    eyebrow: "LOCAL SEO",
    headlineBefore: "Own the map, ",
    headlineSerif: "not just the page",
    bg: "forest" as const,
    imageFirst: true,
    imageSrc: "/images/missed-calls.jpg",
    imageAlt: "Google Business Profile on phone",
    imageWidth: 1920,
    imageHeight: 1280,
    body: `<strong>Most local jobs start on Google Maps.</strong> We optimize your Business Profile, build local citations, and target the keywords your customers actually type. <strong>Review requests go out automatically.</strong>`,
    stat: { value: "34", label: "Avg. new reviews per client, year one", footnote: 5 as FootnoteId },
  },
  {
    id: "social",
    eyebrow: "SOCIAL MEDIA",
    headlineBefore: "Stay visible ",
    headlineSerif: "without daily posting",
    bg: "cream" as const,
    imageFirst: false,
    imageSrc: "/images/step-discovery.jpg",
    imageAlt: "Social content planning",
    imageWidth: 1200,
    imageHeight: 800,
    body: `<strong>Eight posts per month, written and designed for you.</strong> Finished jobs, team photos, seasonal offers — on-brand for Facebook and Instagram. <strong>No daily posting burden on your team.</strong>`,
  },
  {
    id: "video",
    eyebrow: "VIDEO",
    headlineBefore: "Proof you ",
    headlineSerif: "can't fake",
    bg: "sage" as const,
    imageFirst: true,
    imageSrc: "/images/hero.jpg",
    imageAlt: "Trade work video still",
    imageWidth: 1920,
    imageHeight: 1272,
    body: `<strong>Homeowners trust what they can see.</strong> We shoot and edit short videos of your team at work — before/after reveals, walkthroughs, testimonials. <strong>One shoot per quarter.</strong>`,
    stat: { value: "4", label: "Video shoots included per year" },
  },
  {
    id: "branding",
    eyebrow: "BRANDING",
    headlineBefore: "Look like the biggest shop ",
    headlineSerif: "in town",
    bg: "cream" as const,
    imageFirst: false,
    imageSrc: "/images/after.jpg",
    imageAlt: "Professional brand assets",
    imageWidth: 1920,
    imageHeight: 1282,
    body: `<strong>Your van, your uniforms, and your website should match.</strong> Logo files, colours, fonts, and templates for invoices and estimates. <strong>One consistent look everywhere.</strong>`,
  },
] as const;

export const pricing = {
  eyebrow: "PRICING MODEL",
  headlineBefore: "One price. ",
  headlineSerif: "Published online",
  price: 497,
  chips: [
    "Custom website — live in ~21 days",
    "Local SEO — profile, citations, reviews",
    "Call tracking — know what converts",
    "8 social posts per month",
    "Quarterly video shoot",
    "Monthly report — calls and rankings",
  ],
  body: `<strong>$497/month. No setup fee, no surprise invoices.</strong> Cancel with 30 days notice — you keep your site and domain.`,
} as const;

export const guarantees = [
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
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Discovery call",
    duration: "15 minutes",
    happens: "We learn what you do, where you work, and what a booked job is worth.",
    need: "Nothing — just show up with your phone.",
    get: "A clear scope and timeline sent within 24 hours.",
  },
  {
    step: 2,
    title: "Build and review",
    duration: "2–3 weeks",
    happens: "Copy, design, and SEO land in one shared doc for your approval.",
    need: "Photos from recent jobs, logo files if you have them, and 48-hour feedback.",
    get: "A staging link to review before anything goes live.",
  },
  {
    step: 3,
    title: "Launch and track",
    duration: "Day 21 on average",
    happens: "Site goes live, Google profile optimized, call tracking starts.",
    need: "Final sign-off and DNS access (we walk you through it).",
    get: "Live site, tracking dashboard, and your first monthly report in 30 days.",
  },
] as const;

export const beforeAfter = {
  eyebrow: "PROOF",
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
      items: [
        "$497/month, published online",
        "Live in 21 days on average",
        "One team: site, SEO, social, video",
        "You own everything we build",
      ],
    },
    {
      title: "Typical agency",
      items: [
        "$3,000–$8,000 upfront, then retainers",
        "8–16 week timelines common",
        "Separate vendors for site, SEO, ads",
        "Agency owns the CMS and ad accounts",
      ],
    },
    {
      title: "Do it yourself",
      items: [
        "Squarespace/Wix: $30–$50/month",
        "Your evenings and weekends",
        "No SEO, no tracking, no strategy",
        "Looks like every other template site",
      ],
    },
  ],
} as const;

export const answers = [
  { question: "How much does a website cost?", href: "/faq#website-cost" },
  { question: "How long does a site take to build?", href: "/faq#timeline" },
  { question: "What is included in $497/month?", href: "/faq#whats-included" },
  { question: "Do you work with HVAC companies?", href: "/faq#trades" },
] as const;

export const finalCta = {
  headlineBefore: "Stop losing jobs ",
  headlineSerif: "you never knew about",
  imageSrc: "/images/hero.jpg",
  imageAlt: "Team at work",
  imageWidth: 1920,
  imageHeight: 1272,
} as const;
