const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders a bullet, turning `[text](url)` segments into external links. */
export function Note({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    parts.push(text.slice(last, match.index));
    parts.push(
      <a key={match.index} className="inline-link" href={href} target="_blank" rel="noreferrer noopener">
        {label}
      </a>,
    );
    last = match.index + whole.length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}
