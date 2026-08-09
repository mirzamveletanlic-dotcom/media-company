import Image from "next/image";
import Link from "next/link";
import { hero, IMAGE_BLUR } from "@/lib/superside-home-content";
import { siteConfig } from "@/lib/site-config";
import { LimeButton } from "./LimeButton";

export function HeroSection() {
  const bodyBefore = hero.bodyBefore.replace("[BRAND]", siteConfig.brand);

  return (
    <section id="hero" aria-label="Introduction" className="relative min-h-dvh overflow-hidden bg-forest">
      <Image
        src={hero.imageSrc}
        alt={hero.imageAlt}
        fill
        priority
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="100vw"
        className="object-cover object-[center_20%]"
      />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="section-inner relative flex min-h-dvh flex-col justify-end pb-20 pt-[calc(var(--nav-height)+2rem)] lg:justify-center lg:pb-28">
        <div className="max-w-copy">
          <p className="text-eyebrow uppercase tracking-widest text-white/65">{hero.eyebrow}</p>

          <h1 className="mt-6 text-display text-white">
            {hero.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block font-serif-accent text-white">{hero.headlineSerif}</span>
          </h1>

          <p className="mt-8 text-body text-white/75">
            {bodyBefore}
            <Link
              href={hero.bodyLink.href}
              className="underline decoration-white/35 underline-offset-[6px] transition-colors hover:text-white"
            >
              {hero.bodyLink.text}
            </Link>
            {hero.bodyAfter}
          </p>

          <div className="mt-10">
            <LimeButton href="/book" className="!px-8 !py-4 !text-body">
              Book a call
            </LimeButton>
          </div>
        </div>
      </div>
    </section>
  );
}
