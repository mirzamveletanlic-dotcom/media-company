"use client";

import { useId, useState } from "react";

type Step = {
  step: number;
  title: string;
  duration: string;
  happens: string;
  need: string;
  get: string;
};

type AccordionListProps = {
  steps: ReadonlyArray<Step>;
};

export function AccordionList({ steps }: AccordionListProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-hairline border-y border-hairline">
      {steps.map((step, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li key={step.step}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-caption text-grey">0{step.step}</span>
                <span className="text-sub text-near-black">{step.title}</span>
              </span>
              <span className="shrink-0 text-caption text-grey">{step.duration}</span>
            </button>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-8 text-body text-near-black">
                <p><strong>What happens:</strong> {step.happens}</p>
                <p className="mt-4"><strong>What we need from you:</strong> {step.need}</p>
                <p className="mt-4"><strong>What you get:</strong> {step.get}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
