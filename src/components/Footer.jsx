import { Link } from 'react-router-dom';
import { FOOTER_EXPLORE, FOOTER_SERVICES, SITE, telLink } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-light">
            <img src="/images/logo.png" alt="" width="40" height="40" />
            <span>
              <strong>SHUBH INFRA</strong>
              <em>AND INTERIOR</em>
            </span>
          </div>
          <p className="footer-tag">{SITE.tagline}</p>
          <Link className="btn btn-teal" to="/contact">
            Get Free Consultation
          </Link>
        </div>
        <div>
          <h4>EXPLORE</h4>
          <ul>
            {FOOTER_EXPLORE.map(([to, label]) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>SERVICES</h4>
          <ul>
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <Link to="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>CONTACT</h4>
          <ul className="footer-contact">
            <li>
              <a href={telLink(SITE.phone)}>{SITE.phone}</a>
            </li>
            <li>
              <a href={telLink(SITE.phone2)}>{SITE.phone2}</a>
            </li>
            <li>{SITE.address}</li>
            <li>
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                Get Directions →
              </a>
            </li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 {SITE.name}. All rights reserved.</span>
        <Link to="/privacy">Privacy Policy &amp; Terms</Link>
      </div>
    </footer>
  );
}
