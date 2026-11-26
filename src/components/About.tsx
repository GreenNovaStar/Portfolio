import { content } from '../content';

export function About() {
  return (
    <section id="about" aria-label="About">
      <h2 className="sec-label">About</h2>
      {content.intro.map((para) => (
        <p key={para}>{para}</p>
      ))}
    </section>
  );
}
