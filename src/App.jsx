import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Gallery from './pages/Gallery.jsx';
import Design3D from './pages/Design3D.jsx';
import Process from './pages/Process.jsx';
import Faqs from './pages/Faqs.jsx';
import Contact from './pages/Contact.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Privacy from './pages/Privacy.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fade-in on scroll for any element with class "reveal"
function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);
}

export default function App() {
  useReveal();
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/3d-design" element={<Design3D />} />
          <Route path="/projects/residential" element={<Projects group="residential" />} />
          <Route path="/projects/commercial" element={<Projects group="commercial" />} />
          <Route path="/gallery/elevation" element={<Gallery kind="elevation" />} />
          <Route path="/gallery/interiors" element={<Gallery kind="interiors" />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
