import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

let prefersReducedMotion = false;
if (typeof window !== 'undefined') {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

interface RevealProps {
  children: ReactNode;
  /** Element to render. Defaults to a <div>. */
  as?: ElementType;
  /** Stagger delay in ms, capped at 260ms to match the original design. */
  delay?: number;
  className?: string;
  /** Passthrough attributes (id, role, aria-*, style, etc.). */
  [key: string]: unknown;
}

/**
 * Fades + lifts its children into view on scroll using IntersectionObserver.
 * Honors prefers-reduced-motion by rendering fully visible immediately.
 */
export function Reveal({ children, as, delay = 0, className = '', ...rest }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style =
    delay && !prefersReducedMotion
      ? { transitionDelay: `${Math.min(delay, 260)}ms`, ...(rest.style as object) }
      : (rest.style as object | undefined);

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? ' in' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
      style={style}
    >
      {children}
    </Tag>
  );
}
