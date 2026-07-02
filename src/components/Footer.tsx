import { content } from '../content';

export function Footer() {
  const { footer, meta } = content;

  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <span className="cp">{footer.copyright}</span>
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
