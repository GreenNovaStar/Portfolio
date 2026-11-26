import { useCallback, useEffect, useRef, useState } from 'react';

// A section becomes active once its top passes a line this far from the top
// of the viewport. A fixed offset (rather than a fraction of the viewport)
// keeps short sections like About selectable on tall screens.
const OFFSET_PX = 160;

/**
 * Returns the id of the section the reader is on, plus a `pin` function for
 * nav clicks.
 *
 * Short sections near the end of the page can't scroll up to the line, so
 * over the last stretch of scrolling the line slides down toward the bottom
 * of the viewport. That lets each trailing section take its turn instead of
 * the last one winning as soon as the page bottoms out.
 */
export function useActiveSection(ids: readonly string[]): [string, (id: string) => void] {
  const [active, setActive] = useState(ids[0]);
  // A clicked nav target stays active until the reader scrolls on their own;
  // otherwise a section that can't reach the top would lose to its neighbor.
  const pinned = useRef<string | null>(null);

  const pin = useCallback((id: string) => {
    pinned.current = id;
    setActive(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (pinned.current) return;
      if (window.scrollY < 16) {
        setActive(ids[0]);
        return;
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const remaining = maxScroll - window.scrollY;
      const slide = window.innerHeight * 0.6;
      const progress = remaining < slide ? 1 - remaining / slide : 0;
      const line = OFFSET_PX + (window.innerHeight * 0.75 - OFFSET_PX) * progress;

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    const unpin = () => {
      if (!pinned.current) return;
      pinned.current = null;
      onScroll();
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('wheel', unpin, { passive: true });
    window.addEventListener('touchmove', unpin, { passive: true });
    window.addEventListener('keydown', unpin);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('wheel', unpin);
      window.removeEventListener('touchmove', unpin);
      window.removeEventListener('keydown', unpin);
    };
  }, [ids]);

  return [active, pin];
}
