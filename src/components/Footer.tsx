import { content } from '../content';
import { Icon } from './Icon';

export function Footer() {
  const { footer } = content;

  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <span className="cp">{footer.copyright}</span>
        <div className="foot-links">
          {footer.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              {...(social.href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer noopener' }
                : {})}
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
