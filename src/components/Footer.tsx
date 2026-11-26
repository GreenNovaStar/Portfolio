import { content } from '../content';

export function Footer() {
  const { copyright, meta } = content;
  const host = meta.terminalUrl.replace('https://', '');

  return (
    <footer className="foot">
      <a className="shell" href={meta.terminalUrl} target="_blank" rel="noreferrer noopener">
        <span className="shell-bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="shell-body">
          <span className="shell-dim">Prefer a shell?</span>
          <span>
            <span className="shell-prompt">guest@brianyip.dev:~$</span> open {host}
            <span className="cursor" aria-hidden="true" />
          </span>
        </span>
      </a>
      <p className="copyright">{copyright.replace('{year}', String(new Date().getFullYear()))}</p>
    </footer>
  );
}
