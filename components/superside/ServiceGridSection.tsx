import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IMAGE_BLUR, serviceCards } from "@/lib/superside-home-content";
import { Eyebrow } from "./Eyebrow";
import { MixedHeadline } from "./MixedHeadline";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  descriptionPosition: "below-title" | "bottom";
  href?: string;
};

function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  descriptionPosition,
  href,
}: ServiceCardProps) {
  const inner = (
    <>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/55"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col p-6 md:p-7">
        <h3 className="text-sub leading-tight text-white">{title}</h3>
        <p
          className={`text-small leading-relaxed text-white/85 ${
            descriptionPosition === "bottom" ? "mt-auto pt-4" : "mt-3"
          }`}
        >
          {description}
        </p>
      </div>
    </>
  );

  const className =
    "group relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-[20px]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}

export function ServiceGridSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-block bg-cream px-6">
      <div className="mx-auto max-w-wide">
        <ScrollReveal className="mb-12 max-w-copy md:mb-16">
          <Eyebrow>SERVICES</Eyebrow>
          <MixedHeadline
            id="services-heading"
            before="Everything you need to "
            serif="book more jobs"
          />
        </ScrollReveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {serviceCards.map((card) => (
            <li key={card.id}>
              <ServiceCard {...card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
