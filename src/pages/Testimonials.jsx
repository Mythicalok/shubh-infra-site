import { PageHero, CtaBanner } from '../components/Common.jsx';
import { waLink } from '../data/site.js';

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="TESTIMONIALS"
        title="Only real reviews, only verified voices"
        intro="We are building this page from genuine client feedback — nothing staged, nothing purchased."
      />
      <section className="section">
        <div className="container narrow">
          <div className="empty-state reveal">
            <h3>Verified client testimonials will appear here</h3>
            <p>
              We are currently collecting honest feedback from clients we have worked with. Rather than filling this page
              with sample reviews, we will publish each testimonial only after it is verified. Thank you for your patience —
              and for your trust.
            </p>
            <a
              className="btn btn-teal"
              href={waLink("Hello, I'd like to share my experience with Shubh Infra and Interior.")}
              target="_blank"
              rel="noreferrer"
            >
              Share Your Experience
            </a>
          </div>
        </div>
      </section>
      <CtaBanner
        title="Want to become our next verified review?"
        text="Start a project with us — we'll earn the feedback honestly."
        secondary={null}
      />
    </>
  );
}
