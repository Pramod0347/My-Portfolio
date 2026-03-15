import React from 'react';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
 

const coreSkills = [
  { label: 'Node.js', meta: 'API services' },
  { label: 'PostgreSQL', meta: 'Query tuning' },
  { label: 'Redis', meta: 'Caching layer' },
  { label: 'AWS', meta: 'Cloud-native deploys' },
  { label: 'Docker', meta: 'Container runtime' },
  { label: 'Microservices', meta: 'Service boundaries' },
  { label: 'TypeScript', meta: 'Safer backend code' },
  { label: 'DSA', meta: '120+ LeetCode' },
];

const highlights = [
  { value: '3+', label: 'Years building backend systems' },
  { value: '110+', label: 'Stores synced in realtime' },
  { value: '120+', label: 'LeetCode problems solved' },
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
            <span className="keyword">Backend Engineer</span> · <span className="keyword-accent">Distributed Systems</span> · <span className="keyword">Scalable APIs</span> · <span className="keyword-accent">Microservices</span>
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 lg:text-base">
            <span className="keyword-badge">3+ years</span> building <span className="keyword">event-driven backends</span>, <span className="keyword-accent">real-time data pipelines</span>, and <span className="keyword">cloud-native microservices</span> on <span className="keyword-accent">AWS</span>.
            Currently solving <span className="keyword">DSA</span> on LeetCode <span className="keyword-badge">(120+)</span>.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 lg:text-base">
            I&apos;m a <span className="keyword">Backend Engineer</span> who obsesses over <span className="keyword-accent">distributed systems</span>, <span className="keyword">API design</span>, and making <span className="keyword-accent">databases fast</span>.
            I&apos;ve spent 3+ years building <span className="keyword">backend infrastructure</span> that handles real-world scale, from <span className="keyword-accent">real-time inventory sync</span> across <span className="keyword-badge">110+ stores</span> to <span className="keyword">AI-powered RAG pipelines</span>. Currently sharpening DSA skills and exploring backend roles at product-focused companies.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <span className="tag-chip">Distributed systems</span>
            <span className="tag-chip">AWS microservices</span>
            <span className="tag-chip">DSA: 120+ LeetCode</span>
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
