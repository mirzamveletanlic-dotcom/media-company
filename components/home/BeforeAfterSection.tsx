import { beforeAfterContent } from "@/lib/home-content";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <section
      aria-label="Before and after website comparison"
      className="media-bleed viewport-full overflow-hidden"
    >
      <BeforeAfterSlider
        beforeSrc={beforeAfterContent.beforeSrc}
        afterSrc={beforeAfterContent.afterSrc}
        beforeAlt={beforeAfterContent.beforeAlt}
        afterAlt={beforeAfterContent.afterAlt}
        width={beforeAfterContent.width}
        height={beforeAfterContent.height}
      />
    </section>
  );
}
