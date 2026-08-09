import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IMAGE_BLUR, serviceCards, servicesSection } from "@/lib/superside-home-content";
import { SectionIntro } from "./SectionIntro";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  descriptionPosition: "below-title" | "bottom";
  href: string;
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
  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/3] flex-col overflow-hidden rounded-[var(--radius-card)]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="card-scrim absolute inset-0" aria-hidden="true" />
      <div className="relative flex h-full flex-col p-6 md:p-7">
        <h3 className="text-sub text-white">{title}</h3>
        <p
          className={`text-small leading-relaxed text-white/85 ${
            descriptionPosition === "bottom" ? "mt-auto pt-4" : "mt-3"
          }`}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}

export function ServiceGridSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-pad border-t border-hairline bg-cream">
      <div className="section-inner">
        <ScrollReveal className="mb-12 md:mb-16">
          <SectionIntro
            id="services-heading"
            eyebrow={servicesSection.eyebrow}
            headlineBefore={servicesSection.headlineBefore}
            headlineSerif={servicesSection.headlineSerif}
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
