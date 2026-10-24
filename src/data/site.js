export const SITE = {
  name: 'SHUBH INFRA AND INTERIOR',
  phone: '+91 8770076920',
  phone2: '+91 8982489749',
  whatsapp: '918770076920',
  address: 'Mishrilal Nagar, Dewas, Madhya Pradesh 455001, India',
  hours: 'Mon – Sun · 9:00 AM – 7:00 PM',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Mishrilal+Nagar,+Dewas,+Madhya+Pradesh+455001',
  tagline:
    'Architecture, construction and interior design firm in Dewas, Madhya Pradesh — represented by Er. Shubham Tripathi, Architect & Engineer.',
};

export const waLink = (text = "Hello, I'd like a free consultation for my project.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = (p) => `tel:${p.replace(/\s/g, '')}`;

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects/residential', label: 'Projects', match: '/projects' },
  { to: '/gallery/elevation', label: 'Gallery', match: '/gallery' },
  { to: '/process', label: 'Process' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
];

export const MARQUEE = [
  'House Construction',
  '3D Elevation Design',
  'Interior Design',
  'Floor Plans',
  'Duplex Homes',
  'Showroom Construction',
  'Renovation',
  'Turnkey Solutions',
  'Dewas · Madhya Pradesh',
];

export const FOOTER_EXPLORE = [
  ['/about', 'About Us'],
  ['/services', 'Services'],
  ['/projects/residential', 'Residential Projects'],
  ['/projects/commercial', 'Commercial Projects'],
  ['/gallery/elevation', 'House Elevation Gallery'],
  ['/gallery/interiors', 'Interior Design Gallery'],
  ['/services/3d-design', '3D Design & Visualization'],
  ['/process', 'Our Process'],
  ['/testimonials', 'Testimonials'],
  ['/faqs', 'FAQs'],
];

export const FOOTER_SERVICES = [
  'Residential House Construction',
  'Commercial Building Construction',
  'Architectural Planning & Floor Plans',
  'Front Elevation & Facade Design',
  '2D Drawings & 3D Elevation Design',
  'Interior Design & Space Planning',
  'Renovation & Remodeling',
];
