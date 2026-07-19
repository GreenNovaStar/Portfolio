import { content } from '../content';

export function Hero() {
  const { hero, meta } = content;

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{hero.availability}</span>

          <h1 className="display">{hero.title}</h1>

          <p className="intro">
            {hero.intro.map((seg, i) => (typeof seg === 'string' ? seg : <b key={i}>{seg.b}</b>))}
          </p>
        </div>

        {meta.photo && (
          <img
            className="hero-photo"
            src={meta.photo}
            alt={meta.name}
            width={168}
            height={168}
          />
        )}
      </div>
    </section>
  );
}
