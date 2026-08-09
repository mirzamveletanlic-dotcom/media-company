import Image from "next/image";

const BLUR =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%23dbd3c8'/%3E%3C/svg%3E";

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
      blurDataURL={BLUR}
      sizes="100vw"
      className={`image-tone h-full w-full object-cover ${className}`.trim()}
    />
  );
}
