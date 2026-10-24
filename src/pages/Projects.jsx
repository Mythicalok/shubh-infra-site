import { useState } from 'react';
import { PROJECTS, RESIDENTIAL_FILTERS, COMMERCIAL_FILTERS } from '../data/projects.js';
import { PageHero, FilterChips, ProjectCard, CtaBanner } from '../components/Common.jsx';

const COPY = {
  residential: ['RESIDENTIAL PROJECTS', 'Homes designed around the people who live in them', 'Concept designs and 3D visualizations for houses, duplexes and villas — every elevation created for a specific plot.', RESIDENTIAL_FILTERS],
  commercial: ['COMMERCIAL PROJECTS', 'Commercial spaces that work as hard as they look', 'Showrooms and commercial facades designed for visibility, frontage and long-term durability.', COMMERCIAL_FILTERS],
};

export default function Projects({ group }) {
  const [eyebrow, title, intro, filters] = COPY[group];
  const [f, setF] = useState('All');
  const list = PROJECTS.filter((p) => p.group === group && (f === 'All' || p.categories.includes(f)));
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="section">
        <div className="container">
          <FilterChips options={filters} value={f} onChange={setF} />
          <div className="grid-3">
            {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
          {list.length === 0 && <p className="muted center-text">No concepts in this category yet — ask us about your plot.</p>}
        </div>
      </section>
      <CtaBanner title="Have a plot? Let's design it next." text="Share your plot size and requirements — we'll propose a concept." />
    </>
  );
}
