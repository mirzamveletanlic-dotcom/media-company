import { howItWorksSteps } from "@/lib/home-content";

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-heading" className="bg-white section-padding">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 id="how-it-works-heading" className="text-h1 text-near-black">
          How it works
        </h2>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {howItWorksSteps.map((step) => (
            <li key={step.step} className="border-t border-hairline pt-8">
              <p className="text-small font-semibold text-grey">Step {step.step}</p>
              <h3 className="mt-4 text-h3 text-near-black">{step.title}</h3>
              <p className="mt-4 text-body text-grey">{step.description}</p>
              <p className="mt-6 text-small font-semibold text-near-black">
                {step.timeline}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
