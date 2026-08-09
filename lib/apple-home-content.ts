import { siteConfig } from "@/lib/site-config";

export const IMAGE_BLUR =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%23d2d2d7'/%3E%3C/svg%3E";

export const footnotes = {
  1: "Based on call-tracking data across 12 active clients, Jan–Dec 2025.",
  2: "Google local pack shows three businesses for most map searches in [CITY].",
  3: "Stanford Web Credibility Research, 2002 — still cited in UX industry surveys.",
  4: "30-day guarantee applies after client provides approved copy and assets within 5 business days.",
  5: "Renewal rate measured at 12-month mark across clients who joined before Jan 2025.",
  6: "Average launch timeline from signed agreement to live site, last 20 projects.",
} as const;

export type FootnoteId = keyof typeof footnotes;

export const stickyNavLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Answers", href: "#answers" },
] as const;

export const hero = {
  headline: "Websites. Built to book jobs.",
  subline: `Local marketing for trades, clinics, and restaurants in ${siteConfig.city}.`,
  imageSrc: "/images/hero.jpg",
  imageAlt: "Contractor on a job site reviewing leads",
  imageWidth: 1920,
  imageHeight: 1272,
};

export const highlights = {
  headline: "Get the highlights.",
  items: [
    {
      id: "websites",
      line: "Custom sites that turn searches into calls.",
      imageSrc: "/images/step-build.jpg",
      imageAlt: "Website on a laptop",
      imageWidth: 1200,
      imageHeight: 799,
    },
    {
      id: "google",
      line: "Map pack visibility that puts you in the top three.",
      imageSrc: "/images/missed-calls.jpg",
      imageAlt: "Phone showing local search results",
      imageWidth: 1920,
      imageHeight: 1280,
    },
    {
      id: "social",
      line: "Social posts that stay on-brand without daily effort.",
      imageSrc: "/images/step-discovery.jpg",
      imageAlt: "Team planning content",
      imageWidth: 1200,
      imageHeight: 800,
    },
    {
      id: "video",
      line: "Video that shows your work before the estimate visit.",
      imageSrc: "/images/step-launch.jpg",
      imageAlt: "Trade work in progress",
      imageWidth: 1200,
      imageHeight: 800,
    },
    {
      id: "branding",
      line: "Brand assets that make a one-truck shop look established.",
      imageSrc: "/images/after.jpg",
      imageAlt: "Clean brand presentation",
      imageWidth: 1920,
      imageHeight: 1282,
    },
  ],
} as const;

export const problem = {
  headline: "The leak. Costing you jobs every week.",
  stats: [
    { value: "62%", label: "Callers who hang up on voicemail", footnote: 1 as FootnoteId },
    { value: "3", label: "Spots in the Google map pack", footnote: 2 as FootnoteId },
    { value: "75%", label: "People who judge you by your website", footnote: 3 as FootnoteId },
  ],
  body: `<strong>Missed calls go to your competitor.</strong> When the phone rolls to voicemail on a job site, most callers never leave a message. <strong>If you are not in the map pack, you are invisible</strong> for the searches that book the most work. <strong>An outdated site signals an outdated business</strong> — and that costs real money every week.`,
};

