export const SERVICES = [
  {
    title: 'Residential House Construction',
    desc: 'End-to-end construction of homes — from foundation to finishing — with quality materials and supervised execution.',
    points: ['Supervised day-to-day execution', 'Transparent material choices', 'Stage-wise quality checks'],
  },
  {
    title: 'Commercial Building Construction',
    desc: 'Shops, showrooms and commercial buildings built with attention to frontage, visibility and durable structure.',
    points: ['Commercial-grade materials', 'Facade and frontage focus', 'Timely completion planning'],
  },
  {
    title: 'Architectural Planning & Floor Plans',
    desc: 'Thoughtful layouts that respect plot dimensions, ventilation, movement and the way your family actually lives.',
    points: ['Vastu-conscious layouts', 'Space-efficient planning', 'Detailed working drawings'],
  },
  {
    title: 'Front Elevation & Facade Design',
    desc: 'Distinct front elevations that give your home presence — proportion, material play and lighting studied together.',
    points: ['Plot-specific design', 'Material and colour palettes', 'Elevation working details'],
  },
  {
    title: '2D Drawings & 3D Elevation Design',
    desc: 'See your home before it is built — precise 2D drawings and realistic 3D visualizations of every facade.',
    points: ['Photorealistic 3D renders', 'Revision-friendly workflow', 'Site-accurate modelling'],
  },
  {
    title: 'Interior Design & Space Planning',
    desc: 'Interiors planned around comfort and daily use — living spaces, kitchens, bedrooms, lighting and storage.',
    points: ['Modular kitchen & wardrobes', 'Lighting and material concepts', 'Furniture layout planning'],
  },
  {
    title: 'Renovation & Remodeling',
    desc: 'Refreshing existing homes and commercial spaces — structural repairs, facelifts and smarter re-planning.',
    points: ['Honest structural assessment', 'Phased renovation plans', 'Minimal-disruption execution'],
  },
  {
    title: 'Turnkey Construction Solutions',
    desc: 'One responsible team from the first sketch to the final handover — you move into a finished, ready home.',
    points: ['Single point of contact', 'Consolidated costing', 'Handover-ready finishing'],
  },
  {
    title: 'Structural & Engineering Coordination',
    desc: 'Coordinating structural drawings, drawings alignment and site engineering so design intent survives construction.',
    points: ['Design-structure alignment', 'Site engineering support', 'Drawing coordination'],
  },
  {
    title: 'Material Selection & Design Consultation',
    desc: 'Guided selection of tiles, paints, stone, laminates and fittings — balancing look, durability and budget.',
    points: ['Sample-led decisions', 'Budget-aware alternatives', 'Local supplier network'],
  },
];

export const SERVICE_OPTIONS = [
  ...SERVICES.slice(0, 7).map((s) => s.title),
  'Turnkey Construction Solutions',
  'Structural & Engineering Coordination',
  'Material Selection & Design Consultation',
  'Other / Not sure yet',
];

export const PROJECT_TYPES = ['New House', 'Duplex', 'Villa', 'Commercial Building', 'Showroom', 'Interior Only', 'Renovation', 'Other'];
export const BUDGETS = ['Under ₹10 Lakh', '₹10–25 Lakh', '₹25–50 Lakh', '₹50 Lakh–1 Crore', 'Above ₹1 Crore', 'Not decided yet'];

export const WHY = [
  ['Design-Led Engineering', 'Architecture and construction under one roof — the design you approve is the building that gets delivered.'],
  ['Transparent Communication', 'Clear updates at every stage, honest timelines and no surprises in the final bill.'],
  ['Thoughtful Space Planning', 'Every square foot is planned for real life — light, ventilation, storage and movement.'],
  ['Local Expertise in Dewas', 'Deep familiarity with Dewas and nearby MP regions — plots, materials, vendors and site conditions.'],
];

export const PROCESS_SHORT = [
  ['Consultation & Site Visit', 'We listen to your requirements, visit the site and understand the plot, orientation and budget.'],
  ['Planning & 2D Drawings', 'Floor plans and working drawings are prepared — refined with your feedback until the layout feels right.'],
  ['3D Elevation & Interiors', 'Photorealistic 3D views let you see and fine-tune the facade and interior concepts before work begins.'],
  ['Construction & Execution', 'Supervised construction with stage-wise quality checks, transparent updates and material tracking.'],
  ['Finishing & Handover', 'Finishing, snag-list resolution and a clean handover — with support after you move in.'],
];

export const PROCESS_LONG = [
  ['Consultation & Site Visit', 'We begin with a conversation about your needs, followed by a site visit to study the plot — its dimensions, orientation, access and surroundings. This is where honest advice about feasibility and budget begins.'],
  ['Planning & 2D Drawings', 'Based on the site study, we prepare floor plans and working drawings. You review, we refine — the layout is finalized only when it feels right to you, covering room sizes, ventilation and movement.'],
  ['3D Elevation & Interiors', 'Once plans are locked, photorealistic 3D elevations and interior views bring the design to life. You can request changes to materials, colours and details before any construction starts.'],
  ['Construction & Execution', 'Construction proceeds under supervision with stage-wise quality checks. You receive regular updates with photographs, and material selections are made together at the right moments.'],
  ['Finishing & Handover', "Finishing work, snag-list resolution and a thorough clean-up precede handover. We stay available after you move in — because a project isn't done when we leave, it's done when you're happy."],
];

export const FAQS = [
  ['What services does Shubh Infra and Interior offer?', 'We offer residential and commercial construction, architectural planning and floor plans, front elevation design, 2D drawings, 3D elevation design, interior design, renovation, turnkey construction and material consultation.'],
  ['Do you design on small plots like 20×30 or 20×40 ft?', 'Yes. Compact plots are one of our focus areas — the elevation and layout are designed to maximize light, ventilation and street presence within your frontage.'],
  ['Can I see my house in 3D before construction starts?', 'Absolutely. We prepare photorealistic 3D elevation and interior views after the floor plan is finalized, and refine them with your feedback before execution.'],
  ['Do you handle both construction and interiors together?', 'Yes, we offer turnkey solutions where construction and interior execution are coordinated under one point of contact — or you can engage us for either separately.'],
  ['Which areas do you serve?', 'We are based in Mishrilal Nagar, Dewas (MP) and serve Dewas and surrounding regions of Madhya Pradesh. Reach out with your plot location and we will confirm feasibility.'],
  ['How do I get started?', 'Call, WhatsApp or submit the inquiry form with your plot details and requirements. We will schedule a consultation and site visit to discuss your project.'],
  ['Do you assist with government approvals or certifications?', 'Approval requirements vary by location and project. Please discuss your specific needs with us during consultation so we can clarify what is included in your scope.'],
];
