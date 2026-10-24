import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, SITE, telLink } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const active = (n) => (n.match ? pathname.startsWith(n.match) : pathname === n.to);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Shubh Infra and Interior — home">
          <img src="/images/logo.png" alt="" width="40" height="40" />
          <span>
            <strong>SHUBH INFRA</strong>
            <em>AND INTERIOR</em>
          </span>
        </Link>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={active(n) ? 'active' : ''}>
              {n.label}
            </NavLink>
          ))}
          <a className="nav-phone" href={telLink(SITE.phone)}>
            {SITE.phone}
          </a>
          <Link className="btn btn-primary btn-sm" to="/contact">
            Get Free Consultation
          </Link>
        </nav>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
