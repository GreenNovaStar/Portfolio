import { content, type Project } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { Topology } from './Topology';

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
          {work.projects.map((project) =>
            project.feature ? (
              <FeatureCard key={project.name} project={project} />
            ) : (
              <ProjectCard key={project.name} project={project} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function CardHead({ project }: { project: Project }) {
  return (
    <div className="ptop">
      <span className="picon" aria-hidden="true">
        <Icon name={project.icon} />
      </span>
      <span className="yr">{project.year}</span>
    </div>
  );
}

function CardLink({ project }: { project: Project }) {
  return (
    <a className="link" href={project.href} aria-label={`${project.linkLabel}: ${project.name}`}>
      {project.linkLabel}
      <Icon name="arrowUpRight" />
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="card">
      <span className="glow" aria-hidden="true" />
      <CardHead project={project} />
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
      <CardLink project={project} />
    </Reveal>
  );
}

function FeatureCard({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="card feature">
      <span className="glow" aria-hidden="true" />
      <div className="fbody">
        <CardHead project={project} />
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
        <CardLink project={project} />
      </div>
      <div className="fviz" aria-hidden="true">
        <Topology />
      </div>
    </Reveal>
  );
}
