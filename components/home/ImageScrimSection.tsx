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
      className={`relative viewport-full overflow-hidden ${className}`.trim()}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <FullBleedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
        />
      </div>
      <div className="image-scrim absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 flex min-h-[100dvh] flex-col">{children}</div>
    </section>
  );
}
