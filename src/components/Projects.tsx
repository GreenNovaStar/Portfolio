import { content } from '../content';
import { Chips } from './Chips';

export function Projects() {
  return (
    <section id="projects" aria-label="Projects">
      <h2 className="sec-label">Projects</h2>
      <ol className="entries">
        {content.projects.map((project) => (
          <li className="entry" key={project.name}>
            <span className="when">{project.year}</span>
            <div>
              <h3>
                {project.link ? (
                  <a
                    className="entry-link"
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {project.name} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p>{project.blurb}</p>
              <Chips items={project.stack} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
