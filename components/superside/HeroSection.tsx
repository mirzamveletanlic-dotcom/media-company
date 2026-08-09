import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero, IMAGE_BLUR } from "@/lib/superside-home-content";
import { LimeButton } from "./LimeButton";
import { MasonryGrid } from "./MasonryGrid";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-dvh overflow-hidden bg-forest"
    >
      <div className="flex min-h-dvh flex-col lg:flex-row">
        <div className="section-inner relative z-10 flex flex-col justify-center pb-10 pt-[calc(var(--nav-height)+2rem)] lg:w-[44%] lg:max-w-none lg:pb-0 lg:pr-8">
          <ScrollReveal>
            <h1 className="text-display leading-[1.05] tracking-tight text-white">
              {hero.headlineBefore}
              <span className="font-serif-accent text-lime">{hero.headlineSerif}</span>
            </h1>
            <p className="mt-6 max-w-copy text-body text-white/70">{hero.subline}</p>
            <div className="mt-10">
              <LimeButton href="/book" className="!px-7 !py-3.5">
                Book a call
              </LimeButton>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative hidden min-h-[420px] flex-1 lg:block">
          <MasonryGrid columns={hero.masonryColumns} />
          <div className="bleed-scrim-left pointer-events-none absolute inset-y-0 left-0 z-10 w-28" aria-hidden="true" />
        </div>

        {/* Mobile: single hero image */}
        <div className="section-inner pb-10 lg:hidden">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)]">
            <Image
              src="/images/hero.jpg"
              alt="Contractor on a job site"
              fill
              placeholder="blur"
              blurDataURL={IMAGE_BLUR}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
