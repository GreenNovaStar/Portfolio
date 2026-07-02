import { useState } from 'react';
import { content } from '../content';
import { Reveal } from './Reveal';

export function Experience() {
  const { experience } = content;
  const { skills, timeline, visibleCount } = experience;
  const [expanded, setExpanded] = useState(false);

  const hasMore = timeline.length > visibleCount;
  const shown = expanded || !hasMore ? timeline : timeline.slice(0, visibleCount);
  const hiddenCount = timeline.length - visibleCount;

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
            {shown.map((item) => (
              <div className="tl-item" key={`${item.team}-${item.when}`}>
                <div className="when">{item.when}</div>
                <div>
                  <p className="who2">
                    {item.team}
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </p>
                  <div className="rol">
                    {item.role} · {item.location}
                  </div>
                  <p>{item.blurb}</p>
                </div>
              </div>
            ))}
            {hasMore && (
              <button
                type="button"
                className="tl-more"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
              >
                {expanded ? 'View less' : `View ${hiddenCount} more`}
                <span className={`tl-more-chevron${expanded ? ' up' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
            )}
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
