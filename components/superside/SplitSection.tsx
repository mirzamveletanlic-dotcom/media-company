import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IMAGE_BLUR } from "@/lib/superside-home-content";
import { LimeButton } from "./LimeButton";
import { SectionIntro } from "./SectionIntro";

type SplitSectionProps = {
  id?: string;
  eyebrow: string;
  headlineBefore: string;
  headlineSerif: string;
  body: string;
  bullets?: ReadonlyArray<string>;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageFirst: boolean;
  showCta?: boolean;
};

export function SplitSection({
  id,
  eyebrow,
  headlineBefore,
  headlineSerif,
  body,
  bullets,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageFirst,
  showCta = false,
}: SplitSectionProps) {
  const copy = (
    <ScrollReveal className="flex flex-col justify-center">
      <SectionIntro
        id={id}
        eyebrow={eyebrow}
        headlineBefore={headlineBefore}
        headlineSerif={headlineSerif}
      />
      <p className="mt-8 max-w-copy text-body text-near-black">{body}</p>
      {bullets && (
        <ul className="mt-8 space-y-3">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3 text-body text-near-black">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {showCta && (
        <div className="mt-10">
          <LimeButton href="/book" className="!px-7 !py-3.5">
            Book a call
          </LimeButton>
        </div>
      )}
    </ScrollReveal>
  );

  const image = (
    <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] lg:aspect-[5/6]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="h-full w-full object-cover"
      />
    </div>
  );

  return (
    <section aria-labelledby={id} className="section-pad bg-cream">
      <div className="section-inner grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {imageFirst ? (
          <>
            {image}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {image}
          </>
        )}
      </div>
    </section>
  );
}
