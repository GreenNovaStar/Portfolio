import { content } from '../content';
import { useActiveSection } from '../hooks/useActiveSection';
import { GitHubIcon, LinkedInIcon, MailIcon, TerminalIcon } from './Icons';
import { LocalTime } from './LocalTime';

const sections = ['about', 'work', 'projects', 'education'] as const;

const external = { target: '_blank', rel: 'noreferrer noopener' } as const;

export function Sidebar() {
  const { meta } = content;
  const [active, pin] = useActiveSection(sections);

  return (
    <header className="sidebar">
      <div>
        {meta.photo && (
          <div className="avatar">
            <img className="photo" src={meta.photo} alt={meta.name} width={88} height={88} />
            {/* A small satellite on an orbit around the photo, for Amazon Leo. */}
            <span className="orbit" aria-hidden="true" />
            <span className="orbit-path" aria-hidden="true">
              <span className="sat" />
            </span>
          </div>
        )}
        <h1 className="name">{meta.name}</h1>
        <p className="title">{meta.title}</p>
        <p className="tagline">{meta.tagline}</p>
        <LocalTime />

        <nav className="side-nav" aria-label="Sections">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : undefined}
              onClick={() => pin(id)}
            >
              <span className="bar" aria-hidden="true" />
              {id}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="kbd-hint"
          onClick={() => window.dispatchEvent(new Event('open-palette'))}
        >
          press <kbd>/</kbd> to navigate
        </button>
      </div>

      <div className="side-foot">
        <a className="resume" href={meta.resumeHref} {...external}>
          View resume
        </a>
        <div className="socials">
          <a href="https://github.com/GreenNovaStar" aria-label="GitHub" {...external}>
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/brian-yip-dev" aria-label="LinkedIn" {...external}>
            <LinkedInIcon />
          </a>
          <a href={`mailto:${meta.email}`} aria-label="Email">
            <MailIcon />
          </a>
          <a href={meta.terminalUrl} aria-label="Terminal site" {...external}>
            <TerminalIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
