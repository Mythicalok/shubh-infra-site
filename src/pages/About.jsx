import { Link } from 'react-router-dom';
import { PageHero, CtaBanner } from '../components/Common.jsx';

const VALUES = [
  ['Design Quality', 'Every drawing and elevation is crafted — proportions, materials and light studied before anything is built.'],
  ['Functional Planning', 'Spaces are planned around real daily use — light, ventilation, storage and movement come first.'],
  ['Transparent Communication', 'Honest timelines, clear updates and straightforward conversations at every stage.'],
  ['Customer-Focused Coordination', 'One point of contact from consultation to handover, so you always know whom to ask.'],
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="ABOUT US" title="A design-first construction practice from Dewas" intro="SHUBH INFRA AND INTERIOR brings architecture, engineering and interior design together for homes and commercial spaces across Madhya Pradesh." />
      <section className="section">
        <div className="container narrow reveal">
          <div className="eyebrow">OUR STORY</div>
          <h2>Good buildings begin with better questions</h2>
          <p>SHUBH INFRA AND INTERIOR was founded on a simple belief: a home should be designed around the people who live in it — not around a standard template. We start every project by understanding the plot, the family and the budget, and only then put pencil to paper.</p>
          <p>Based in Mishrilal Nagar, Dewas, we work across residential and commercial projects — offering architectural planning, 3D elevation design, construction execution and interior design under one roof. That integration is our strength: the design you approve is the building that gets delivered.</p>
          <div className="btn-row">
            <Link className="btn btn-primary" to="/contact">Work With Us</Link>
            <Link className="btn btn-outline" to="/gallery/elevation">See Our Designs</Link>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container grid-3">
          <div className="card info-card reveal"><div className="eyebrow">LEADERSHIP</div><h3>Represented by Er. Shubham Tripathi</h3><p>Architect &amp; Engineer — leading design and execution for every project the firm takes on.</p></div>
          <div className="card info-card reveal"><div className="eyebrow">VISION</div><p>To make thoughtfully designed, well-built homes accessible to every family in and around Dewas — where good architecture is the standard, not the exception.</p></div>
          <div className="card info-card reveal"><div className="eyebrow">MISSION</div><p>Deliver design-led construction with transparent communication, disciplined engineering and interiors that make everyday life easier for the people who use them.</p></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head reveal center">
            <div className="eyebrow">HOW WE WORK</div>
            <h2>Values that guide every project</h2>
            <p className="lead">Our approach stays the same whether it's a 20×40 ft plot or a commercial frontage.</p>
          </div>
          <div className="grid-4">
            {VALUES.map(([t, d]) => (<div key={t} className="card value-card reveal"><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </div>
      </section>
      <CtaBanner title="Planning to build in Dewas or nearby?" text="Let's start with a conversation and a site visit." />
    </>
  );
}
