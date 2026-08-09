import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { heroContent } from "@/lib/home-content";
import { HomeTextLink } from "./HomeTextLink";
import { ImageScrimSection } from "./ImageScrimSection";

export function HeroSection() {
  return (
    <ImageScrimSection
      ariaLabel="Introduction"
      className="-mt-16"
      src={heroContent.imageSrc}
      alt={heroContent.imageAlt}
      width={heroContent.imageWidth}
      height={heroContent.imageHeight}
      priority
    >
      <div className="viewport-full flex flex-col items-center justify-center px-6 text-center">
        <ScrollReveal>
          <h1 className="text-display text-white">{heroContent.headline}</h1>
          <p className="subline mt-6 text-h3 text-grey">{heroContent.subline}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <HomeTextLink href="/book" light>
              Book a call
            </HomeTextLink>
            <HomeTextLink href="/pricing" light>
              See pricing
            </HomeTextLink>
          </div>
        </ScrollReveal>
      </div>
    </ImageScrimSection>
  );
}
