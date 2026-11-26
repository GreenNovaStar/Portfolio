import { useEffect, useMemo, useRef, useState } from 'react';
import { content } from '../content';
import { activeShower } from '../meteorShowers';

interface Command {
  name: string;
  hint: string;
  run: () => void;
}

const scrollTo = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
const open = (href: string) => () => {
  window.open(href, '_blank', 'noopener,noreferrer');
};

function buildCommands(): Command[] {
  const { meta } = content;
  const shower = activeShower();
  return [
    { name: 'about', hint: 'jump to About', run: scrollTo('about') },
    { name: 'work', hint: 'jump to Work', run: scrollTo('work') },
    { name: 'projects', hint: 'jump to Projects', run: scrollTo('projects') },
    { name: 'education', hint: 'jump to Education', run: scrollTo('education') },
    { name: 'resume', hint: 'open resume (PDF)', run: open(meta.resumeHref) },
    { name: 'github', hint: 'open GitHub', run: open('https://github.com/GreenNovaStar') },
    { name: 'linkedin', hint: 'open LinkedIn', run: open('https://linkedin.com/in/brian-yip-dev') },
    {
      name: 'email',
      hint: meta.email,
      run: () => {
        window.location.href = `mailto:${meta.email}`;
      },
    },
    { name: 'terminal', hint: 'open terminal.brianyip.dev', run: open(meta.terminalUrl) },
    {
      name: 'comet',
      hint: shower ? `the ${shower} peak tonight` : 'make a wish',
      run: () => window.dispatchEvent(new Event('comet')),
    },
  ];
}

/**
 * A small shell-style palette, opened with "/" or Ctrl/Cmd+K, for jumping
 * around the page. A nod to the terminal site rather than a replacement.
 */
export function CommandPalette() {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const commands = useMemo(buildCommands, []);

  const matches = commands.filter((c) => c.name.startsWith(query.trim().toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      if ((e.key === '/' && !typing) || (e.key === 'k' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-palette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-palette', onOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelected(0);
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => setSelected(0), [query]);

  if (!isOpen) return null;

  const run = (command: Command | undefined) => {
    if (!command) return;
    setOpen(false);
    command.run();
  };

  return (
    <div className="palette-backdrop" onMouseDown={() => setOpen(false)}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <label className="palette-input">
          <span className="shell-prompt">guest@brianyip.dev:~$</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelected((i) => Math.min(i + 1, matches.length - 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelected((i) => Math.max(i - 1, 0));
              } else if (e.key === 'Enter') {
                run(matches[selected]);
              }
            }}
            aria-label="Command"
            spellCheck={false}
            autoComplete="off"
          />
        </label>
        <ul className="palette-list" role="listbox">
          {matches.map((c, i) => (
            <li
              key={c.name}
              role="option"
              aria-selected={i === selected}
              className={i === selected ? 'selected' : undefined}
              onMouseEnter={() => setSelected(i)}
              onClick={() => run(c)}
            >
              <span>{c.name}</span>
              <span className="palette-hint">{c.hint}</span>
            </li>
          ))}
          {matches.length === 0 && (
            <li className="palette-empty">command not found: {query.trim()}</li>
          )}
        </ul>
        <div className="palette-foot">↑↓ to move · enter to run · esc to close</div>
      </div>
    </div>
  );
}
