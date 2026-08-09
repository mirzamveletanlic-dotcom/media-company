import Link from "next/link";
import { BookCallLink } from "@/components/layout/BookCallLink";
import { heroContent } from "@/lib/home-content";

export function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="relative -mt-16 flex min-h-[100dvh] items-center justify-center overflow-hidden text-center"
    >
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={heroContent.posterSrc}
      >
        <source src={heroContent.videoSrc} type="video/mp4" />
      </video>

      <div className="hero-gradient absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 w-full px-6 pt-20 pb-24 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[900px]">
          <h1 className="text-display text-white">{heroContent.headline}</h1>
          <p className="mx-auto mt-6 max-w-[640px] text-h3 font-normal text-white/75">
            {heroContent.subline}
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <BookCallLink inverted />
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-small text-accent transition-opacity hover:opacity-80"
            >
              See pricing ›
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
