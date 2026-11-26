import { content } from '../content';
import { Chips } from './Chips';
import { Note } from './Note';
import { RoleIcon } from './Icons';

export function Experience() {
  return (
    <section id="work" aria-label="Work">
      <h2 className="sec-label">Work</h2>
      <ol className="entries timeline">
        {content.work.map((role, i) => (
          <li className={i === 0 ? 'entry current' : 'entry'} key={role.team}>
            <span className="node" aria-hidden="true">
              <RoleIcon name={role.icon} />
            </span>
            <span className="when">{role.when}</span>
            <div>
              <h3>
                {role.title} <span className="at">· {role.team}</span>
              </h3>
              <p className="where">{role.location}</p>
              <ul className="notes">
                {role.notes.map((note) => (
                  <li key={note}>
                    <Note text={note} />
                  </li>
                ))}
              </ul>
              <Chips items={role.stack} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
