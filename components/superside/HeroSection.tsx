import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/lib/superside-home-content";
import { IMAGE_BLUR } from "@/lib/superside-home-content";
import Image from "next/image";
import { LimeButton } from "./LimeButton";
import { SupersideNav } from "./SupersideNav";

export function HeroSection() {
  return (
    <section aria-label="Introduction" className="relative min-h-dvh bg-forest">
      <SupersideNav />
      <div className="mx-auto grid max-w-wide gap-10 px-6 pb-16 pt-24 md:grid-cols-2 md:items-center md:gap-12 md:pb-24 md:pt-28">
        <ScrollReveal>
          <h1 className="text-hero text-white">
            {hero.headlineBefore}
            <span className="font-serif-accent text-lime">{hero.headlineSerif}</span>
            {hero.headlineAfter}
          </h1>
          <p className="mt-6 max-w-copy text-body text-white/75">{hero.subline}</p>
          <div className="mt-10">
            <LimeButton href="/book">Book a call</LimeButton>
          </div>
        </ScrollReveal>

        <div className="columns-2 gap-3 md:gap-4">
          {hero.masonry.map((item) => (
            <div key={item.src} className="mb-3 break-inside-avoid overflow-hidden rounded-image md:mb-4">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
