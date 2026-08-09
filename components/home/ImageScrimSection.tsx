import type { ReactNode } from "react";
import { FullBleedImage } from "./FullBleedImage";

type ImageScrimSectionProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  children: ReactNode;
  ariaLabel: string;
  className?: string;
};

export function ImageScrimSection({
  src,
  alt,
  width,
  height,
  priority = false,
  children,
  ariaLabel,
  className = "",
}: ImageScrimSectionProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={`viewport-full flex flex-col justify-end bg-cream px-6 py-16 md:py-24 ${className}`.trim()}
    >
      <div className="relative mx-auto mb-10 w-full max-w-[1100px] md:mb-14">
        <div className="image-rounded relative aspect-[16/10] w-full">
          <FullBleedImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="rounded-2xl md:rounded-3xl"
          />
          <div
            className="image-scrim absolute inset-0 rounded-2xl md:rounded-3xl"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col justify-end rounded-2xl p-8 md:rounded-3xl md:p-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
