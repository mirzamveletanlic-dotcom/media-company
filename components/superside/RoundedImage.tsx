import Image from "next/image";
import { IMAGE_BLUR } from "@/lib/superside-home-content";

type RoundedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function RoundedImage({ src, alt, width, height, priority = false }: RoundedImageProps) {
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
      sizes="(max-width: 768px) 100vw, 50vw"
      className="h-full w-full object-cover"
    />
  );
}
