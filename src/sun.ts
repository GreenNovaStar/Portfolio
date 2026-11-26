const rad = Math.PI / 180;

/**
 * Sunrise and sunset (UTC) on a given UTC day, from NOAA's simplified solar
 * equations. Accurate to a minute or two, which is plenty for a glow. Returns
 * null for polar day or night.
 */
function sunEvents(dayUtc: number, lat: number, lon: number): [number, number] | null {
  const start = Date.UTC(new Date(dayUtc).getUTCFullYear(), 0, 1);
  const dayOfYear = Math.floor((dayUtc - start) / 86_400_000);
  const g = ((2 * Math.PI) / 365) * dayOfYear;
  const eqTime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(g) -
      0.032077 * Math.sin(g) -
      0.014615 * Math.cos(2 * g) -
      0.040849 * Math.sin(2 * g));
  const decl =
    0.006918 -
    0.399912 * Math.cos(g) +
    0.070257 * Math.sin(g) -
    0.006758 * Math.cos(2 * g) +
    0.000907 * Math.sin(2 * g) -
    0.002697 * Math.cos(3 * g) +
    0.00148 * Math.sin(3 * g);
  // 90.833° allows for refraction and the sun's size.
  const cosHa =
    Math.cos(90.833 * rad) / (Math.cos(lat * rad) * Math.cos(decl)) -
    Math.tan(lat * rad) * Math.tan(decl);
  if (cosHa < -1 || cosHa > 1) return null;
  const ha = Math.acos(cosHa) / rad;
  const minutes = (m: number) => dayUtc + m * 60_000;
  return [minutes(720 - 4 * (lon + ha) - eqTime), minutes(720 - 4 * (lon - ha) - eqTime)];
}

/**
 * How strongly to show twilight at a place: 1 at sunrise or sunset, easing
 * to 0 by `windowMin` minutes either side.
 */
export function twilight(now: number, lat: number, lon: number, windowMin = 50): number {
  const today = Math.floor(now / 86_400_000) * 86_400_000;
  let nearest = Infinity;
  // The local evening can fall on the next UTC day, so check either side.
  for (const day of [today - 86_400_000, today, today + 86_400_000]) {
    for (const t of sunEvents(day, lat, lon) ?? []) nearest = Math.min(nearest, Math.abs(now - t));
  }
  const k = Math.max(0, 1 - nearest / (windowMin * 60_000));
  // Ease in and out so the glow doesn't start or stop abruptly.
  return k * k * (3 - 2 * k);
}
