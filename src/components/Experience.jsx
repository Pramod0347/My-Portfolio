import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer 2 · Meril Life Sciences (Nuvo AI)',
    duration: 'Jul 2026 – Present',
    bullets: [
      'Built an event-driven patient journey tracking architecture spanning 20+ hospitals and tracking 100+ patients daily across multiple hospital stages.',
      'Developed configurable PDF report modules for Laboratory, Radiology, and Billing using NestJS and GraphQL, supporting hospital-specific formats.',
      'Configured and deployed Plane, an open-source project management tool, with custom features for internal project tracking.',
    ],
  },
  {
    title: 'Software Engineer · Kushals Retail Pvt. Ltd.',
    duration: 'Nov 2024 – Jun 2026',
    bullets: [
      'Built a B2B SaaS AI display optimization system for 125+ jewellery stores, using sales data to recommend showcase changes and reduce dead stock by 30%.',
      'Designed distributed inventory synchronization with Node.js, PostgreSQL, and AWS Event Pipelines for real-time stock updates across 125+ stores and online channels.',
      'Built an AI strategy tool with OKR tracking and transcript analysis using Python and OpenAI APIs, supporting decisions across five teams.',
      'Designed REST APIs with JWT authentication, rate limiting, and Redis session management, improving login reliability for 10K+ users and reducing cart drop-off.',
      'Optimized PostgreSQL queries from ~400 ms to under 150 ms under load, and migrated a monolith to AWS EC2 microservices using Docker and Redis.',
    ],
  },
  {
    title: 'Software Engineer · Marmeto',
    duration: 'Jan 2023 – Nov 2024',
    bullets: [
      'Led backend development for Levi’s India, building Node.js and MongoDB returns and exchanges with idempotent APIs and automated refunds.',
      'Integrated Razorpay and Shiprocket with webhook handling and retry logic to improve payment reliability and shipment tracking.',
      'Directed Bewakoof.com’s migration from Salesforce Commerce Cloud to component-driven React, improving page load performance and reducing bounce rates by 20%.',
      'Optimized database queries and connection pooling to support 10K+ concurrent requests with 99.9% uptime for the Levi’s India platform.',
    ],
  },
];

const Experience = () => (
  <div className="animate-fade-up">
    <p className="section-kicker">Timeline</p>
    <h2 className="section-title">Work Experience</h2>
    {experiences.map((exp) => (
      <article key={exp.title} className="my-8 rounded-2xl p-6 glass-card transition-all duration-500 hover:shadow-lift">
        <div className="mb-4 flex items-start gap-3">
          <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-slate-900 text-white shadow-md">
            <Briefcase size={16} />
          </span>
          <div>
            <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-slate-100 lg:text-lg">{exp.title}</h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 lg:text-base">{exp.duration} · Bengaluru</p>
          </div>
        </div>
        <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300 lg:text-base">
          {exp.bullets.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </article>
    ))}
  </div>
);

export default Experience;
