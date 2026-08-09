import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { heroContent } from "@/lib/home-content";
import { FullBleedImage } from "./FullBleedImage";
import { HomeTextLink } from "./HomeTextLink";

export function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="viewport-full -mt-16 flex flex-col items-center justify-center bg-cream px-6 pb-16 pt-28 text-center md:pt-24"
    >
      <ScrollReveal className="max-w-[900px]">
        <h1 className="text-display text-brown">
          {heroContent.headline}{" "}
          <span className="font-accent">{heroContent.headlineAccent}</span>
        </h1>
        <p className="subline mt-6 text-h3 text-grey">{heroContent.subline}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <HomeTextLink href="/book">Book a call</HomeTextLink>
          <HomeTextLink href="/pricing">See pricing</HomeTextLink>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120} className="mt-14 w-full max-w-[1100px] md:mt-16">
        <div className="image-rounded relative aspect-[16/10] w-full shadow-none">
          <FullBleedImage
            src={heroContent.imageSrc}
            alt={heroContent.imageAlt}
            width={heroContent.imageWidth}
            height={heroContent.imageHeight}
            priority
            className="rounded-2xl md:rounded-3xl"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
