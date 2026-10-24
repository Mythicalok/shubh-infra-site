import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services.js';
import { PageHero, CtaBanner } from '../components/Common.jsx';
import { waLink } from '../data/site.js';

export default function Services() {
  return (
    <>
      <PageHero eyebrow="OUR SERVICES" title="Everything your project needs, from plan to handover" intro="Ten focused services, one responsible team. Engage us for a single stage or the complete journey." />
      <section className="section">
        <div className="container grid-2 services-grid">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="card service-full reveal">
              <div className="eyebrow">{String(i + 1).padStart(2, '0')} / SERVICE</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="ticks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="btn-row">
                <Link className="btn btn-primary btn-sm" to="/contact">Discuss Your Project</Link>
                <a className="btn btn-outline btn-sm" href={waLink(`Hello, I'd like to discuss: ${s.title}`)} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner title="Not sure which service fits your project?" secondary={['Browse Projects', '/projects/residential']} />
    </>
  );
}
