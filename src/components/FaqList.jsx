import { useState } from 'react';

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{q}</span>
            <i aria-hidden="true">{open === i ? '−' : '+'}</i>
          </button>
          {open === i && <p>{a}</p>}
        </div>
      ))}
    </div>
  );
}
