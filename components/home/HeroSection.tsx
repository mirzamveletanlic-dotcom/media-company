import Link from "next/link";
import { BookCallLink } from "@/components/layout/BookCallLink";
import { heroContent } from "@/lib/home-content";

export function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="relative -mt-16 flex min-h-screen items-end md:items-center"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={heroContent.posterSrc}
      >
        <source src={heroContent.videoSrc} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-dark/55"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 md:pb-0 md:pt-16">
        <div className="mx-auto max-w-text">
          <h1 className="text-display text-white">{heroContent.headline}</h1>
          <p className="mt-6 max-w-xl text-body text-white/80">{heroContent.subline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BookCallLink className="bg-white text-near-black hover:opacity-90" />
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-white/60 px-5 py-2.5 text-small text-white transition-opacity hover:opacity-80"
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
