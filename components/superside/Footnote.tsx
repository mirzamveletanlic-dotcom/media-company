import Link from "next/link";
import type { FootnoteId } from "@/lib/superside-home-content";

type FootnoteProps = {
  id: FootnoteId;
  light?: boolean;
};

export function Footnote({ id, light = false }: FootnoteProps) {
  return (
    <sup>
      <Link
        href={`#footnote-${id}`}
        className={`ml-0.5 text-footnote no-underline hover:underline ${light ? "text-white/60 hover:text-lime" : "text-grey hover:text-forest"}`}
        aria-label={`Footnote ${id}`}
      >
        {id}
      </Link>
    </sup>
  );
}
