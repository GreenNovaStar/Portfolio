import { useState } from 'react';
import { content } from '../content';

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
        <div className="sec-tag">experience</div>
        <p className="sec-intro">{experience.intro}</p>

        <div className="timeline">
          {shown.map((item) => (
            <div className="tl-item" key={`${item.team}-${item.when}`}>
              <div className="when">{item.when}</div>
              <div>
                <p className="who2">{item.team}</p>
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
              {expanded ? '- view less' : `+ view ${hiddenCount} more`}
            </button>
          )}
        </div>

        <div className="glance skills">
          <div className="filename"># toolbox.yml</div>
          {skills.groups.map((group) => (
            <div className="kv" key={group.label}>
              <span className="k">{group.label.toLowerCase().replace(/ & /g, '_')}</span>
              <span className="v">{group.items.join(' · ')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
