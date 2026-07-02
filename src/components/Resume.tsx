import { content } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Resume() {
  const { resume } = content;
  const isFile = resume.downloadHref.startsWith('/') || resume.downloadHref.startsWith('http');

  return (
    <section id="resume" className="section">
      <div className="wrap">
        <Reveal className="resume-card glass">
          <span className="glow" aria-hidden="true" />
          <div className="resume-copy">
            <div className="sec-tag">{resume.tag}</div>
            <h2 className="sec-title">{resume.title}</h2>
            <p className="resume-intro">{resume.intro}</p>
            <a
              className="btn btn-primary"
              href={resume.downloadHref}
              {...(isFile ? { download: '' } : {})}
            >
              <Icon name="download" />
              {resume.downloadLabel}
            </a>
          </div>

          <ul className="resume-highlights">
            {resume.highlights.map((item) => (
              <li className="kv" key={item.k}>
                <span className="k">{item.k}</span>
                <span className="v">{item.v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
