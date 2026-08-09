import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IMAGE_BLUR, finalCta } from "@/lib/superside-home-content";
import { LimeButton } from "./LimeButton";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative min-h-[70dvh] overflow-hidden">
      <Image
        src={finalCta.imageSrc}
        alt=""
        fill
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/40"
        aria-hidden="true"
      />

      <div className="section-inner relative flex min-h-[70dvh] flex-col items-center justify-center py-24 text-center">
        <ScrollReveal>
          <h2 id="final-cta-heading" className="max-w-copy text-display text-white">
            {finalCta.headlineBefore}
            <span className="font-serif-accent text-lime">{finalCta.headlineSerif}</span>
          </h2>
          <div className="mt-10">
            <LimeButton href="/book" className="!px-8 !py-4 !text-body">
              Book a call
            </LimeButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
