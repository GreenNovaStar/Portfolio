const SYNODIC_DAYS = 29.530588853;
// A known new moon (2000-01-06 18:14 UTC) to count lunations from.
const NEW_MOON_EPOCH = Date.UTC(2000, 0, 6, 18, 14);

/** Fraction of the way through the current lunation: 0 new, 0.5 full. */
function moonAge(date: Date): number {
  const days = (date.getTime() - NEW_MOON_EPOCH) / 86_400_000;
  return (((days / SYNODIC_DAYS) % 1) + 1) % 1;
}

/**
 * SVG path for the lit part of a moon of radius r centered on 0,0. The lit
 * side follows the limb on one half and comes back along the terminator, an
 * ellipse whose width tracks how far the phase is from quarter.
 */
function litPath(age: number, r: number): string {
  const k = Math.cos(2 * Math.PI * age);
  const rx = Math.abs(k) * r;
  const waxing = age < 0.5;
  // Northern-hemisphere view: waxing is lit on the right.
  const limbSweep = waxing ? 1 : 0;
  const crescent = k > 0;
  const termSweep = waxing === crescent ? 0 : 1;
  return `M 0 ${-r} A ${r} ${r} 0 0 ${limbSweep} 0 ${r} A ${rx} ${r} 0 0 ${termSweep} 0 ${-r} Z`;
}

/** Tonight's moon, drawn at its real phase. */
export function Moon() {
  const age = moonAge(new Date());
  const r = 12;
  return (
    <svg className="moon" viewBox="-14 -14 28 28" width="28" height="28">
      {/* Earthshine keeps the dark part faintly visible. */}
      <circle r={r} className="moon-dark" />
      <path d={litPath(age, r)} className="moon-lit" />
    </svg>
  );
}
