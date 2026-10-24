import { SITE, telLink, waLink } from '../data/site.js';
import { PageHero } from '../components/Common.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Let's talk about your project"
        intro="Call, WhatsApp or send the inquiry form — we personally respond to every message."
      />
      <section className="section">
        <div className="container grid-4">
          <div className="card info-card reveal">
            <h3>Call Us</h3>
            <p>
              {SITE.phone}
              <br />
              {SITE.phone2}
            </p>
            <a className="btn btn-primary btn-sm" href={telLink(SITE.phone)}>
              Call Now
            </a>
          </div>
          <div className="card info-card reveal">
            <h3>WhatsApp</h3>
            <p>
              +91 8770076920
              <br />
              <span className="muted">Fastest response</span>
            </p>
            <a className="btn btn-teal btn-sm" href={waLink()} target="_blank" rel="noreferrer">
              Start Chat
            </a>
          </div>
          <div className="card info-card reveal">
            <h3>Visit / Directions</h3>
            <p>{SITE.address}</p>
            <a className="btn btn-outline btn-sm" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>
          <div className="card info-card reveal">
            <h3>Working Hours</h3>
            <p>
              Monday – Sunday
              <br />
              9:00 AM – 7:00 PM
            </p>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container narrow">
          <div className="section-head reveal">
            <div className="eyebrow">INQUIRY FORM</div>
            <h2>Tell us what you're planning</h2>
            <p className="lead">
              The more detail you share, the more useful our first conversation will be. Fields marked * are required.
            </p>
          </div>
          <div className="form-head">
            <h3>Get Free Consultation</h3>
            <p className="form-note">Fill this in — we usually respond the same day.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
