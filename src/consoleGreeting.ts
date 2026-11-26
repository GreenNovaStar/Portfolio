import { content } from './content';

/** A hello for anyone who opens devtools. Runs once from main.tsx. */
export function greetConsole(): void {
  const accent = 'color:#b69cff;font-weight:600';
  const dim = 'color:#a19e99';
  // String.raw keeps the backslashes literal; in a normal string a
  // backslash before a space is an escape that silently drops it.
  const art = String.raw`
 ____  _   _
| __ )\ \ / /
|  _ \ \ V /
| |_) | | |
|____/  |_|`.slice(1);

  console.log(`%c${art}`, `${accent};font-family:monospace`);
  console.log(
    `%chi, curious one.%c\nPress / on the page for a command palette, or try the shell at ${content.meta.terminalUrl}\nSay hello: ${content.meta.email}`,
    accent,
    dim,
  );
}
