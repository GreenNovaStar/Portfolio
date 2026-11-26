import { useEffect, useRef, useState } from 'react';
import { Moon } from './Moon';

interface Comet {
  id: number;
  top: number;
  left: number;
  angle: number;
  length: number;
  distance: number;
}

interface Pass {
  id: number;
  /** Page offset in px, so the pass scrolls with the content. */
  top: number;
  rightward: boolean;
  drift: number;
  duration: number;
  /** Dots in the pass: 1 normally, more for a freshly launched train. */
  count: number;
  /** Seconds between dots in a train. */
  gap: number;
}

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Scatter stars over the viewport plus the extra height the layers travel
 * while parallaxing. Each star is one box-shadow (color comes from the CSS
 * `color`), so a whole layer is a single 1px element.
 */
function starShadows(perPixel: number, spreads: readonly number[], drift: number): string {
  const width = window.innerWidth;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const height = window.innerHeight + Math.max(400, scrollable * drift + 100);
  const count = Math.round(width * height * perPixel);
  const stars: string[] = [];
  for (let i = 0; i < count; i++) {
    const spread = spreads[Math.floor(Math.random() * spreads.length)];
    stars.push(`${Math.round(rand(0, width))}px ${Math.round(rand(0, height))}px 0 ${spread}px`);
  }
  return stars.join(',');
}

/** [x, y, spread]: x/y in 0–1 across the shape, spread is brightness. */
type ShapeStar = readonly [number, number, number];

interface Constellation {
  name: string;
  /** Width in px of the 0–1 box. */
  size: number;
  stars: readonly ShapeStar[];
}

// Rough proportions, as seen from the northern hemisphere (Crux from the south).
const CONSTELLATIONS: readonly Constellation[] = [
  {
    name: 'Orion',
    size: 150,
    stars: [
      [0.15, 0.1, 1.2], // Betelgeuse
      [0.75, 0.15, 0.9], // Bellatrix
      [0.45, 0, 0.5], // Meissa
      [0.36, 0.5, 0.9], // Alnitak
      [0.48, 0.46, 0.9], // Alnilam
      [0.6, 0.42, 0.9], // Mintaka
      [0.25, 0.92, 0.8], // Saiph
      [0.85, 0.86, 1.2], // Rigel
    ],
  },
  {
    name: 'Big Dipper',
    size: 210,
    stars: [
      [1, 0.1, 1], // Dubhe
      [0.98, 0.45, 0.9], // Merak
      [0.74, 0.5, 0.8], // Phecda
      [0.71, 0.26, 0.6], // Megrez
      [0.49, 0.22, 1], // Alioth
      [0.28, 0.18, 0.9], // Mizar
      [0.03, 0.36, 0.9], // Alkaid
    ],
  },
  {
    name: 'Cassiopeia',
    size: 150,
    stars: [
      [0, 0.25, 0.8],
      [0.25, 0.65, 0.9],
      [0.5, 0.38, 1],
      [0.76, 0.72, 0.9],
      [1, 0.3, 0.8],
    ],
  },
  {
    name: 'Southern Cross',
    size: 100,
    stars: [
      [0.5, 0, 1], // Gacrux
      [0.56, 1, 1.2], // Acrux
      [0.12, 0.42, 1], // Mimosa
      [0.88, 0.5, 0.7], // Delta Crucis
      [0.7, 0.74, 0.4], // Epsilon Crucis
    ],
  },
  {
    name: 'Pleiades',
    size: 46,
    stars: [
      [0.15, 0.35, 0.6],
      [0.4, 0.15, 0.8],
      [0.55, 0.4, 0.9],
      [0.75, 0.25, 0.6],
      [0.45, 0.62, 0.7],
      [0.85, 0.65, 0.6],
      [0.25, 0.75, 0.5],
    ],
  },
];

/**
 * One constellation per visit, as an easter egg among the near stars. It's
 * placed in the upper part of the screen so it's visible without scrolling,
 * and tilted a little so it reads as found rather than drawn.
 */
function constellationShadows(): string {
  const shape = CONSTELLATIONS[Math.floor(Math.random() * CONSTELLATIONS.length)];
  const size = shape.size;
  const cx = rand(size, Math.max(size, window.innerWidth - size));
  const cy = rand(size * 0.6, Math.max(size, window.innerHeight * 0.6));
  const tilt = (rand(-25, 25) * Math.PI) / 180;
  const cos = Math.cos(tilt);
  const sin = Math.sin(tilt);
  return shape.stars
    .map(([x, y, spread]) => {
      const dx = (x - 0.5) * size;
      const dy = (y - 0.5) * size;
      const px = Math.round(cx + dx * cos - dy * sin);
      const py = Math.round(cy + dx * sin + dy * cos);
      return `${px}px ${py}px 0 ${spread}px`;
    })
    .join(',');
}

