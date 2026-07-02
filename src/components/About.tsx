import { content } from '../content';
import { Reveal } from './Reveal';

export function About() {
  const { about } = content;

  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="about">
          <Reveal className="about-copy">
            <div className="sec-tag">About</div>
            <p>
              {about.lead.map((seg, i) =>
                typeof seg === 'string' ? seg : (
                  <span className="hl" key={i}>
                    {seg.hl}
                  </span>
                ),
              )}
            </p>
            <p className="sub">{about.sub}</p>
            <div className="chips" aria-label="Areas of interest">
              {about.interests.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="aside" className="about-card glass">
            <h3>At a glance</h3>
            {about.glance.map((row) => (
              <div className="kv" key={row.k}>
                <span className="k">{row.k}</span>
                <span className="v">{row.v}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
