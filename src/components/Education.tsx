import { content } from '../content';

export function Education() {
  const { education } = content;

  return (
    <section id="education" className="section">
      <div className="wrap">
        <div className="sec-tag">education</div>
        <div className="edu">
          <span className="edu-school">{education.school}</span>
          <span className="edu-degree">
            {education.degree} · {education.detail}
          </span>
        </div>
      </div>
    </section>
  );
}
