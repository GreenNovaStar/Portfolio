import { content } from '../content';
import { Reveal } from './Reveal';

export function Hero() {
  const { hero, meta } = content;

  return (
    <section className="hero hero-center">
      <div className="wrap">
        <Reveal className="hero-photo" aria-hidden={meta.photo ? undefined : true}>
          {meta.photo ? (
            <img src={meta.photo} alt={meta.name} width={120} height={120} />
          ) : (
            <span className="hero-photo-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21v-1a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7v1" />
              </svg>
            </span>
          )}
        </Reveal>

        <Reveal className="eyebrow">
          <span className="status-dot" aria-hidden="true" /> {hero.availability}
        </Reveal>

        <Reveal as="h1" className="display">
          {hero.titleLead}
          <br />
          <span className="grad-text">{hero.titleGradient}</span>
        </Reveal>

        <Reveal as="p" className="intro">
          {hero.intro.map((seg, i) => (typeof seg === 'string' ? seg : <b key={i}>{seg.b}</b>))}
        </Reveal>

        <Reveal className="hero-meta">
          {hero.stats.map((stat, i) => (
            <FragmentStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              withDivider={i < hero.stats.length - 1}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function FragmentStat({
  value,
  label,
  withDivider,
}: {
  value: string;
  label: string;
  withDivider: boolean;
}) {
  return (
    <>
      <div className="stat">
        <b>{value}</b>
        <span>{label}</span>
      </div>
      {withDivider && <div className="div" aria-hidden="true" />}
    </>
  );
}
