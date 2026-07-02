import { content } from '../content';

export function Footer() {
  const { footer, meta } = content;
  const copyright = footer.copyright.replace('{year}', String(new Date().getFullYear()));

  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <span className="cp">{copyright}</span>
        <a
          className="foot-terminal"
          href={meta.terminalUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          terminal.brianyip.dev ↗
        </a>
      </div>
    </footer>
  );
}
