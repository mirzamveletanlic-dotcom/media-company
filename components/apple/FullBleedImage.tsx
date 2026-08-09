import Image from "next/image";
import { IMAGE_BLUR } from "@/lib/apple-home-content";

type FullBleedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export function FullBleedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: FullBleedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL={IMAGE_BLUR}
      sizes="100vw"
      className={`image-tone h-full w-full object-cover ${className}`.trim()}
    />
  );
}
