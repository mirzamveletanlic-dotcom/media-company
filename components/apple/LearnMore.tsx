"use client";

import { type ReactNode, useState } from "react";
import { Modal } from "./Modal";

type LearnMoreProps = {
  title: string;
  children: ReactNode;
  dark?: boolean;
};

export function LearnMore({ title, children, dark = false }: LearnMoreProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`mt-8 text-body text-accent hover:underline ${dark ? "" : ""}`}
      >
        Learn more ›
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        {children}
      </Modal>
    </>
  );
}
