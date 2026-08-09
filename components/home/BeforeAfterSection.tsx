import { beforeAfterContent } from "@/lib/home-content";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <section
      aria-label="Before and after website comparison"
      className="viewport-full flex items-center bg-cream px-6 py-16"
    >
      <div className="image-rounded mx-auto w-full max-w-[1100px]">
        <BeforeAfterSlider
          beforeSrc={beforeAfterContent.beforeSrc}
          afterSrc={beforeAfterContent.afterSrc}
          beforeAlt={beforeAfterContent.beforeAlt}
          afterAlt={beforeAfterContent.afterAlt}
          width={beforeAfterContent.width}
          height={beforeAfterContent.height}
        />
      </div>
    </section>
  );
}
