import { content, type Project } from '../content';

export function Projects() {
  const { work } = content;

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="sec-tag">projects</div>
        <p className="sec-intro">{work.intro}</p>

        {work.projects.map((project) => (
          <Repo key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function Repo({ project }: { project: Project }) {
  return (
    <article className="repo">
      <div className="repo-head">
        {project.link ? (
          <a
            className="repo-name"
            href={project.link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {project.name}
          </a>
        ) : (
          <span className="repo-name">{project.name}</span>
        )}
        <span className="repo-year">{project.year}</span>
      </div>
      <div className="repo-role">{project.role}</div>
      <p>{project.blurb}</p>
      <div className="repo-meta">
        <span className="lang">{project.stack[0]}</span>
        {project.stack.slice(1).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
        {project.link && (
          <a href={project.link.href} target="_blank" rel="noreferrer noopener">
            {project.link.label} ↗
          </a>
        )}
      </div>
    </article>
  );
}
