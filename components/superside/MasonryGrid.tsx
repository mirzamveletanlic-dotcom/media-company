"use client";

import Image from "next/image";
import { IMAGE_BLUR, type MasonryTile } from "@/lib/superside-home-content";

const heightMap = {
  sm: "h-40 md:h-48",
  md: "h-48 md:h-60",
  lg: "h-56 md:h-72",
  xl: "h-64 md:h-80",
};

type MasonryGridProps = {
  columns: ReadonlyArray<ReadonlyArray<MasonryTile>>;
};

export function MasonryGrid({ columns }: MasonryGridProps) {
  const offsets = ["pt-0", "pt-10 md:pt-16", "pt-4 md:pt-8"];

  return (
    <div
      aria-hidden="true"
      className="absolute -right-2 top-1/2 flex h-[115%] w-full max-w-none -translate-y-1/2 gap-2.5 md:gap-3 lg:gap-3.5"
    >
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className={`flex w-1/3 flex-col gap-2.5 md:gap-3 lg:gap-3.5 ${offsets[colIndex]}`}
        >
          {column.map((tile) => (
            <div
              key={`${colIndex}-${tile.src}-${tile.alt}`}
              className={`${heightMap[tile.tileHeight]} shrink-0 overflow-hidden rounded-2xl md:rounded-[20px]`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                width={tile.width}
                height={tile.height}
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                sizes="(max-width: 768px) 33vw, 20vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
