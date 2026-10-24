import { Link } from 'react-router-dom';
import { FAQS } from '../data/services.js';
import { PageHero } from '../components/Common.jsx';
import FaqList from '../components/FaqList.jsx';
import { waLink } from '../data/site.js';

export default function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="FAQS"
        title="Answers before you even ask"
        intro="The questions clients ask most — answered directly. Anything else, just call or message us."
      />
      <section className="section">
        <div className="container narrow">
          <FaqList items={FAQS} />
          <div className="faq-close reveal">
            <h3>Still have a question?</h3>
            <p>We reply personally — no call centres, no bots.</p>
            <div className="btn-row center">
              <a className="btn btn-teal" href={waLink()} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
              <Link className="btn btn-outline" to="/contact">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
