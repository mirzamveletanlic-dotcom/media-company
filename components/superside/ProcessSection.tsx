import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { processSteps } from "@/lib/superside-home-content";
import { AccordionList } from "./AccordionList";
import { Eyebrow } from "./Eyebrow";

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="section-block bg-cream px-6">
      <div className="mx-auto max-w-copy">
        <ScrollReveal>
          <Eyebrow>PROCESS</Eyebrow>
          <h2 id="process-heading" className="text-section text-near-black">
            Three steps to live.
          </h2>
          <div className="mt-10">
            <AccordionList steps={processSteps} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
