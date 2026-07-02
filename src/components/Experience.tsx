import { content } from '../content';
import { Reveal } from './Reveal';

export function Experience() {
  const { experience } = content;
  const { skills } = experience;

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="sec-tag">{experience.tag}</div>
            <h2 className="sec-title">{experience.title}</h2>
          </div>
          <p>{experience.intro}</p>
        </Reveal>

        <div className="xp">
          <Reveal className="timeline">
            {experience.timeline.map((item) => (
              <div className="tl-item" key={`${item.org}-${item.when}`}>
                <div className="when">{item.when}</div>
                <div>
                  <p className="who2">
                    {item.org}
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </p>
                  <div className="rol">{item.role}</div>
                  <p>{item.blurb}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal as="aside" className="skills-card glass">
            <h3>{skills.title}</h3>
            <p className="muted">{skills.subtitle}</p>
            {skills.groups.map((group) => (
              <div className="skgroup" key={group.label}>
                <div className="lab">{group.label}</div>
                <div className="row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
