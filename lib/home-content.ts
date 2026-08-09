import { siteConfig } from "@/lib/site-config";

export const heroContent = {
  headline: "More booked jobs from the phone and Google.",
  subline: `Websites and local marketing for trades, clinics, and restaurants in ${siteConfig.city}.`,
  imageSrc: "/images/hero.svg",
  imageAlt: "Contractor reviewing leads on a job site",
  imageWidth: 1920,
  imageHeight: 1080,
};

export const proofStats = [
  { value: "847", label: "Calls tracked for clients, last 12 months" },
  { value: "34", label: "Avg. new Google reviews per client, year one" },
  { value: "21", label: "Avg. days from sign-up to live site" },
  { value: "94%", label: "Clients who renew after the first year" },
] as const;

export const problemContent = {
  headline: "You're losing work you never knew about.",
  cards: [
    {
      id: "missed-calls",
      title: "Calls go to voicemail",
      body:
        "62% of callers hang up when they reach voicemail instead of a person. " +
        "That is a booked job going to the next name on Google.",
      icon: "phone" as const,
    },
    {
      id: "invisible-google",
      title: "You do not show up on Google",
      body:
        "Only 3 businesses make the map pack for most local searches. " +
        "If you are not one of them, homeowners call someone else.",
      icon: "search" as const,
    },
    {
      id: "embarrassing-site",
      title: "Your site scares people off",
      body:
        "75% of people judge a business by its website. " +
        "A slow, outdated site makes a $2M operation look like a side gig.",
      icon: "monitor" as const,
    },
  ],
} as const;

export const packageContent = {
  headline: "One package. One price. Everything you need.",
  items: [
    "Custom website, mobile-first, live in 21 days on average",
    "Google Business Profile setup and monthly posts",
    "Local SEO — on-page, citations, and review requests",
    "Call tracking so you know which leads turn into jobs",
    "Monthly report: calls, form fills, and search rankings",
  ],
  monthlyPrice: 497,
};

export const guarantees = [
  "Live in 30 days or we keep working at no extra charge.",
  "One flat monthly price — $497. No surprise invoices.",
  "You own your website, domain, and ad accounts. Always.",
  "Monthly report with real numbers, not a vanity metrics deck.",
] as const;

export const howItWorksSteps = [
  {
    step: 1,
    title: "15-minute discovery call",
    description:
      "We learn what you do, where you work, and what a booked job is worth to you.",
    timeline: "Day 1",
  },
  {
    step: 2,
    title: "We build, you review",
    description:
      "Copy, design, and SEO land in one shared doc. You approve before anything goes live.",
    timeline: "Days 2–18",
  },
  {
    step: 3,
    title: "Launch and track",
    description:
      "Site goes live, Google profile gets optimized, and call tracking starts the same week.",
    timeline: "Day 21 on average",
  },
] as const;

export const answerCards = [
  {
    question: "How much does a website cost?",
    href: "/faq#website-cost",
  },
  {
    question: "How long does a site take to build?",
    href: "/faq#timeline",
  },
  {
    question: "What is included in the $497/month?",
    href: "/faq#whats-included",
  },
  {
    question: "Do you work with HVAC and plumbing companies?",
    href: "/faq#trades",
  },
] as const;

export const finalCtaContent = {
  headline: "Ready to stop losing jobs you never knew about?",
};
