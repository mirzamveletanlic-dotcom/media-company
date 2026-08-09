import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { servicesSection, serviceCards, IMAGE_BLUR } from "@/lib/superside-home-content";
import Image from "next/image";
import Link from "next/link";
import { SectionIntro } from "./SectionIntro";

export function ServiceGridSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-pad border-t border-hairline bg-cream">
      <div className="section-inner">
        <ScrollReveal className="mb-12 lg:mb-16">
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
              <Link
                href={card.href}
                className="group relative flex aspect-[4/3] flex-col overflow-hidden rounded-[var(--radius-card)]"
              >
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={card.imageWidth}
                  height={card.imageHeight}
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="card-scrim absolute inset-0" aria-hidden="true" />
                <div className="relative flex h-full flex-col p-6 md:p-7">
                  <h3 className="text-sub text-white">{card.title}</h3>
                  <p
                    className={`text-small leading-relaxed text-white/85 ${
                      card.descriptionPosition === "bottom" ? "mt-auto pt-4" : "mt-3"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
