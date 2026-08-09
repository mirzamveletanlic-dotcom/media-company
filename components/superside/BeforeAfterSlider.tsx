"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  type PointerEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import { IMAGE_BLUR } from "@/lib/superside-home-content";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  width: number;
  height: number;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  width,
  height,
}: BeforeAfterSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const clamp = useCallback((value: number) => Math.min(100, Math.max(0, value)), []);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
    },
    [clamp],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((c) => clamp(c - 5));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((c) => clamp(c + 5));
    }
  };

  const imageClass = "absolute inset-0 h-full w-full object-cover";

  return (
    <div ref={trackRef} className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-image">
      <Image src={beforeSrc} alt={beforeAlt} width={width} height={height} loading="lazy" placeholder="blur" blurDataURL={IMAGE_BLUR} sizes="100vw" className={imageClass} />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} aria-hidden="true">
        <Image src={afterSrc} alt={afterAlt} width={width} height={height} loading="lazy" placeholder="blur" blurDataURL={IMAGE_BLUR} sizes="100vw" className={imageClass} />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-lime" style={{ left: `${position}%` }} aria-hidden="true" />
      <button
        type="button"
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        className="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime text-forest"
        style={{ left: `${position}%` }}
        onPointerDown={(e: PointerEvent<HTMLButtonElement>) => { e.currentTarget.setPointerCapture(e.pointerId); setIsDragging(true); updateFromClientX(e.clientX); }}
        onPointerMove={(e: PointerEvent<HTMLButtonElement>) => { if (isDragging) updateFromClientX(e.clientX); }}
        onPointerUp={(e: PointerEvent<HTMLButtonElement>) => { e.currentTarget.releasePointerCapture(e.pointerId); setIsDragging(false); }}
        onKeyDown={onKeyDown}
      >
        <span className="sr-only">Comparison slider</span>
      </button>
    </div>
  );
}
