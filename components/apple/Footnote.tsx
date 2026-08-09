import Link from "next/link";
import type { FootnoteId } from "@/lib/apple-home-content";

type FootnoteProps = {
  id: FootnoteId;
};

export function Footnote({ id }: FootnoteProps) {
  return (
    <sup>
      <Link
        href={`#footnote-${id}`}
        className="ml-0.5 text-footnote text-grey no-underline hover:text-accent"
        aria-label={`Footnote ${id}`}
      >
        {id}
      </Link>
    </sup>
  );
}
