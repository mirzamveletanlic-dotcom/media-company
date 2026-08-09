import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { beforeAfter } from "@/lib/superside-home-content";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { SectionIntro } from "./SectionIntro";

export function BeforeAfterSection() {
  return (
    <section aria-labelledby="before-after-heading" className="section-pad bg-cream">
      <div className="section-inner">
        <ScrollReveal className="mb-10 md:mb-14">
          <SectionIntro
            id="before-after-heading"
            eyebrow={beforeAfter.eyebrow}
            headlineBefore={beforeAfter.headlineBefore}
            headlineSerif={beforeAfter.headlineSerif}
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
