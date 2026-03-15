import React from 'react'
 
import {
  SiReact,
  SiNodedotjs, SiTailwindcss, SiGit, SiPostman,
  SiRedux, SiExpress, SiGraphql, SiMongodb, SiPostgresql,
  SiDocker, SiAmazonwebservices, SiRedis, SiTypescript, SiPrisma, SiNginx
} from 'react-icons/si';
import { Layers3, ServerCog, DatabaseZap, Code2 } from 'lucide-react';

const skillGroups = [
  {
    title: 'Core Backend Stack',
    emphasis: 'Primary',
    description: 'The technologies I want to be evaluated on first for backend and systems work.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#68a063', level: 'Advanced', years: 3, usedAt: ['Kushals', 'NewsRAG', 'ProcureFlow'] },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 'Intermediate', years: 2, usedAt: ['ProcureFlow', 'Architecture Labs'] },
      { name: 'Redis', icon: SiRedis, color: '#dc382d', level: 'Intermediate', years: 2, usedAt: ['NewsRAG', 'ProcureFlow', 'TaskFlow'] },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#ff9900', level: 'Intermediate', years: 2, usedAt: ['Kushals', 'Microservices Migration'] },
      { name: 'Docker', icon: SiDocker, color: '#2496ed', level: 'Intermediate', years: 1, usedAt: ['ProcureFlow', 'TaskFlow'] },
      { name: 'Microservices', icon: SiPostman, color: '#ff6c37', level: 'Intermediate', years: 2, usedAt: ['ProcureFlow', 'TaskFlow'] },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 'Working', years: 1, usedAt: ['NewsRAG', 'Backend practice'] },
    ],
  },
  {
    title: 'Platform and Data Layer',
    emphasis: 'Secondary',
    description: 'Supporting tools I use for APIs, data access, deployment, and service operations.',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248', level: 'Advanced', years: 3, usedAt: ['Kushals', 'TaskFlow'] },
      { name: 'Express.js', icon: SiExpress, color: '#000000', level: 'Advanced', years: 3, usedAt: ['Kushals', 'TaskFlow', 'NewsRAG'] },
      { name: 'GraphQL', icon: SiGraphql, color: '#e10098', level: 'Beginner', years: 1, usedAt: ['Personal'] },
      { name: 'Prisma', icon: SiPrisma, color: '#0c344b', level: 'Intermediate', years: 1, usedAt: ['ProcureFlow'] },
      { name: 'Nginx', icon: SiNginx, color: '#009639', level: 'Working', years: 1, usedAt: ['Deployment setup'] },
      { name: 'CI/CD', icon: SiGit, color: '#f1502f', level: 'Intermediate', years: 2, usedAt: ['Portfolio', 'TaskFlow'] },
    ],
  },
  {
    title: 'Frontend Delivery Layer',
    emphasis: 'Secondary',
    description: 'Enough frontend range to build internal tools and admin dashboards without making it the centerpiece.',
    skills: [
      { name: 'React', icon: SiReact, color: '#61dafb', level: 'Advanced', years: 3, usedAt: ['Portfolio', 'TaskFlow', 'ProcureFlow'] },
      { name: 'Redux', icon: SiRedux, color: '#764abc', level: 'Advanced', years: 3, usedAt: ['TaskFlow', 'ProcureFlow'] },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8', level: 'Advanced', years: 3, usedAt: ['Portfolio', 'TaskFlow'] },
    ],
  },
];

const Skills = () => {
  const capabilitySummary = [
    {
      title: 'API Engineering',
      description: 'REST services, auth, caching, queue-friendly designs, and pragmatic service boundaries.',
      icon: ServerCog,
    },
    {
      title: 'Data + Performance',
      description: 'PostgreSQL, Redis, indexing, query shaping, and latency-driven backend tuning.',
      icon: DatabaseZap,
    },
    {
      title: 'Cloud + Runtime',
      description: 'AWS deployments, Dockerized services, environment parity, and production delivery.',
      icon: Layers3,
    },
    {
      title: 'DSA Progress',
      description: '120+ LeetCode problems solved while sharpening problem solving for backend interviews.',
      icon: Code2,
    },
  ];

  const formatYears = (yrs) => {
    if (typeof yrs !== 'number') return '—'
    const y = Math.max(yrs, 2)
    if (y >= 3) return '3+\u00A0yrs'
    return `${y}\u00A0yrs`
  }

  return (
    <div className="w-full animate-fade-up">
      <p className="section-kicker">Capabilities</p>
      <h2 className="section-title">
        <span className="keyword">Backend-First</span> Skills
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:text-base">
        I&apos;ve intentionally reordered the stack to highlight the backend technologies I want to be hired for: <span className="keyword">distributed APIs</span>, <span className="keyword-accent">data infrastructure</span>, and <span className="keyword">service-oriented systems</span>.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {capabilitySummary.map(({ title, description, icon: Icon }) => (
          <div key={title} className="metric-card">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <span className="tag-chip">DSA: 120+ LeetCode</span>
      </div>

      <div className="mt-8 space-y-8">
        {skillGroups.map((group, groupIndex) => (
          <section
            key={group.title}
            className={`rounded-[26px] border p-4 md:p-5 ${
              groupIndex === 0
                ? 'border-sky-200 bg-sky-50/60 dark:border-sky-700/50 dark:bg-sky-950/20'
                : 'border-slate-200/80 bg-white/50 dark:border-slate-700/60 dark:bg-slate-900/30'
            }`}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{group.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{group.description}</p>
              </div>
              <span className="tag-chip hidden md:inline-flex">{group.emphasis}</span>
            </div>

            {/* Mobile: horizontal scroll pills */}
            <div className="md:hidden -mx-1 overflow-x-auto pb-1">
              <div className="px-1 inline-flex gap-3 snap-x snap-mandatory">
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="snap-start shrink-0 w-[240px] p-4 rounded-2xl glass-card border border-white/60 dark:border-slate-700/60"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl p-3 border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800">
                          <Icon size={20} color={skill.color} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{skill.name}</p>
                          <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">{skill.level}</span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 whitespace-nowrap">{formatYears(skill.years)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {skill.usedAt.slice(0, 3).map((proj) => (
                          <span key={`${skill.name}-${proj}`} className="px-2 py-0.5 text-[11px] rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{proj}</span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Desktop: grid cards */}
            <div className={`hidden gap-4 md:grid ${groupIndex === 2 ? 'grid-cols-2 xl:grid-cols-3' : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
              {group.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name} className="p-5 rounded-2xl glass-card border border-white/60 dark:border-slate-700/60">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl p-3 border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800">
                        <Icon size={20} color={skill.color} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{skill.name}</p>
                        <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">{skill.level}</span>
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 whitespace-nowrap">{formatYears(skill.years)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {skill.usedAt.slice(0, 4).map((proj) => (
                        <span key={`${skill.name}-${proj}`} className="px-2 py-0.5 text-[11px] rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{proj}</span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
};

export default Skills;
