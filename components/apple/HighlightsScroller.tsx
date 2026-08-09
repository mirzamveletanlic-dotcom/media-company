"use client";

import { useCallback, useRef } from "react";
import { FullBleedImage } from "./FullBleedImage";

type HighlightItem = {
  id: string;
  line: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

type HighlightsScrollerProps = {
  headline: string;
  items: HighlightItem[];
};

export function HighlightsScroller({ headline, items }: HighlightsScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }
    const cardWidth = el.querySelector("article")?.clientWidth ?? 320;
    el.scrollBy({ left: direction * (cardWidth + 16), behavior: "smooth" });
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
  };

  return (
    <section aria-labelledby="highlights-heading" className="section-apple bg-off-white">
      <div className="mx-auto max-w-wide px-6">
        <h2 id="highlights-heading" className="text-center text-section text-near-black">
          {headline}
        </h2>
      </div>
      <div
        ref={scrollerRef}
        tabIndex={0}
        role="region"
        aria-label="Highlights carousel"
        onKeyDown={onKeyDown}
        className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mt-16 md:gap-6 md:px-[max(24px,calc((100vw-1040px)/2))]"
      >
        {items.map((item) => (
          <article
            key={item.id}
            className="w-[85vw] shrink-0 snap-center md:w-[calc((1040px-48px)/3)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <FullBleedImage
                src={item.imageSrc}
                alt={item.imageAlt}
                width={item.imageWidth}
                height={item.imageHeight}
              />
            </div>
            <p className="mt-5 text-body text-near-black">{item.line}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
