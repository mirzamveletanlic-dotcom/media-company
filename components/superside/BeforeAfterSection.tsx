import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { beforeAfter } from "@/lib/superside-home-content";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Eyebrow } from "./Eyebrow";
import { MixedHeadline } from "./MixedHeadline";

export function BeforeAfterSection() {
  return (
    <section aria-labelledby="before-after-heading" className="section-block bg-cream px-6">
      <div className="mx-auto max-w-wide">
        <ScrollReveal className="mb-10 max-w-copy">
          <Eyebrow>{beforeAfter.eyebrow}</Eyebrow>
          <MixedHeadline
            id="before-after-heading"
            before={beforeAfter.headlineBefore}
            serif={beforeAfter.headlineSerif}
          />
        </ScrollReveal>
        <BeforeAfterSlider
          beforeSrc={beforeAfter.beforeSrc}
          afterSrc={beforeAfter.afterSrc}
          beforeAlt={beforeAfter.beforeAlt}
          afterAlt={beforeAfter.afterAlt}
          width={beforeAfter.width}
          height={beforeAfter.height}
        />
      </div>
    </section>
  );
}
