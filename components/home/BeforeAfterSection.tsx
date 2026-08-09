import { BeforeAfterSlider } from "./BeforeAfterSlider";

const COMPARISON_WIDTH = 1440;
const COMPARISON_HEIGHT = 810;

export function BeforeAfterSection() {
  return (
    <section aria-label="Before and after website comparison" className="media-bleed">
      <BeforeAfterSlider
        beforeSrc="/images/before-website.svg"
        afterSrc="/images/after-website.svg"
        beforeAlt="Cluttered contractor website before redesign"
        afterAlt="Clean contractor website after redesign by [BRAND]"
        width={COMPARISON_WIDTH}
        height={COMPARISON_HEIGHT}
      />
    </section>
  );
}
