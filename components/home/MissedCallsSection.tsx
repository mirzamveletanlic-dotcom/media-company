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
      <ScrollReveal className="mx-auto w-full max-w-[820px] text-center">
        <h2 className="text-display text-white">{missedCallsContent.headline}</h2>
        <div className="subline mt-6 space-y-2 text-h3 text-white/80">
          {missedCallsContent.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </ScrollReveal>
    </ImageScrimSection>
  );
}
