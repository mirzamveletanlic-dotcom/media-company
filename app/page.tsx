import { AccordionList } from "@/components/apple/AccordionList";
import { ApplePillButton } from "@/components/apple/ApplePillButton";
import { AppleTextLink } from "@/components/apple/AppleTextLink";
import { BeforeAfterSlider } from "@/components/apple/BeforeAfterSlider";
import { ComparisonTiles } from "@/components/apple/ComparisonTiles";
import { FeatureBlock } from "@/components/apple/FeatureBlock";
import { Footnote } from "@/components/apple/Footnote";
import { FootnoteList } from "@/components/apple/FootnoteList";
import { Hero } from "@/components/apple/Hero";
import { HighlightsScroller } from "@/components/apple/HighlightsScroller";
import { SpecChip } from "@/components/apple/SpecChip";
import { StatRow } from "@/components/apple/StatRow";
import { StickyProductNav } from "@/components/apple/StickyProductNav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  answers,
  beforeAfter,
  comparison,
  finalCta,
  guarantees,
  highlights,
  pricing,
  problem,
  processSteps,
  services,
} from "@/lib/apple-home-content";

export default function HomePage() {
  return (
    <>
      <StickyProductNav />
      <Hero />
      <HighlightsScroller headline={highlights.headline} items={[...highlights.items]} />

      <section aria-labelledby="problem-heading" className="section-apple bg-white px-6">
        <div className="mx-auto max-w-wide">
          <ScrollReveal>
            <h2 id="problem-heading" className="text-center text-section text-near-black">
              {problem.headline}
            </h2>
            <div className="mt-16">
              <StatRow stats={[...problem.stats]} />
            </div>
            <p
              className="mx-auto mt-16 max-w-copy text-body text-near-black"
              dangerouslySetInnerHTML={{ __html: problem.body }}
            />
          </ScrollReveal>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Services
        </h2>
        {services.map((service) => (
          <FeatureBlock key={service.id} {...service} />
        ))}
      </section>

      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="section-apple bg-white px-6"
      >
        <div className="mx-auto max-w-wide text-center">
          <ScrollReveal>
            <h2 id="pricing-heading" className="text-section text-near-black">
              {pricing.headline}
            </h2>
            <p className="mt-10 text-stat text-near-black">${pricing.price}/month</p>
            <ul className="mx-auto mt-12 max-w-copy text-left">
              {pricing.chips.map((chip) => (
                <SpecChip key={chip.term} term={chip.term} description={chip.description} />
              ))}
            </ul>
            <p
              className="mx-auto mt-12 max-w-copy text-body text-near-black"
              dangerouslySetInnerHTML={{ __html: pricing.body }}
            />
            <div className="mt-10">
              <ApplePillButton href="/book">Book a call</ApplePillButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="guarantees-heading" className="bg-black px-6 py-16 md:py-24">
        <h2 id="guarantees-heading" className="sr-only">
          Guarantees
        </h2>
        <ul className="mx-auto grid max-w-wide gap-12 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
            <li key={item.claim} className="flex min-h-[33dvh] flex-col justify-center">
              <p className="text-sub text-white">
                {item.claim}
                {"footnote" in item && item.footnote && <Footnote id={item.footnote} />}
              </p>
              <p className="mt-4 text-small text-grey">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="process"
        aria-labelledby="process-heading"
        className="section-apple bg-off-white px-6"
      >
        <div className="mx-auto max-w-copy">
          <ScrollReveal>
            <h2 id="process-heading" className="text-section text-near-black">
              Process. Three steps to live.
            </h2>
            <div className="mt-12">
              <AccordionList steps={[...processSteps]} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="before-after-heading" className="bg-black">
        <h2 id="before-after-heading" className="sr-only">
          Before and after
        </h2>
        <BeforeAfterSlider
          beforeSrc={beforeAfter.beforeSrc}
          afterSrc={beforeAfter.afterSrc}
          beforeAlt={beforeAfter.beforeAlt}
          afterAlt={beforeAfter.afterAlt}
          width={beforeAfter.width}
          height={beforeAfter.height}
        />
      </section>

      <section
        id="answers"
        aria-labelledby="answers-heading"
        className="section-apple bg-white px-6"
      >
        <div className="mx-auto max-w-copy">
          <ScrollReveal>
            <h2 id="answers-heading" className="text-section text-near-black">
              Answers. Straight, not scripted.
            </h2>
            <ul className="mt-12 space-y-6">
              {answers.map((item) => (
                <li key={item.href}>
                  <AppleTextLink href={item.href}>{item.question}</AppleTextLink>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <ComparisonTiles headline={comparison.headline} tiles={[...comparison.tiles]} />

      <section aria-labelledby="final-cta-heading" className="relative bg-black">
        <div className="viewport-full flex flex-col items-center justify-center px-6 text-center">
          <ScrollReveal>
            <h2 id="final-cta-heading" className="max-w-copy text-section text-white">
              {finalCta.headline}
            </h2>
            <div className="mt-10">
              <ApplePillButton href="/book">Book a call</ApplePillButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FootnoteList />
    </>
  );
}