export const services = [
  {
    id: "websites",
    headline: "Websites. Built to book jobs.",
    bg: "white" as const,
    imageFirst: true,
    imageSrc: "/images/step-build.jpg",
    imageAlt: "Website design in progress",
    imageWidth: 1200,
    imageHeight: 799,
    body: `<strong>Every page is written for one goal: a booked call.</strong> Mobile-first layout, click-to-call above the fold, and forms that work on a cracked phone screen at a job site. <strong>Live in 21 days on average</strong>, with copy you approve before launch. <strong>Includes hosting, SSL, and monthly updates.</strong>`,
    stat: { value: "21", label: "Days to live site on average", footnote: 6 as FootnoteId },
    modal: {
      title: "Website design — full detail",
      deliverables: [
        "5–8 page custom site, mobile-first",
        "Copywriting for all core pages",
        "On-page SEO setup",
        "Google Analytics and call tracking",
        "Monthly content updates",
      ],
      timeline: [
        { week: "Week 1", detail: "Discovery call, sitemap, copy draft" },
        { week: "Weeks 2–3", detail: "Design, revisions, your approval" },
        { week: "Week 3+", detail: "Launch, QA, handoff" },
      ],
      price: "$497/month — includes hosting and updates",
    },
  },
  {
    id: "google",
    headline: "Google. Own the map, not just the page.",
    bg: "off-white" as const,
    imageFirst: false,
    imageSrc: "/images/missed-calls.jpg",
    imageAlt: "Google Business Profile on phone",
    imageWidth: 1920,
    imageHeight: 1280,
    body: `<strong>Most local jobs start on Google Maps.</strong> We optimize your Business Profile, build local citations, and target the keywords your customers actually type. <strong>Review requests go out automatically</strong> after every completed job. <strong>Monthly ranking reports</strong> show exactly where you stand against the other two names in the pack.`,
    stat: { value: "34", label: "Avg. new reviews per client, year one", footnote: 5 as FootnoteId },
    modal: {
      title: "Local SEO — full detail",
      deliverables: [
        "Google Business Profile setup and posts",
        "Local citation building (40+ directories)",
        "Review request automation",
        "Monthly ranking and traffic report",
      ],
      timeline: [
        { week: "Week 1", detail: "Profile audit and competitor scan" },
        { week: "Weeks 2–4", detail: "Citations, on-page local SEO" },
        { week: "Ongoing", detail: "Posts, reviews, monthly report" },
      ],
      price: "Included in $497/month package",
    },
  },
  {
    id: "social",
    headline: "Social. Stay visible without daily posting.",
    bg: "black" as const,
    imageFirst: true,
    imageSrc: "/images/step-discovery.jpg",
    imageAlt: "Social content planning",
    imageWidth: 1200,
    imageHeight: 800,
    body: `<strong>Your customers scroll past dozens of ads before lunch.</strong> We create and schedule on-brand posts for Facebook and Instagram — finished jobs, team photos, seasonal offers. <strong>Eight posts per month, written and designed for you.</strong> <strong>No daily posting burden on your team.</strong>`,
    chips: [
      { term: "8 posts/month", description: "Facebook and Instagram, on-brand" },
      { term: "Photo sourcing", description: "We edit your job-site photos" },
    ],
    modal: {
      title: "Social media — full detail",
      deliverables: [
        "8 branded posts per month",
        "Photo editing from your job-site images",
        "Caption writing and hashtag research",
        "Monthly engagement summary",
      ],
      timeline: [
        { week: "Week 1", detail: "Brand voice doc and content calendar" },
        { week: "Week 2", detail: "First batch scheduled" },
        { week: "Ongoing", detail: "8 posts/month, every month" },
      ],
      price: "Included in $497/month package",
    },
  },
  {
    id: "video",
    headline: "Video. Proof you can't fake.",
    bg: "white" as const,
    imageFirst: false,
    imageSrc: "/images/hero.jpg",
    imageAlt: "Trade work video still",
    imageWidth: 1920,
    imageHeight: 1272,
    body: `<strong>Homeowners trust what they can see.</strong> We shoot and edit short videos of your team at work — before/after reveals, walkthroughs, customer testimonials. <strong>60–90 second clips</strong> formatted for your site, Google profile, and social. <strong>One shoot per quarter</strong> keeps content fresh without a production crew on payroll.`,
    stat: { value: "4", label: "Video shoots included per year" },
    modal: {
      title: "Video production — full detail",
      deliverables: [
        "Quarterly on-site video shoot (half day)",
        "2–3 edited clips per shoot",
        "Site, Google, and social formatting",
        "Captions and thumbnails included",
      ],
      timeline: [
        { week: "Quarter 1", detail: "First shoot scheduled within 30 days of launch" },
        { week: "Each quarter", detail: "Shoot, edit, deliver within 2 weeks" },
      ],
      price: "Included in $497/month package",
    },
  },
  {
    id: "branding",
    headline: "Branding. Look like the biggest shop in town.",
    bg: "off-white" as const,
    imageFirst: true,
    imageSrc: "/images/after.jpg",
    imageAlt: "Professional brand assets",
    imageWidth: 1920,
    imageHeight: 1282,
    body: `<strong>Your van, your uniforms, and your website should match.</strong> We build a simple brand kit — logo files, colours, fonts, and templates for invoices and estimates. <strong>One consistent look everywhere a customer sees you.</strong> <strong>Templates your office manager can use without calling us.</strong>`,
    chips: [
      { term: "Brand kit", description: "Logo, colours, fonts, usage guide" },
      { term: "Templates", description: "Estimate, invoice, and email signatures" },
    ],
    modal: {
      title: "Branding — full detail",
      deliverables: [
        "Logo files (PNG, SVG, favicon)",
        "Brand colour and font guide",
        "Estimate and invoice templates",
        "Email signature and van decal specs",
      ],
      timeline: [
        { week: "Week 1–2", detail: "Discovery and concept directions" },
        { week: "Week 3", detail: "Revisions and final delivery" },
      ],
      price: "Included in $497/month package",
    },
  },
] as const;

