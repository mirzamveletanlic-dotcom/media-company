import { howItWorksSteps } from "@/lib/home-content";
import { HowItWorksBand } from "./HowItWorksBand";

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-heading" className="bg-cream">
      <h2 id="how-it-works-heading" className="sr-only">
        How it works
      </h2>
      <ul>
        {howItWorksSteps.map((step, index) => (
          <HowItWorksBand
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
            timeline={step.timeline}
            imageSrc={step.imageSrc}
            imageAlt={step.imageAlt}
            imageWidth={step.imageWidth}
            imageHeight={step.imageHeight}
            imageFirst={index % 2 === 0}
            dark={index === 1}
          />
        ))}
      </ul>
    </section>
  );
}