function makeField() {
  return {
    // Mostly pinpricks with a few slightly larger ones.
    far: starShadows(1 / 7000, [0, 0, 0, 0, 0.4], 0.05),
    near: `${starShadows(1 / 38000, [0.3, 0.5, 0.8], 0.12)},${constellationShadows()}`,
  };
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function makeComet(id: number): Comet {
  // Head toward the lower right or lower left, starting in the upper part of
  // the screen so the streak stays mostly on-screen.
  const rightward = Math.random() < 0.5;
  return {
    id,
    top: rand(5, 45),
    left: rightward ? rand(5, 55) : rand(45, 95),
    angle: rightward ? rand(15, 35) : rand(145, 165),
    length: rand(90, 160),
    distance: rand(220, 420),
  };
}

function makePass(id: number): Pass {
  return {
    id,
    top: window.scrollY + (rand(8, 70) / 100) * window.innerHeight,
    rightward: Math.random() < 0.5,
    drift: rand(-15, 15),
    duration: rand(30, 42),
    // Now and then a batch that's just been launched, still flying nose to
    // tail before spreading out to their orbits.
    count: Math.random() < 1 / 6 ? Math.round(rand(5, 8)) : 1,
    gap: rand(1.1, 1.6),
  };
}

/**
 * Background starfield: two layers of randomly scattered stars that drift at
 * different speeds as the page scrolls (parallax), with one hidden constellation
 * among the near stars, tonight's moon, plus an occasional shooting star. The first
 * comet comes 10–25s after load so a short visit can still catch one; after
 * that they're rare. Dispatch a `comet` event on window to launch one.
 *
 * Satellites are the slow, steady counterpart (a nod to Amazon Leo): one dot
 * drifting across the whole sky with a brief flare halfway. They're more
 * frequent than comets, and the first comes early in a visit; now and then a
 * pass is a train of several in a line. They sit in a
 * page-sized layer rather than the fixed sky, so they scroll with the content
 * instead of hanging on the screen while the text slides past.
 */
export function Sky() {
  const ref = useRef<HTMLDivElement>(null);
  const [field, setField] = useState<{ far: string; near: string } | null>(null);
  const [comets, setComets] = useState<Comet[]>([]);
  const [passes, setPasses] = useState<Pass[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    setField(makeField());
    // Re-scatter only when the width changes, so a phone's address bar
    // showing and hiding doesn't reshuffle the sky.
    let width = window.innerWidth;
    let timer = 0;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (window.innerWidth === width) return;
        width = window.innerWidth;
        setField(makeField());
      }, 200);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion()) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty('--sy', String(window.scrollY));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const launch = () => setComets((c) => [...c, makeComet(nextId.current++)]);

    let timer = 0;
    const schedule = (delayMs: number) => {
      timer = window.setTimeout(() => {
        if (!document.hidden && !reducedMotion()) launch();
        schedule(rand(60_000, 180_000));
      }, delayMs);
    };
    schedule(rand(10_000, 25_000));

    // On request (the palette's `comet` command) it runs even with reduced
    // motion, since the visitor asked for it explicitly.
    window.addEventListener('comet', launch);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('comet', launch);
    };
  }, []);

  useEffect(() => {
    let timer = 0;
    const schedule = (delayMs: number) => {
      timer = window.setTimeout(() => {
        if (!document.hidden && !reducedMotion()) {
          // One at a time keeps it a quiet detail rather than traffic.
          setPasses((p) => (p.length ? p : [makePass(nextId.current++)]));
        }
        schedule(rand(45_000, 90_000));
      }, delayMs);
    };
    schedule(rand(3_000, 8_000));
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="sky" ref={ref} aria-hidden="true">
        {field && (
          <>
            <span className="stars stars-far" style={{ boxShadow: field.far }} />
            <span className="stars stars-near" style={{ boxShadow: field.near }} />
          </>
        )}
        <Moon />
        {comets.map((c) => (
          <span
            key={c.id}
            className="comet"
            style={
              {
                top: `${c.top}%`,
                left: `${c.left}%`,
                width: `${c.length}px`,
                '--angle': `${c.angle}deg`,
                '--dist': `${c.distance}px`,
              } as React.CSSProperties
            }
            onAnimationEnd={() => setComets((all) => all.filter((x) => x.id !== c.id))}
          />
        ))}
      </div>
      <div className="sky-page" aria-hidden="true">
        {passes.flatMap((p) =>
          Array.from({ length: p.count }, (_, i) => (
            <span
              key={`${p.id}-${i}`}
              className="satellite"
              style={
                {
                  top: `${p.top}px`,
                  left: p.rightward ? '-1%' : '101%',
                  animationDelay: `${i * p.gap}s`,
                  '--dx': p.rightward ? '102vw' : '-102vw',
                  '--dy': `${p.drift}vh`,
                  '--dur': `${p.duration}s`,
                } as React.CSSProperties
              }
              onAnimationEnd={
                i === p.count - 1
                  ? () => setPasses((all) => all.filter((x) => x.id !== p.id))
                  : undefined
              }
            />
          )),
        )}
      </div>
    </>
  );
}
