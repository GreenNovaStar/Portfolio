import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORE = 'by-theme';

function currentTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' ? 'light' : 'dark';
}

/**
 * Reads/controls the [data-theme] attribute on <html>. The initial theme is
 * already applied by the inline script in index.html (URL param > localStorage
 * > OS preference) to avoid a flash, so here we just mirror and toggle it.
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const apply = useCallback((next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
    try {
      localStorage.setItem(STORE, next);
    } catch {
      /* ignore write failures (private mode, etc.) */
    }
  }, []);

  const toggle = useCallback(() => {
    apply(currentTheme() === 'light' ? 'dark' : 'light');
  }, [apply]);

  // Follow OS changes only when the user hasn't chosen explicitly.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(STORE);
      } catch {
        /* ignore */
      }
      const param = new URLSearchParams(window.location.search).get('theme');
      if (saved || param === 'light' || param === 'dark') return;
      apply(e.matches ? 'light' : 'dark');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [apply]);

  return { theme, toggle };
}
