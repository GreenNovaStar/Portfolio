import { content, type Project } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Projects() {
  const { work } = content;

  return (
    <section id="work" className="section">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="sec-tag">{work.tag}</div>
            <h2 className="sec-title">{work.title}</h2>
          </div>
          <p>{work.intro}</p>
        </Reveal>

        <div className="work-grid">
          {work.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="card">
      <span className="glow" aria-hidden="true" />
      <div className="ptop">
        <span className="picon" aria-hidden="true">
          <Icon name={project.icon} />
        </span>
        <span className="yr">{project.year}</span>
      </div>
      <h3>
        {project.name}
        {project.badge && <span className="badge">{project.badge}</span>}
      </h3>
      <div className="role">{project.role}</div>
      <p>{project.blurb}</p>
      <div className="stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </Reveal>
  );
}
