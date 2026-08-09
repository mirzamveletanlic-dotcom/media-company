import { footnotes } from "@/lib/apple-home-content";

export function FootnoteList() {
  const entries = Object.entries(footnotes) as [string, string][];

  return (
    <section
      id="footnotes"
      aria-labelledby="footnotes-heading"
      className="section-apple bg-off-white px-6"
    >
      <div className="mx-auto max-w-copy">
        <h2 id="footnotes-heading" className="sr-only">
          Footnotes
        </h2>
        <ol className="space-y-3">
          {entries.map(([id, text]) => (
            <li key={id} id={`footnote-${id}`} className="text-footnote text-grey">
              <span className="mr-2 font-medium text-near-black">{id}.</span>
              {text}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
