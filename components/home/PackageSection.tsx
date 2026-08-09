import Link from "next/link";
import { packageContent } from "@/lib/home-content";

export function PackageSection() {
  return (
    <section aria-labelledby="package-heading" className="bg-white section-padding">
      <div className="mx-auto max-w-text px-6 text-center">
        <h2 id="package-heading" className="text-h1 text-near-black">
          {packageContent.headline}
        </h2>

        <ul className="mt-16 space-y-4 text-left">
          {packageContent.items.map((item) => (
            <li key={item} className="border-b border-hairline pb-4 text-body text-near-black">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-16 text-display text-near-black">
          ${packageContent.monthlyPrice}
          <span className="text-h3 font-normal text-grey">/month</span>
        </p>

        <Link
          href="/pricing"
          className="mt-8 inline-block text-small text-accent underline decoration-hairline underline-offset-4"
        >
          See full pricing breakdown
        </Link>
      </div>
    </section>
  );
}
