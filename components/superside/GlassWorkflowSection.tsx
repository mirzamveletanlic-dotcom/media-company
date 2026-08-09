import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { workflowSection, IMAGE_BLUR } from "@/lib/superside-home-content";
import { ChartIcon, ClipboardIcon, GlassChip, SparkleIcon } from "./GlassChip";
import { Eyebrow } from "./Eyebrow";
import { LimeButton } from "./LimeButton";
import { MixedHeadline } from "./MixedHeadline";

const icons = {
  clipboard: <ClipboardIcon />,
  sparkle: <SparkleIcon />,
  chart: <ChartIcon />,
};

export function GlassWorkflowSection() {
  return (
    <section
      id="process"
      aria-labelledby="workflow-heading"
      className="relative min-h-[85dvh] overflow-hidden"
    >
      <Image
        src={workflowSection.imageSrc}
        alt=""
        width={workflowSection.imageWidth}
        height={workflowSection.imageHeight}
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[85dvh] max-w-wide items-center px-6 py-24 md:py-32">
        <ScrollReveal className="max-w-copy">
          <Eyebrow light>{workflowSection.eyebrow}</Eyebrow>
          <MixedHeadline
            id="workflow-heading"
            before={workflowSection.headlineBefore}
            serif={workflowSection.headlineSerif}
            light
          />
          <p className="mt-6 text-body leading-relaxed text-white/75">
            {workflowSection.body}
          </p>

          <ul className="mt-10 space-y-3">
            {workflowSection.steps.map((step) => (
              <li key={step.label}>
                <GlassChip
                  icon={icons[step.icon]}
                  label={step.label}
                  description={step.description}
                />
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <LimeButton href="/book" className="!px-7 !py-3.5 !text-body">
              Book a call
            </LimeButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
