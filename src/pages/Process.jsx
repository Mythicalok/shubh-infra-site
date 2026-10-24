import { PROCESS_LONG } from '../data/services.js';
import { PageHero, CtaBanner } from '../components/Common.jsx';

export default function Process() {
  return (
    <>
      <PageHero
        eyebrow="OUR PROCESS"
        title="Five steps. No guesswork."
        intro="A clear, stage-by-stage way of working — so you always know what is happening and what comes next."
      />
      <section className="section">
        <div className="container narrow">
          <ol className="steps-long">
            {PROCESS_LONG.map(([t, d], i) => (
              <li key={t} className="reveal">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBanner
        title="Ready for step one?"
        text="A consultation and site visit costs nothing — and it usually saves a lot."
        primary={['Book a Free Consultation', '/contact']}
      />
    </>
  );
}
