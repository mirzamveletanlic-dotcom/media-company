"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  type PointerEvent,
  useCallback,
  useRef,
  useState,
} from "react";

const BLUR =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%23d2d2d7'/%3E%3C/svg%3E";

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
      if (!track) {
        return;
      }

      const rect = track.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPosition(clamp(next));
    },
    [clamp],
  );

  const onPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (!isDragging) {
      return;
    }
    updateFromClientX(event.clientX);
  };

  const onPointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
    setIsDragging(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((current) => clamp(current - 5));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((current) => clamp(current + 5));
    }
  };

  const imageClass = "image-tone absolute inset-0 h-full w-full object-cover";

  return (
    <div ref={trackRef} className="relative h-full min-h-[inherit] w-full select-none">
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        width={width}
        height={height}
        loading="lazy"
        placeholder="blur"
        blurDataURL={BLUR}
        sizes="100vw"
        className={imageClass}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={afterSrc}
          alt=""
          width={width}
          height={height}
          loading="lazy"
          placeholder="blur"
          blurDataURL={BLUR}
          sizes="100vw"
          className={imageClass}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/80"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />

      <button
        type="button"
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} percent after`}
        className="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-dark/70"
        style={{ left: `${position}%` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        <span className="sr-only">Comparison slider</span>
        <span aria-hidden="true" className="flex gap-0.5">
          <span className="block h-3 w-0.5 bg-white" />
          <span className="block h-3 w-0.5 bg-white" />
        </span>
      </button>

      <p className="sr-only">
        Before: {beforeAlt}. After: {afterAlt}.
      </p>
    </div>
  );
}
