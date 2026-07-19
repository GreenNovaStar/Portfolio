import { content } from '../content';

export function Contact() {
  const { contact } = content;

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="sec-tag">contact</div>
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
                <span className="cm-label">{method.label.toLowerCase()}</span>
                <span className="cm-value">{method.value}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
