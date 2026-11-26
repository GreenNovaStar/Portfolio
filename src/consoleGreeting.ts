import { content } from './content';

/** A hello for anyone who opens devtools. Runs once from main.tsx. */
export function greetConsole(): void {
  const accent = 'color:#b69cff;font-weight:600';
  const dim = 'color:#a19e99';
  const art = [
    ' ____  _   _ ',
    '| __ )\ \ / /',
    '|  _ \ \ V / ',
    '| |_) | | |  ',
    '|____/  |_|  ',
  ].join('\n');

  console.log(`%c${art}`, `${accent};font-family:monospace`);
  console.log(
    `%chi, curious one.%c\nPress / on the page for a command palette, or try the shell at ${content.meta.terminalUrl}\nSay hello: ${content.meta.email}`,
    accent,
    dim,
  );
}
