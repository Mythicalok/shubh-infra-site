import { Link } from 'react-router-dom';
import { SERVICES, WHY, PROCESS_SHORT, FAQS } from '../data/services.js';
import { PROJECTS } from '../data/projects.js';
import { MARQUEE, SITE, telLink, waLink } from '../data/site.js';
import { SectionHead, ProjectCard } from '../components/Common.jsx';
import InquiryForm from '../components/InquiryForm.jsx';
import FaqList from '../components/FaqList.jsx';

export default function Home() {
  const loop = [...MARQUEE, ...MARQUEE];
  return (
    <>
      <section className="hero" style={{ backgroundImage: "linear-gradient(105deg, rgba(5,34,64,.92) 0%, rgba(7,52,95,.78) 45%, rgba(7,52,95,.35) 100%), url('/images/warm-contemporary.jpg')" }}>
        <div className="container hero-inner">
          <div className="eyebrow light">DEWAS · MADHYA PRADESH — ARCHITECTURE · CONSTRUCTION · INTERIORS</div>
          <h1>
            Building Your Vision.
            <br />
            <span>Designing Your Future.</span>
          </h1>
          <p className="lead">
            Thoughtfully designed spaces, modern architecture and dependable construction solutions for homes and commercial properties.
          </p>
          <div className="btn-row">
            <Link className="btn btn-teal" to="/projects/residential">Explore Our Projects</Link>
            <Link className="btn btn-outline-light" to="/contact">Get Free Consultation</Link>
            <a className="btn btn-ghost-light" href={waLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
          <div className="hero-sig">ER. SHUBHAM TRIPATHI · ARCHITECT &amp; ENGINEER</div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="WHAT WE DO" title="Architecture, construction and interiors — under one roof" intro="From the first floor plan to the final coat of paint, one team designs and delivers your entire project." />
          <div className="grid-3">
            {SERVICES.slice(0, 6).map((s) => (
              <article key={s.title} className="card service-card reveal">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="more">Learn more</Link>
              </article>
            ))}
          </div>
          <div className="center-row"><Link className="btn btn-primary" to="/services">View All Services</Link></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="split-head">
            <SectionHead eyebrow="FEATURED DESIGNS" title="House elevations & spaces we have visualized" intro="Concept renders and visualizations — every design is created for your plot, not copied from a catalogue." />
            <Link className="btn btn-outline" to="/gallery/elevation">Full Gallery</Link>
          </div>
          <div className="grid-3">
            {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature">
          <div className="reveal">
            <div className="eyebrow">FROM FACADE TO FURNITURE</div>
            <h2>One team for your elevation and everything behind it</h2>
            <p className="lead">
              Your front elevation sets the first impression — but the same thinking continues inside: layouts that breathe, storage that works, lighting that feels right. We coordinate the exterior and interior so both feel like one considered design.
            </p>
            <ul className="ticks">
              <li>Photorealistic 3D views before construction</li>
              <li>Material palettes selected with you</li>
              <li>Interior planning for every room</li>
            </ul>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/services/3d-design">3D Design &amp; Visualization</Link>
              <Link className="btn btn-outline" to="/gallery/interiors">Interior Gallery</Link>
            </div>
          </div>
          <div className="feature-img reveal"><img src="/images/living-room.jpg" alt="Double-height living room interior design concept" loading="lazy" /></div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="WHY CHOOSE US" title="Built on clarity, quality and commitment" />
          <div className="grid-4">
            {WHY.map(([t, d]) => (
              <div key={t} className="why reveal"><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="OUR PROCESS" title="A clear path from idea to handover" intro="Five steps, no guesswork — you always know what is happening and what comes next." />
          <ol className="steps">
            {PROCESS_SHORT.map(([t, d], i) => (
              <li key={t} className="reveal"><span className="num">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
          <div className="center-row"><Link className="btn btn-primary" to="/process">See Our Full Process</Link></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container center-text reveal">
          <div className="eyebrow">CLIENT VOICES</div>
          <h2>Verified reviews — coming soon</h2>
          <p className="lead">We are collecting genuine feedback from our clients and will publish only verified reviews here.</p>
          <div className="placeholder-box">Placeholder — genuine client testimonials will appear here once verified.</div>
          <p className="muted">Worked with us? We would love your honest feedback — share it on WhatsApp.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="split-head">
            <SectionHead eyebrow="FAQS" title="Questions, answered honestly" intro="Can't find what you're looking for? Call or WhatsApp us — we reply personally." />
            <a className="btn btn-outline" href={waLink()} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
          </div>
          <FaqList items={FAQS.slice(0, 5)} />
          <div className="center-row"><Link className="btn btn-primary" to="/faqs">View all FAQs</Link></div>
        </div>
      </section>

      <section className="section dark" id="start">
        <div className="container contact-split">
          <div className="reveal">
            <div className="eyebrow light">START YOUR PROJECT</div>
            <h2>Tell us about your plot. We'll take it from there.</h2>
            <p className="lead">Share a few details and Er. Shubham Tripathi will personally get back to you — or reach us directly:</p>
            <ul className="contact-lines">
              <li><a href={telLink(SITE.phone)}>{SITE.phone}</a></li>
              <li><a href={telLink(SITE.phone2)}>{SITE.phone2}</a></li>
              <li>{SITE.address}</li>
            </ul>
            <Link className="btn btn-teal" to="/contact">Get Free Consultation</Link>
          </div>
          <div className="reveal">
            <p className="form-note">Fill this in — we usually respond the same day.</p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
