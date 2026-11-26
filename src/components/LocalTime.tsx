import { useEffect, useState } from 'react';
import { content } from '../content';

const format = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: content.meta.timeZone,
    hour: 'numeric',
    minute: '2-digit',
  }).format(date);

/** "11:42 PM in Northridge, CA", kept current to the minute. */
export function LocalTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // Tick on the minute boundary, then every minute after.
    let interval = 0;
    const timeout = window.setTimeout(
      () => {
        setNow(new Date());
        interval = window.setInterval(() => setNow(new Date()), 60_000);
      },
      60_000 - (Date.now() % 60_000),
    );
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <p className="local-time">
      <span className="local-dot" aria-hidden="true" />
      <time dateTime={now.toISOString()}>{format(now)}</time> in {content.meta.location}
    </p>
  );
}
