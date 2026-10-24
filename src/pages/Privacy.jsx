import { PageHero } from '../components/Common.jsx';

const PRIVACY = [
  ['What we collect', 'When you fill in the inquiry form, we collect the details you provide: name, phone number, optional email, city, service requirements, project details and your preferred contact method.'],
  ['How we use it', 'Your information is used only to respond to your inquiry and to contact you about your project. We do not sell, rent or share your personal details with third parties for marketing.'],
  ['Consent', 'By ticking the consent checkbox and submitting the form, you agree to be contacted by SHUBH INFRA AND INTERIOR regarding your inquiry. You may withdraw consent at any time by calling or messaging us.'],
  ['Storage & security', 'This website does not store inquiries. The form prepares a WhatsApp message with the details you entered, and it reaches us only when you send it from your own WhatsApp. We retain that conversation only as long as needed for our work.'],
  ['WhatsApp fallback', 'If you choose to send your inquiry via WhatsApp, you will always see and review the message before it is sent — nothing is submitted automatically.'],
  ['Your rights', 'To request access to, correction of, or deletion of your data, contact us at +91 8770076920.'],
];

const TERMS = [
  ['Website content', 'All architectural renders, 3D visualizations and design concepts shown on this website are original design concepts created by SHUBH INFRA AND INTERIOR for illustration. They are not photographs of completed client projects unless explicitly stated, and must not be reproduced without permission.'],
  ['No binding offer', 'Content on this website is for general information and does not constitute a quotation, contract or professional advice. Project scope, timelines and costs are confirmed only in a written agreement.'],
  ['Consultations', 'Initial consultations are free and non-binding. Any statutory approvals, certifications or specialist services are included in a project only if explicitly agreed in writing.'],
  ['Liability', 'We work to keep information on this site accurate and current, but make no warranties about completeness and accept no liability for decisions made solely on the basis of website content.'],
];

const Block = ({ title, items }) => (
  <div className="legal-block reveal">
    <h2>{title}</h2>
    {items.map(([h, t]) => (
      <p key={h}>
        <strong>{h}.</strong> {t}
      </p>
    ))}
  </div>
);

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Privacy Policy & Terms of Use"
        intro="How we handle your information and the terms that apply when you use this website."
      />
      <section className="section">
        <div className="container narrow">
          <Block title="Privacy Policy" items={PRIVACY} />
          <Block title="Terms of Use" items={TERMS} />
          <p className="muted">Last updated: October 2026</p>
        </div>
      </section>
    </>
  );
}
