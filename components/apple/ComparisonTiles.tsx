type Tile = {
  title: string;
  icon: string;
  items: string[];
};

type ComparisonTilesProps = {
  headline: string;
  tiles: Tile[];
};

const icons: Record<string, string> = {
  star: "★",
  building: "◆",
  wrench: "⚙",
};

export function ComparisonTiles({ headline, tiles }: ComparisonTilesProps) {
  return (
    <section aria-labelledby="why-us-heading" className="section-apple bg-off-white px-6">
      <div className="mx-auto max-w-wide">
        <h2 id="why-us-heading" className="text-center text-section text-near-black">
          {headline}
        </h2>
        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {tiles.map((tile) => (
            <li key={tile.title}>
              <p className="text-sub text-near-black" aria-hidden="true">
                <span className="mr-2 text-accent">{icons[tile.icon] ?? "•"}</span>
                {tile.title}
              </p>
              <ul className="mt-6 space-y-3">
                {tile.items.map((item) => (
                  <li key={item} className="flex gap-3 text-body text-near-black">
                    <span className="text-grey" aria-hidden="true">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
