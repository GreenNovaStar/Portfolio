import { content } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function Hero() {
  const { hero, meta } = content;
  const card = hero.codeCard;

  return (
    <section className="hero">
      <div className="wrap">
        <Reveal className="eyebrow">
          <span className="status-dot" aria-hidden="true" /> {hero.availability}
        </Reveal>

        <div className="hero-grid">
          <div>
            <Reveal as="h1" className="display">
              {hero.titleLead}
              <br />
              <span className="grad-text">{hero.titleGradient}</span>
            </Reveal>

            <Reveal as="p" className="lede">
              {hero.lede.map((seg, i) =>
                typeof seg === 'string' ? seg : <b key={i}>{seg.b}</b>,
              )}
            </Reveal>

            <Reveal className="hero-actions">
              <a className="btn btn-primary" href="#work">
                View selected work
                <Icon name="arrow" />
              </a>
              <a className="btn btn-ghost" href={`mailto:${meta.email}`}>
                <Icon name="mail" />
                Email me
              </a>
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

          <Reveal
            className="glass"
            role="img"
            aria-label="Illustrative code snippet describing Brian Yip's focus areas"
          >
            <div className="term-head">
              <span className="dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="path">{card.path}</span>
            </div>
            <div className="term-body" aria-hidden="true">
              <span className="ln">
                <span className="c-com">{card.comment}</span>
              </span>
              <span className="ln">
                <span className="c-key">class</span> <span className="c-fn">{card.typeName}</span>:
              </span>
              {card.fields.map((f) => (
                <span className="ln" key={f.key}>
                  {'  '}
                  <span className="c-key">{f.key}</span> = <span className="c-str">{f.value}</span>
                </span>
              ))}
              <span className="ln">&nbsp;</span>
              <span className="ln">
                <span className="c-fn">{card.call}</span> <span className="cursor" />
              </span>
            </div>
          </Reveal>
        </div>
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
