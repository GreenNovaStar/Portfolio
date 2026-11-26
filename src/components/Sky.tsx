import { useEffect, useRef, useState } from 'react';

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
  top: number;
  rightward: boolean;
  drift: number;
  duration: number;
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

function makeField() {
  return {
    // Mostly pinpricks with a few slightly larger ones.
    far: starShadows(1 / 7000, [0, 0, 0, 0, 0.4], 0.05),
    near: starShadows(1 / 38000, [0.3, 0.5, 0.8], 0.12),
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
    top: rand(8, 70),
    rightward: Math.random() < 0.5,
    drift: rand(-15, 15),
    duration: rand(30, 42),
  };
}

/**
 * Background starfield: two layers of randomly scattered stars that drift at
 * different speeds as the page scrolls (parallax), plus an occasional shooting star. The first
 * comet comes 10–25s after load so a short visit can still catch one; after
 * that they're rare. Dispatch a `comet` event on window to launch one.
 *
 * Satellites are the slow, steady counterpart (a nod to Amazon Leo): one dot
 * drifting across the whole sky with a brief flare halfway. They're more
 * frequent than comets, and the first comes early in a visit.
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
    <div className="sky" ref={ref} aria-hidden="true">
      {field && (
        <>
          <span className="stars stars-far" style={{ boxShadow: field.far }} />
          <span className="stars stars-near" style={{ boxShadow: field.near }} />
        </>
      )}
      {passes.map((p) => (
        <span
          key={p.id}
          className="satellite"
          style={
            {
              top: `${p.top}%`,
              left: p.rightward ? '-1%' : '101%',
              '--dx': p.rightward ? '102vw' : '-102vw',
              '--dy': `${p.drift}vh`,
              '--dur': `${p.duration}s`,
            } as React.CSSProperties
          }
          onAnimationEnd={() => setPasses((all) => all.filter((x) => x.id !== p.id))}
        />
      ))}
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
  );
}
