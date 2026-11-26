import { content } from '../content';

export function Education() {
  const { education } = content;

  return (
    <section id="education" aria-label="Education">
      <h2 className="sec-label">Education</h2>
      <div className="entry">
        <span className="when">{education.when}</span>
        <div>
          <h3>
            {education.degree} <span className="at">· {education.school}</span>
          </h3>
          <p className="where">{education.detail}</p>
        </div>
      </div>
    </section>
  );
}
