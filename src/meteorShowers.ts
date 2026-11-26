interface Shower {
  name: string;
  /** Typical peak, as [month (1-12), day]. It shifts by a day or so per year. */
  peak: readonly [number, number];
}

const SHOWERS: readonly Shower[] = [
  { name: 'Quadrantids', peak: [1, 3] },
  { name: 'Lyrids', peak: [4, 22] },
  { name: 'Eta Aquariids', peak: [5, 6] },
  { name: 'Perseids', peak: [8, 12] },
  { name: 'Orionids', peak: [10, 21] },
  { name: 'Leonids', peak: [11, 17] },
  { name: 'Geminids', peak: [12, 14] },
];

/**
 * The major shower near its peak on the visitor's local date, if any. A
 * one-day margin either side covers the peak drifting from year to year.
 */
export function activeShower(date = new Date()): string | null {
  const day = (m: number, d: number) => Date.UTC(date.getFullYear(), m - 1, d) / 86_400_000;
  const today = day(date.getMonth() + 1, date.getDate());
  const shower = SHOWERS.find(({ peak }) => Math.abs(today - day(...peak)) <= 1);
  return shower?.name ?? null;
}
