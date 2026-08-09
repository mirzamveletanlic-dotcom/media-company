import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Footnote } from "./Footnote";
import { FullBleedImage } from "./FullBleedImage";
import { LearnMore } from "./LearnMore";
import { SpecChip } from "./SpecChip";
import type { FootnoteId } from "@/lib/apple-home-content";

type FeatureBlockProps = {
  id: string;
  headline: string;
  bg: "white" | "off-white" | "black";
  imageFirst: boolean;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  body: string;
  stat?: { value: string; label: string; footnote?: FootnoteId };
  chips?: ReadonlyArray<{ term: string; description: string }>;
  modal: {
    title: string;
    deliverables: ReadonlyArray<string>;
    timeline: ReadonlyArray<{ week: string; detail: string }>;
    price: string;
  };
};

const bgMap = {
  white: "bg-white text-near-black",
  "off-white": "bg-off-white text-near-black",
  black: "bg-black text-white",
};

export function FeatureBlock({
  id,
  headline,
  bg,
  imageFirst,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  body,
  stat,
  chips,
  modal,
}: FeatureBlockProps) {
  const dark = bg === "black";
  const textClass = dark ? "text-grey" : "text-grey";

  const copy = (
    <ScrollReveal className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16">
      <h3 className={`text-section ${dark ? "text-white" : "text-near-black"}`}>
        {headline}
      </h3>
      <p
        className={`mt-6 max-w-copy text-body ${dark ? "text-white/90" : "text-near-black"}`}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {stat && (
        <div className="mt-10">
          <p className={`text-stat ${dark ? "text-white" : "text-near-black"}`}>
            {stat.value}
            {stat.footnote && <Footnote id={stat.footnote} />}
          </p>
          <p className="mt-2 text-caption text-grey">{stat.label}</p>
        </div>
      )}
      {chips && (
        <ul className="mt-8 max-w-copy">
          {chips.map((chip) => (
            <SpecChip key={chip.term} term={chip.term} description={chip.description} />
          ))}
        </ul>
      )}
      <LearnMore title={modal.title} dark={dark}>
        <p className="text-small font-semibold text-near-black">Deliverables</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-small text-grey">
          {modal.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8 text-small font-semibold text-near-black">Timeline</p>
        <ul className="mt-3 space-y-3 text-small text-grey">
          {modal.timeline.map((row) => (
            <li key={row.week}>
              <strong className="text-near-black">{row.week}</strong> — {row.detail}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-body font-semibold text-near-black">{modal.price}</p>
      </LearnMore>
    </ScrollReveal>
  );

  const image = (
    <div className="relative min-h-[320px] md:min-h-[480px]">
      <FullBleedImage
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
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
