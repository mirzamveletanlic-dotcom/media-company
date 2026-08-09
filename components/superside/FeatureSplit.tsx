import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Footnote } from "./Footnote";
import { LimeButton } from "./LimeButton";
import { RoundedImage } from "./RoundedImage";
import { Eyebrow } from "./Eyebrow";
import { MixedHeadline } from "./MixedHeadline";
import type { FootnoteId } from "@/lib/superside-home-content";

type FeatureSplitProps = {
  id: string;
  eyebrow: string;
  headlineBefore: string;
  headlineSerif: string;
  bg: "cream" | "forest" | "sage";
  imageFirst: boolean;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  body: string;
  stat?: { value: string; label: string; footnote?: FootnoteId };
};

const bgMap = {
  cream: "bg-cream text-near-black",
  forest: "bg-forest text-white",
  sage: "bg-sage text-white",
};

export function FeatureSplit({
  id,
  eyebrow,
  headlineBefore,
  headlineSerif,
  bg,
  imageFirst,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  body,
  stat,
}: FeatureSplitProps) {
  const light = bg !== "cream";

  const copy = (
    <ScrollReveal className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-20 lg:px-16">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <MixedHeadline before={headlineBefore} serif={headlineSerif} light={light} />
      <p
        className={`mt-6 max-w-copy text-body ${light ? "text-white/85" : "text-near-black"}`}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {stat && (
        <div className="mt-10">
          <p className={`text-stat ${light ? "text-lime" : "text-forest"}`}>
            {stat.value}
            {stat.footnote && <Footnote id={stat.footnote} light={light} />}
          </p>
          <p className={`mt-2 text-caption ${light ? "text-white/60" : "text-grey"}`}>
            {stat.label}
          </p>
        </div>
      )}
      <div className="mt-10">
        <LimeButton href="/book">Book a call</LimeButton>
      </div>
    </ScrollReveal>
  );

  const image = (
    <div className="flex items-center p-6 md:p-10 lg:p-14">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-image">
        <RoundedImage
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  );

  return (
    <article id={id} className={`grid md:grid-cols-2 ${bgMap[bg]}`}>
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
    </article>
  );
}
