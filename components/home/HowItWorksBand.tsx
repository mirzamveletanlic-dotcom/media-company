import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FullBleedImage } from "./FullBleedImage";

type HowItWorksBandProps = {
  step: number;
  title: string;
  description: string;
  timeline: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageFirst: boolean;
  dark: boolean;
};

export function HowItWorksBand({
  step,
  title,
  description,
  timeline,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageFirst,
  dark,
}: HowItWorksBandProps) {
  const textBg = dark ? "bg-dark" : "bg-white";
  const headlineColor = dark ? "text-white" : "text-near-black";
  const bodyColor = dark ? "text-grey" : "text-grey";
  const timelineColor = dark ? "text-white" : "text-near-black";

  const imageCell = (
    <div className="relative min-h-[50dvh] md:min-h-[80dvh]">
      <FullBleedImage
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );

  const textCell = (
    <div
      className={`flex min-h-[50dvh] items-center justify-center px-6 py-16 md:min-h-[80dvh] md:px-16 ${textBg}`}
    >
      <ScrollReveal className="max-w-[480px] text-center md:text-left">
        <p className="text-small font-semibold text-grey">Step {step}</p>
        <h3 className={`mt-4 text-h1 ${headlineColor}`}>{title}</h3>
        <p className={`mt-5 text-body ${bodyColor}`}>{description}</p>
        <p className={`mt-8 text-small font-semibold ${timelineColor}`}>
          {timeline}
        </p>
      </ScrollReveal>
    </div>
  );

  return (
    <li className="grid md:grid-cols-2">
      {imageFirst ? (
        <>
          {imageCell}
          {textCell}
        </>
      ) : (
        <>
          {textCell}
          {imageCell}
        </>
      )}
    </li>
  );
}
