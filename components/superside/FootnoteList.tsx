import { footnotes } from "@/lib/superside-home-content";

export function FootnoteList() {
  const entries = Object.entries(footnotes) as [string, string][];

  return (
    <section id="footnotes" aria-labelledby="footnotes-heading" className="border-t border-hairline bg-cream py-12">
      <div className="section-inner max-w-copy">
        <h2 id="footnotes-heading" className="sr-only">
          Footnotes
        </h2>
        <ol className="space-y-2">
          {entries.map(([id, text]) => (
            <li key={id} id={`footnote-${id}`} className="text-footnote leading-relaxed text-grey">
              <span className="mr-2 font-medium text-near-black">{id}.</span>
              {text}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
