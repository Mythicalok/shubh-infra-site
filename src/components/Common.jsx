import { Link } from 'react-router-dom';
import { waLink } from '../data/site.js';

export function PageHero({ eyebrow, title, intro, back = true }) {
  return (
    <section className="page-hero">
      <div className="container">
        {back && (
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        )}
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center }) {
  return (
    <div className={`section-head reveal ${center ? 'center' : ''}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}

export function CtaBanner({ title, text, primary = ['Get Free Consultation', '/contact'], secondary }) {
  return (
    <section className="cta-banner">
      <div className="container reveal">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        <div className="btn-row center">
          <Link className="btn btn-teal" to={primary[1]}>
            {primary[0]}
          </Link>
          {secondary ? (
            secondary[1].startsWith('http') ? (
              <a className="btn btn-outline-light" href={secondary[1]} target="_blank" rel="noreferrer">
                {secondary[0]}
              </a>
            ) : (
              <Link className="btn btn-outline-light" to={secondary[1]}>
                {secondary[0]}
              </Link>
            )
          ) : (
            <a className="btn btn-outline-light" href={waLink()} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function FilterChips({ options, value, onChange }) {
  return (
    <div className="chips" role="tablist">
      {['All', ...options].map((o) => (
        <button key={o} className={`chip ${value === o ? 'on' : ''}`} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

export function ProjectCard({ p }) {
  return (
    <article className="card project-card reveal">
      <div className="card-img">
        <img src={p.image} alt={p.alt} loading="lazy" />
        <span className="badge">{p.kind}</span>
      </div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="tags">
          {p.categories.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export const Disclaimer = () => (
  <div className="disclaimer-box reveal">
    <h3>All images are original design concepts</h3>
    <p>
      Every visual in this gallery is a design concept or 3D visualization created by us — not a photograph of a completed
      client project. Your own design will be just as detailed.
    </p>
    <div className="btn-row center">
      <Link className="btn btn-primary" to="/contact">
        Get Free Consultation
      </Link>
      <a className="btn btn-outline" href={waLink()} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  </div>
);
