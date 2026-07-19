import { content } from '../content';

export function About() {
  const { about } = content;

  return (
    <section id="about" className="section">
      <div className="wrap">
        <a className="sec-tag" href="#about">about</a>
        <div className="about-copy">
          <p>{about.lead}</p>
          <p className="sub">{about.sub}</p>
        </div>

        <div className="glance" role="table" aria-label="At a glance">
          <div className="filename"># at-a-glance.yml</div>
          {about.glance.map((row) => (
            <div className="kv" key={row.k} role="row">
              <span className="k">{row.k.toLowerCase().replace(/ /g, '_')}</span>
              <span className="v">{row.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
