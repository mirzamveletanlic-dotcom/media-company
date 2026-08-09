import { BeforeAfterSlider } from "./BeforeAfterSlider";

const COMPARISON_WIDTH = 1440;
const COMPARISON_HEIGHT = 810;

export function BeforeAfterSection() {
  return (
    <section
      aria-label="Before and after website comparison"
      className="media-bleed bg-dark py-6 md:py-10"
    >
      <div className="mx-auto mb-6 max-w-[1200px] px-6 md:mb-8">
        <p className="text-center text-small font-semibold text-grey">
          Before and after
        </p>
        <p className="mt-3 text-center text-h3 text-white">
          Drag to compare a real client redesign.
        </p>
      </div>

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
