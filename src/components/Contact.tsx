import { content } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Contact() {
  const { contact } = content;

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal className="contact-card glass">
          <span className="glow" aria-hidden="true" />
          <div className="sec-tag" style={{ justifyContent: 'center' }}>
            {contact.tag}
          </div>
          <h2>
            {contact.titleLead}
            <br />
            <span className="grad-text">{contact.titleGradient}</span>
          </h2>
          <p>{contact.blurb}</p>

          <div className="contact-methods">
            {contact.methods.map((method) => {
              const external = method.href.startsWith('http');
              return (
                <a
                  key={method.label}
                  className="contact-method"
                  href={method.href}
                  aria-label={`${method.label}: ${method.value}`}
                  {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  <span className="cm-icon" aria-hidden="true">
                    <Icon name={method.icon} />
                  </span>
                  <span className="cm-text">
                    <span className="cm-label">{method.label}</span>
                    <span className="cm-value">{method.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
