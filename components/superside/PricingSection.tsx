import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { pricing } from "@/lib/superside-home-content";
import { Eyebrow } from "./Eyebrow";
import { LimeButton } from "./LimeButton";
import { MixedHeadline } from "./MixedHeadline";

export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="section-block bg-cream px-6">
      <div className="mx-auto max-w-wide">
        <ScrollReveal className="max-w-copy">
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <MixedHeadline
            before={pricing.headlineBefore}
            serif={pricing.headlineSerif}
          />
          <p className="mt-10 text-stat text-forest">${pricing.price}/month</p>
          <ul className="mt-10 space-y-3">
            {pricing.chips.map((chip) => (
              <li key={chip} className="flex gap-3 text-body text-near-black">
                <span className="text-lime" aria-hidden="true">●</span>
                {chip}
              </li>
            ))}
          </ul>
          <p
            className="mt-10 text-body text-near-black"
            dangerouslySetInnerHTML={{ __html: pricing.body }}
          />
          <div className="mt-10">
            <LimeButton href="/book">Book a call</LimeButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function AnswersSection() {
  return (
    <section id="answers" aria-labelledby="answers-heading" className="section-block bg-cream px-6">
      <div className="mx-auto max-w-copy">
        <ScrollReveal>
          <Eyebrow>ANSWERS</Eyebrow>
          <h2 id="answers-heading" className="text-section text-near-black">
            Straight, not scripted.
          </h2>
          <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
            {[
              { q: "How much does a website cost?", href: "/faq#website-cost" },
              { q: "How long does a site take to build?", href: "/faq#timeline" },
              { q: "What is included in $497/month?", href: "/faq#whats-included" },
              { q: "Do you work with HVAC companies?", href: "/faq#trades" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-5 text-body text-forest hover:underline">
                  {item.q} →
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
