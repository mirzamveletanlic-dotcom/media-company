import { BookCallLink } from "@/components/layout/BookCallLink";
import { finalCtaContent } from "@/lib/home-content";

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="flex min-h-screen items-center bg-dark section-padding"
    >
      <div className="mx-auto max-w-text px-6 text-center">
        <h2 id="final-cta-heading" className="text-display text-white">
          {finalCtaContent.headline}
        </h2>
        <div className="mt-10 flex justify-center">
          <BookCallLink className="bg-white text-near-black hover:opacity-90" />
        </div>
      </div>
    </section>
  );
}
