import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/lib/apple-home-content";
import { AppleTextLink } from "./AppleTextLink";
import { FullBleedImage } from "./FullBleedImage";

export function Hero() {
  return (
    <section aria-label="Introduction" className="relative bg-black">
      <div className="relative viewport-full overflow-hidden">
        <FullBleedImage
          src={hero.imageSrc}
          alt={hero.imageAlt}
          width={hero.imageWidth}
          height={hero.imageHeight}
          priority
        />
        <div className="image-scrim absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 flex flex-col items-center px-6 pt-24 text-center md:pt-32">
          <ScrollReveal className="max-w-copy">
            <h1 className="text-hero text-white">{hero.headline}</h1>
            <p className="mt-6 text-body text-grey">{hero.subline}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
              <AppleTextLink href="/book" light>
                Book a call
              </AppleTextLink>
              <AppleTextLink href="/pricing" light>
                See pricing
              </AppleTextLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
