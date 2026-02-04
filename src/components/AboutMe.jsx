import React from 'react';
 

const coreSkills = [
  { label: 'Node.js', meta: 'APIs & services' },
  { label: 'React', meta: 'UI systems' },
  { label: 'AWS', meta: 'Cloud deploy' },
  { label: 'MongoDB', meta: 'NoSQL data' },
  { label: 'PostgreSQL', meta: 'Relational data' },
  { label: 'Docker', meta: 'Containers' },
  { label: 'Tailwind CSS', meta: 'Design system' },
  { label: 'Shopify', meta: 'E-commerce' },
];

const AboutMe = () => {
  return (
    <div
      className="flex flex-col items-start justify-center w-full h-full space-y-6 animate-fade-up"
    >
      <div>
        <p className="section-kicker">Overview</p>
        <h2 
          className="section-title"
        >
          My Tech Journey
        </h2>
        <p className="text-sm lg:text-base mt-4 text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
          Full Stack Engineer with <span className="font-semibold text-slate-900 dark:text-white">3+ years</span> building
          scalable e-commerce platforms, secure auth flows, and high-performance APIs. I focus on clean
          architecture, measurable impact, and reliable delivery.
        </p>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 font-semibold">
            Core Skills
          </p>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">Top 8</span>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.label}
              className="glass-card rounded-2xl p-3 text-left animate-fade-up hover:-translate-y-1"
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
