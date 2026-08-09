"use client";

import Image from "next/image";
import { IMAGE_BLUR, type MasonryTile } from "@/lib/superside-home-content";

const heightMap = {
  sm: "h-44",
  md: "h-52",
  lg: "h-64",
  xl: "h-72",
};

type MasonryGridProps = {
  columns: ReadonlyArray<ReadonlyArray<MasonryTile>>;
};

export function MasonryGrid({ columns }: MasonryGridProps) {
  const offsets = ["pt-0", "pt-14", "pt-6"];

  return (
    <div className="absolute inset-y-0 right-0 flex h-full w-[58%] gap-3 pl-4 pr-0">
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className={`flex w-1/3 flex-col gap-3 ${offsets[colIndex]}`}
        >
          {column.map((tile, tileIndex) => (
            <div
              key={`${colIndex}-${tileIndex}`}
              className={`${heightMap[tile.tileHeight]} shrink-0 overflow-hidden rounded-[var(--radius-card)]`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                width={tile.width}
                height={tile.height}
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                sizes="20vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
