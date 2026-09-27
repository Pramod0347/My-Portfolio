import React from 'react';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
 

const coreSkills = [
  { label: 'Node.js · Python', meta: 'Backend development' },
  { label: 'NestJS · FastAPI', meta: 'Services and APIs' },
  { label: 'PostgreSQL · MongoDB', meta: 'Data stores' },
  { label: 'Kafka · RabbitMQ', meta: 'Event messaging' },
  { label: 'AWS · Docker', meta: 'Cloud and containers' },
  { label: 'Redis', meta: 'Caching and sessions' },
  { label: 'GraphQL · REST', meta: 'API design' },
  { label: 'OpenAI · RAG', meta: 'AI integrations' },
];

const highlights = [
  { value: '4+', label: 'Years building full-stack products' },
  { value: '125+', label: 'Retail stores supported' },
  { value: '20+', label: 'Hospitals with patient tracking' },
];

const AboutMe = () => {
  return (
    <div
      className="flex flex-col items-start justify-center w-full h-full space-y-8 animate-fade-up"
    >
      <div className="grid gap-6 xl:grid-cols-[1.5fr,0.9fr] xl:items-start">
        <div>
          <p className="section-kicker">Overview</p>
          <h2 
            className="section-title"
          >
            <span className="keyword">Software Engineer</span> · <span className="keyword-accent">Backend & Full-Stack</span> · <span className="keyword">Event-Driven Systems</span> · <span className="keyword-accent">Applied AI</span>
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 lg:text-base">
            <span className="keyword-badge">4+ years</span> building full-stack applications across <span className="keyword">SaaS, healthcare, and e-commerce</span>. I deliver APIs, microservices, event-driven systems, and AI/RAG integrations using <span className="keyword-accent">Node.js, Python, and AWS</span>.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <span className="tag-chip">Event-driven systems</span>
            <span className="tag-chip">AI & RAG pipelines</span>
            <span className="tag-chip">Based in Bengaluru</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              Open to Work
              <ArrowRight className="h-4 w-4" />
              Let&apos;s Talk
            </a>
            <a
              href="/pramod_goudar.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-sky-400 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
          {highlights.map((item) => (
            <div key={item.label} className="metric-card">
              <p className="text-2xl font-display font-semibold text-slate-900 dark:text-slate-50">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 font-semibold">
            Core Skills
          </p>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">Top 8</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.label}
              className="metric-card animate-fade-up text-left hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500/90 shadow-sm" />
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {skill.label}
                </p>
              </div>
              <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
                {skill.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
