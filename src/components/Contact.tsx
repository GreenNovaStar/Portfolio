import { content } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Contact() {
  const { contact, meta } = content;

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal className="contact-card glass">
          <span className="glow" aria-hidden="true" />
          <h2>
            {contact.titleLead}
            <br />
            <span className="grad-text">{contact.titleGradient}</span>
          </h2>
          <p>{contact.blurb}</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${meta.email}`}>
              <Icon name="mail" />
              {meta.email}
            </a>
            <a className="btn btn-ghost" href={meta.resumeHref}>
              Download résumé
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
