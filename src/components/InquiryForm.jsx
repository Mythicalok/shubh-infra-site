import { useState } from 'react';
import { BUDGETS, PROJECT_TYPES, SERVICE_OPTIONS } from '../data/services.js';
import { waLink } from '../data/site.js';

const empty = {
  name: '', phone: '', email: '', city: '', service: '', type: '', budget: '', plot: '', method: 'Phone Call', message: '', consent: false,
};

export default function InquiryForm() {
  const [f, setF] = useState(empty);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      'New inquiry from website',
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      f.city && `City: ${f.city}`,
      `Service: ${f.service}`,
      f.type && `Project type: ${f.type}`,
      f.budget && `Budget: ${f.budget}`,
      f.plot && `Plot: ${f.plot}`,
      `Preferred contact: ${f.method}`,
      `Details: ${f.message}`,
    ].filter(Boolean);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    setSent(true);
  };

  if (sent)
    return (
      <div className="card form-card success">
        <h3>Almost done — send the message on WhatsApp</h3>
        <p>
          We opened WhatsApp with your inquiry filled in. Press send there and we will get back to you within working hours
          (9:00 AM – 7:00 PM).
        </p>
        <button className="btn btn-primary" onClick={() => { setF(empty); setSent(false); }}>
          Submit another inquiry
        </button>
      </div>
    );

  return (
    <form className="card form-card" onSubmit={submit}>
      <h3>Send Us Your Inquiry</h3>
      <div className="grid-2">
        <label>Full Name *<input required value={f.name} onChange={set('name')} /></label>
        <label>Phone Number *<input required type="tel" value={f.phone} onChange={set('phone')} /></label>
        <label>Email (optional)<input type="email" value={f.email} onChange={set('email')} /></label>
        <label>City<input value={f.city} onChange={set('city')} /></label>
        <label>Service Required *
          <select required value={f.service} onChange={set('service')}>
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label>Project Type
          <select value={f.type} onChange={set('type')}>
            <option value="">Select…</option>
            {PROJECT_TYPES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label>Approximate Budget
          <select value={f.budget} onChange={set('budget')}>
            <option value="">Select…</option>
            {BUDGETS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label>Plot Dimensions (optional)<input placeholder="e.g. 30 x 50 ft" value={f.plot} onChange={set('plot')} /></label>
      </div>
      <label>Preferred Contact Method
        <select value={f.method} onChange={set('method')}>
          {['Phone Call', 'WhatsApp', 'Email'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label>Project Description *
        <textarea required rows="5" value={f.message} onChange={set('message')} placeholder="Tell us about your plot, requirements and timeline…" />
      </label>
      <label className="check">
        <input required type="checkbox" checked={f.consent} onChange={set('consent')} />
        <span>I agree to be contacted about my inquiry and understand my details will be used only for this purpose, as described in the Privacy Policy. *</span>
      </label>
      <button className="btn btn-primary" type="submit">Submit Inquiry</button>
    </form>
  );
}
