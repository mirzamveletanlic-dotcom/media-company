import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IMAGE_BLUR, workflowSection } from "@/lib/superside-home-content";
import { ChartIcon, ClipboardIcon, GlassChip, SparkleIcon } from "./GlassChip";
import { LimeButton } from "./LimeButton";
import { SectionIntro } from "./SectionIntro";

const icons = {
  clipboard: <ClipboardIcon />,
  sparkle: <SparkleIcon />,
  chart: <ChartIcon />,
};

export function GlassWorkflowSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative min-h-[90dvh]">
      <Image
        src={workflowSection.imageSrc}
        alt=""
        fill
        placeholder="blur"
        blurDataURL={IMAGE_BLUR}
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest/[0.97] via-forest/85 to-forest/50"
        aria-hidden="true"
      />

      <div className="section-inner relative flex min-h-[90dvh] items-center section-pad">
        <ScrollReveal className="max-w-copy">
          <SectionIntro
            id="process-heading"
            eyebrow={workflowSection.eyebrow}
            headlineBefore={workflowSection.headlineBefore}
            headlineSerif={workflowSection.headlineSerif}
            light
          />
          <p className="mt-6 text-body text-white/75">{workflowSection.body}</p>

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
            <LimeButton href="/book" className="!px-7 !py-3.5">
              Book a call
            </LimeButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
