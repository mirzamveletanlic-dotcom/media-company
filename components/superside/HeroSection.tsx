import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/lib/superside-home-content";
import { LimeButton } from "./LimeButton";
import { MasonryGrid } from "./MasonryGrid";
import { SupersideNav } from "./SupersideNav";

export function HeroSection() {
  return (
    <section aria-label="Introduction" className="relative h-dvh overflow-hidden bg-forest">
      <SupersideNav />

      <div className="flex h-full flex-col lg:flex-row">
        {/* Copy — left ~42% */}
        <div className="relative z-10 flex shrink-0 flex-col justify-center px-6 pb-8 pt-24 lg:w-[42%] lg:px-12 lg:pb-0 lg:pl-16 lg:pt-28 xl:pl-24">
          <ScrollReveal>
            <h1 className="text-[clamp(2.25rem,5vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              {hero.headlineBefore}
              <span className="font-serif-accent text-lime">{hero.headlineSerif}</span>
              {hero.headlineAfter}
            </h1>
            <p className="mt-6 max-w-[28rem] text-body leading-relaxed text-white/70">
              {hero.subline}
            </p>
            <div className="mt-10">
              <LimeButton href="/book" className="!px-7 !py-3.5 !text-body">
                Book a call
              </LimeButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Masonry — right ~58%, bleeds to edge */}
        <div className="relative min-h-0 flex-1 lg:min-h-full">
          <div className="absolute inset-0 overflow-hidden">
            <MasonryGrid columns={hero.masonryColumns} />
          </div>
          {/* Fade left edge so tiles blend into copy column */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-forest to-transparent lg:w-24"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
