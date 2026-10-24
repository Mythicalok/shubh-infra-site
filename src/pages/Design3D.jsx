import { useState } from 'react';
import { PROJECTS, ALL_3D_FILTERS } from '../data/projects.js';
import { PageHero, FilterChips, ProjectCard, Disclaimer } from '../components/Common.jsx';

export default function Design3D() {
  const [f, setF] = useState('All');
  const list = PROJECTS.filter((p) => f === 'All' || p.categories.includes(f));
  return (
    <>
      <PageHero
        eyebrow="3D DESIGN & VISUALIZATION"
        title="See your project before it is built"
        intro="Photorealistic 3D elevations and interior views let you refine every detail with confidence — then we build exactly what you approved."
      />
      <section className="section">
        <div className="container">
          <FilterChips options={ALL_3D_FILTERS} value={f} onChange={setF} />
          <div className="grid-3">
            {list.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
          {list.length === 0 && <p className="muted center-text">No concepts in this category yet.</p>}
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
