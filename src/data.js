export const profile = {
  name: 'Pramod Goudar',
  role: 'Software Engineer',
  location: 'Bengaluru, India',
  email: 'pramod.goudar.dev@gmail.com',
  phone: '+91 8951790286',
  github: 'https://github.com/Pramod0347',
  linkedin: 'https://linkedin.com/in/pramod-goudar-a35605169',
  resume: '/pramod_goudar.pdf',
  githubUser: 'Pramod0347',
  leetcodeUser: 'pramod347',
  leetcode: 'https://leetcode.com/u/pramod347/',
};

export const typedPhrases = ['Python backends', 'AI systems', 'MCP servers'];

export const stats = [
  { value: '4 yrs', label: 'building backends & AI systems' },
  { value: '20+', label: 'hospitals using my work' },
  { value: '125+', label: 'stores on my inventory sync' },
];

export const experience = [
  {
    company: 'Meril Life Sciences',
    team: 'Nuvo AI',
    role: 'Software Engineer 2',
    period: 'Jul 2026 — Present',
    logo: '/assets/companies/meril.png',
    points: [
      'Built a Gemini-powered discharge-summary extension that pulls data from 10+ patient-page APIs and writes summaries for clinicians.',
      'Built event-driven patient-journey tracking across hospital stages, covering 20+ hospitals and 1k+ patients a day.',
      'Built custom MCP servers for EHR APIs and knowledge-graph queries, powering multi-step agent workflows with error recovery.',
      'Developed configurable lab, radiology and billing PDF reports on GraphQL, with hospital-specific formats for 20+ hospitals.',
    ],
    stack: ['Python', 'FastAPI', 'Gemini', 'MCP', 'GraphQL'],
  },
  {
    company: 'Kushals Retail',
    role: 'Software Engineer',
    period: 'Nov 2024 — Jun 2026',
    logo: '/assets/companies/kushals.png',
    points: [
      'Built a display-optimisation system recommending showcase changes across 125+ jewellery stores, cutting dead stock by 30%.',
      'Designed inventory sync on PostgreSQL and AWS event pipelines for real-time stock across 125+ stores and online channels.',
      'Built a Python and OpenAI strategy tool with OKR tracking and transcript analysis, used by 5 teams.',
      'Cut API response time from ~400 ms to under 150 ms with PostgreSQL indexing, and moved a monolith to Docker microservices on EC2.',
    ],
    stack: ['Python', 'OpenAI', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    company: 'Marmeto',
    role: 'Software Engineer',
    period: 'Jan 2023 — Nov 2024',
    logo: '/assets/companies/marmeto.png',
    points: [
      'Led backend for Levi’s India returns and exchanges with idempotent APIs and automated refunds across 500+ orders a month.',
      'Integrated Razorpay and Shiprocket with webhook handling and retries for reliable payments and shipment tracking.',
      'Directed Bewakoof.com’s move from Salesforce Commerce Cloud to React, lowering bounce rate by 20%.',
      'Tuned queries and connection pooling to sustain 10K+ concurrent requests at 99.9% uptime for Levi’s India.',
    ],
    stack: ['React', 'PostgreSQL', 'Razorpay', 'Shiprocket'],
  },
];

export const projects = [
  {
    title: 'Wealth Pilot',
    description:
      'Personal finance app for stocks, funds, accounts, cashflow and taxes. A Gemini insights engine flags weak holdings, and research reports drop any claim not traceable to a cited source. Only percentages and public market data reach the model.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Gemini'],
    flow: ['Portfolio data', 'Python calculations', 'Gemini', 'Source check', 'Report'],
    highlight: 3,
    focus: '95% 30%',
    links: [{ label: 'GitHub', href: 'https://github.com/Pramod0347/wealthpilot' }],
  },
  {
    title: 'ProcureFlow',
    description:
      'End-to-end procurement: vendor onboarding, purchase orders and auto-generated GRN records, with role-based approval chains, real-time tracking and audit trails.',
    stack: ['React', 'Redux', 'Prisma', 'Redis'],
    image: '/assets/projects/procureflow.jpg',
    links: [
      { label: 'Live', href: 'https://procurement-app-delta.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Pramod0347/procurement-app' },
    ],
  },
  {
    title: 'NewsRAG',
    description:
      'RAG chatbot over 50+ sources like BBC, CNN and Reuters, using Jina embeddings and Qdrant, with multi-turn memory cached in Upstash Redis to cut latency and API costs.',
    stack: ['Qdrant', 'Jina', 'Redis', 'Node.js', 'React'],
    flow: ['50+ news sources', 'Jina embeddings', 'Qdrant', 'Redis memory', 'Answer'],
    highlight: 2,
    focus: '20% 60%',
    links: [
      { label: 'Live', href: 'https://voosh-news-rag-frontend.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Pramod0347/news-rag-frontend' },
    ],
  },
];

export const skills = [
  { group: 'AI systems', items: ['LLMs', 'RAG', 'LangGraph', 'MCP', 'vLLM', 'OpenAI'] },
  { group: 'Languages & APIs', items: ['Python', 'Node.js', 'TypeScript', 'REST APIs', 'GraphQL'] },
  { group: 'Frameworks', items: ['FastAPI', 'NestJS', 'React', 'Redux Toolkit', 'Socket.io'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Qdrant', 'Prisma'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'PM2'] },
  { group: 'Tools', items: ['Kafka', 'RabbitMQ', 'JWT', 'RBAC', 'Jest', 'Git'] },
];

// Scrolling strip under the hero. Names must exist in src/skillIcons.js to get a logo.
export const highlightedSkills = [
  'Python',
  'FastAPI',
  'Node.js',
  'NestJS',
  'TypeScript',
  'React',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Qdrant',
  'LangGraph',
  'MCP',
  'OpenAI',
  'Gemini',
  'Kafka',
  'RabbitMQ',
  'Docker',
  'Kubernetes',
  'AWS',
];

export const education = [
  { title: 'Bachelor of Engineering', place: 'Sir M Visvesvaraya Institute of Technology · 2018 – 2022' },
  { title: 'CBSE', place: 'Sainik School Kodagu · 2011 – 2018' },
];

export const certifications = [
  {
    title: 'Generative AI Prompt Design with Vertex AI',
    place: 'Google Cloud · 2024',
    href: 'https://www.cloudskillsboost.google/public_profiles/2db6c1af-fede-4828-8b15-475876db8639/badges/15341157',
  },
  {
    title: 'Build Real World AI Applications with Gemini and Imagen',
    place: 'Google Cloud · 2024',
    href: 'https://www.cloudskillsboost.google/public_profiles/2db6c1af-fede-4828-8b15-475876db8639/badges/15589348',
  },
];

// Shown immediately and kept if a live request fails. Snapshot taken 2026-11-18;
// the Activity section refreshes these from GitHub and LeetCode on load.
export const statsSnapshot = {
  github: {
    repos: 20,
    since: 2022,
    contributions: 377,
    languages: [
      ['JavaScript', 12],
      ['TypeScript', 4],
      ['HTML', 1],
    ],
    recent: [
      { name: 'wealthpilot', language: 'TypeScript', pushed: '2026-10-25' },
      { name: 'software-development', language: 'JavaScript', pushed: '2026-06-06' },
      { name: 'dev-tinder-frontend', language: 'JavaScript', pushed: '2025-12-26' },
      { name: 'dev-tinder-2.0', language: 'JavaScript', pushed: '2025-12-26' },
    ],
  },
  leetcode: { solved: 121, easy: 75, medium: 46, hard: 0 },
};
