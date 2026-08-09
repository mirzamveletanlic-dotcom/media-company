import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { finalCta } from "@/lib/superside-home-content";
import { IMAGE_BLUR } from "@/lib/superside-home-content";
import { LimeButton } from "./LimeButton";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative min-h-[60dvh] overflow-hidden bg-forest">
      <Image
        src={finalCta.imageSrc}
        alt=""
        width={finalCta.imageWidth}
        height={finalCta.imageHeight}
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="image-scrim-dark absolute inset-0" aria-hidden="true" />
      <div className="relative flex min-h-[60dvh] flex-col items-center justify-center px-6 py-20 text-center">
        <ScrollReveal>
          <h2 id="final-cta-heading" className="max-w-copy text-hero text-white">
            {finalCta.headlineBefore}
            <span className="font-serif-accent text-lime">{finalCta.headlineSerif}</span>
          </h2>
          <div className="mt-10">
            <LimeButton href="/book">Book a call</LimeButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
