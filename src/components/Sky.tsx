import { useEffect, useRef, useState } from 'react';

interface Comet {
  id: number;
  top: number;
  left: number;
  angle: number;
  length: number;
  distance: number;
}

const rand = (min: number, max: number) => min + Math.random() * (max - min);

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

/**
 * Background starfield: two star layers that drift at different speeds as
 * the page scrolls (parallax), plus an occasional shooting star. The first
 * comet comes 10–25s after load so a short visit can still catch one; after
 * that they're rare. Dispatch a `comet` event on window to launch one.
 */
export function Sky() {
  const ref = useRef<HTMLDivElement>(null);
  const [comets, setComets] = useState<Comet[]>([]);
  const nextId = useRef(0);

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

  return (
    <div className="sky" ref={ref} aria-hidden="true">
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
