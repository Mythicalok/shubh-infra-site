import { useState } from 'react';
import { PROJECTS, ELEVATION_FILTERS, INTERIOR_FILTERS } from '../data/projects.js';
import { PageHero, FilterChips, ProjectCard, Disclaimer } from '../components/Common.jsx';

const COPY = {
  elevation: ['HOUSE ELEVATION GALLERY', 'Front elevations with presence and proportion', 'Front elevation concepts and 3D visualizations — facades studied for materials, shadows and street view.', ELEVATION_FILTERS],
  interiors: ['INTERIOR DESIGN GALLERY', 'Interiors planned for real, everyday life', 'Interior concepts for living spaces, kitchens and bedrooms — material, light and storage in balance.', INTERIOR_FILTERS],
};

export default function Gallery({ kind }) {
  const [eyebrow, title, intro, filters] = COPY[kind];
  const [f, setF] = useState('All');
  const list = PROJECTS.filter((p) => p.gallery === kind && (f === 'All' || p.categories.includes(f)));
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="section">
        <div className="container">
          <FilterChips options={filters} value={f} onChange={setF} />
          <div className="grid-3">{list.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
          {list.length === 0 && <p className="muted center-text">No concepts in this category yet.</p>}
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
