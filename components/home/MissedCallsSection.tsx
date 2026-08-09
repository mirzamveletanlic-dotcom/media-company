import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { missedCallsContent } from "@/lib/home-content";
import { ImageScrimSection } from "./ImageScrimSection";

export function MissedCallsSection() {
  return (
    <ImageScrimSection
      ariaLabel="The missed calls problem"
      src={missedCallsContent.imageSrc}
      alt={missedCallsContent.imageAlt}
      width={missedCallsContent.imageWidth}
      height={missedCallsContent.imageHeight}
    >
      <div className="viewport-full flex flex-col justify-end px-6 pb-20 md:pb-28">
        <ScrollReveal className="mx-auto w-full max-w-[820px] text-center">
          <h2 className="text-display text-white">{missedCallsContent.headline}</h2>
          <div className="subline mt-8 space-y-2 text-h3 text-grey">
            {missedCallsContent.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </ImageScrimSection>
  );
}
