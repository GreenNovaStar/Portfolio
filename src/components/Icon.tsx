import type { IconName } from '../content';

interface IconProps {
  name: IconName;
  className?: string;
}

/** Inline SVG icons — no icon-font dependency, themeable via currentColor. */
export function Icon({ name, className }: IconProps) {
  const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'orbit':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
        </svg>
      );
    case 'pulse':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M3 12h4l3 8 4-16 3 8h4" />
        </svg>
      );
    case 'node':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={1.8} aria-hidden="true">
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case 'arrow':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2} aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case 'arrowUpRight':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2} aria-hidden="true">
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      );
    case 'download':
      return (
        <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={1.8} aria-hidden="true">
          <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.13-.29-.52-1.47.1-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.75.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05C20.5 8.59 21 11.16 21 14.13V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21H9z" />
        </svg>
      );
    default:
      return null;
  }
}
