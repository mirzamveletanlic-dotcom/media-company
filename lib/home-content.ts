import { siteConfig } from "@/lib/site-config";

export const heroContent = {
  headline: "More booked jobs.",
  headlineAccent: "Period.",
  subline: `Websites and local marketing for trades and clinics in ${siteConfig.city}.`,
  imageSrc: "/images/hero.jpg",
  imageAlt: "Contractor answering a call on a job site",
  imageWidth: 1920,
  imageHeight: 1080,
};

export const proofStats = [
  { value: "847", label: "Calls tracked, last 12 months" },
  { value: "34", label: "Avg. Google reviews, year one" },
  { value: "21", label: "Avg. days to live site" },
  { value: "94%", label: "Clients who renew" },
] as const;

export const missedCallsContent = {
  headline: "62% hang up on voicemail.",
  lines: [
    "They call the next name on Google.",
    "You never know it happened.",
    "That is a booked job, gone.",
  ],
  imageSrc: "/images/missed-calls.jpg",
  imageAlt: "Phone showing a missed call notification",
  imageWidth: 1920,
  imageHeight: 1080,
};

export const packageContent = {
  headline: "Everything included.",
  items: [
    "Custom website, live in 21 days on average",
    "Google Business Profile and monthly posts",
    "Local SEO, citations, and review requests",
    "Call tracking on every lead source",
    "Monthly report: calls, forms, and rankings",
  ],
  monthlyPrice: 497,
};

export const guarantees = [
  "Live in 30 days or we keep working free.",
  "One flat price. No surprise invoices.",
  "You own your site and ad accounts.",
  "Monthly numbers, not vanity metrics.",
] as const;

export const howItWorksSteps = [
  {
    step: 1,
    title: "15-minute discovery call",
    description:
      "We learn what you do, where you work, and what a booked job is worth.",
    timeline: "Day 1",
    imageSrc: "/images/step-discovery.jpg",
    imageAlt: "Business owner on a discovery call",
    imageWidth: 1200,
    imageHeight: 900,
  },
  {
    step: 2,
    title: "We build. You review.",
    description:
      "Copy, design, and SEO in one doc. You approve before anything goes live.",
    timeline: "Days 2–18",
    imageSrc: "/images/step-build.jpg",
    imageAlt: "Website design in progress on a laptop",
    imageWidth: 1200,
    imageHeight: 900,
  },
  {
    step: 3,
    title: "Launch and track.",
    description:
      "Site goes live. Google profile optimized. Call tracking starts same week.",
    timeline: "Day 21 on average",
    imageSrc: "/images/step-launch.jpg",
    imageAlt: "Analytics dashboard showing tracked phone calls",
    imageWidth: 1200,
    imageHeight: 900,
  },
] as const;

export const answerLinks = [
  { question: "How much does a website cost?", href: "/faq#website-cost" },
  { question: "How long does a site take?", href: "/faq#timeline" },
  {
    question: "What is included in $497/month?",
    href: "/faq#whats-included",
  },
  {
    question: "Do you work with HVAC companies?",
    href: "/faq#trades",
  },
] as const;

export const finalCtaContent = {
  headline: "Stop losing jobs you never knew about.",
};

export const beforeAfterContent = {
  beforeSrc: "/images/before.jpg",
  afterSrc: "/images/after.jpg",
  beforeAlt: "Outdated office before redesign",
  afterAlt: "Modern workspace after redesign",
  width: 1920,
  height: 1080,
};

/** Tiny grey blur for next/image placeholders */
export const imageBlurDataURL =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%23d2d2d7'/%3E%3C/svg%3E";