export const pricing = {
  headline: "Pricing. Published, because nobody else does.",
  price: 497,
  chips: [
    { term: "Custom website", description: "Mobile-first, live in ~21 days" },
    { term: "Local SEO", description: "Profile, citations, review requests" },
    { term: "Call tracking", description: "Know which leads become jobs" },
    { term: "Social posts", description: "8 per month, on-brand" },
    { term: "Video", description: "Quarterly shoot, 2–3 clips each" },
    { term: "Monthly report", description: "Calls, rankings, and form fills" },
  ],
  body: `<strong>One package, one price: $497/month.</strong> No setup fee, no surprise invoices. <strong>Price changes only if you add paid ads</strong> (Google Ads budget is separate and yours to control). <strong>Cancel with 30 days notice</strong> — you keep your site and domain.`,
};

export const guarantees = [
  {
    claim: "Live in 30 days or we keep working free.",
    detail: "Applies when you provide copy and assets within 5 business days.",
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
  beforeSrc: "/images/before.jpg",
  afterSrc: "/images/after.jpg",
  beforeAlt: "Contractor website before redesign",
  afterAlt: "Contractor website after redesign",
  width: 1920,
  height: 1282,
};

export const answers = [
  { question: "How much does a website cost?", href: "/faq#website-cost" },
  { question: "How long does a site take to build?", href: "/faq#timeline" },
  { question: "What is included in $497/month?", href: "/faq#whats-included" },
  { question: "Do you work with HVAC companies?", href: "/faq#trades" },
] as const;

export const comparison = {
  headline: "Why us. Compared honestly.",
  tiles: [
    {
      title: "[BRAND]",
      icon: "star",
      items: [
        "$497/month, published online",
        "Live in 21 days on average",
        "One team: site, SEO, social, video",
        "You own everything we build",
      ],
    },
    {
      title: "Typical agency",
      icon: "building",
      items: [
        "$3,000–$8,000 upfront, then retainers",
        "8–16 week timelines common",
        "Separate vendors for site, SEO, ads",
        "Agency owns the CMS and ad accounts",
      ],
    },
    {
      title: "Do it yourself",
      icon: "wrench",
      items: [
        "Squarespace/Wix: $30–$50/month",
        "Your evenings and weekends",
        "No SEO, no tracking, no strategy",
        "Looks like every other template site",
      ],
    },
  ],
} as const;

export const finalCta = {
  headline: "Stop losing jobs you never knew about.",
};
