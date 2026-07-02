import { content } from '../content';
import { useTheme } from '../hooks/useTheme';

export function Nav() {
  const { toggle } = useTheme();
  const { meta, nav } = content;

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label={`${meta.name}, home`}>
          <span className="mark" aria-hidden="true">
            {meta.initials}
          </span>
          <span className="who">
            <b>{meta.name}</b>
            <span>{meta.handle}</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className="toggle"
            type="button"
            onClick={toggle}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            <svg
              className="sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <svg
              className="moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
          <a className="btn btn-ghost nav-cta" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
