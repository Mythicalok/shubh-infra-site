# Shubh Infra & Interior — website

React recreation of the Shubh Infra & Interior (Dewas, Madhya Pradesh) construction, architecture and interiors website.

## Stack
Vite 5 · React 18 · react-router-dom 6 · plain CSS (Playfair Display, Plus Jakarta Sans, JetBrains Mono via Google Fonts)

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Pages
Home, About, Services, 3D Design, Residential and Commercial projects, Elevation and Interior galleries (with category filters), Process, FAQs, Contact, Testimonials, Privacy Policy & Terms.

## Notes
- Front-end only. There is no backend or admin panel and nothing is stored.
- The inquiry form builds a WhatsApp message (+91 8770076920) that the visitor reviews and sends themselves.
- Recreated from the live preview (text, images, colours); the original source code was not available, so the implementation is new.
- Content lives in `src/data/` (site info, services, projects); images in `public/images/`.
