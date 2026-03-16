import React from 'react';

const skills = [
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'Redis', icon: 'redis/redis-original.svg' },
  { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
  { name: 'Express.js', icon: 'express/express-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'Prisma', icon: 'prisma/prisma-original.svg' },
  { name: 'GraphQL', icon: 'graphql/graphql-plain.svg' },
  { name: 'Nginx', icon: 'nginx/nginx-original.svg' },
  { name: 'CI/CD', icon: 'githubactions/githubactions-original.svg', label: 'CI/CD (GitHub Actions)' },
  { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
];

const Skills = () => {
  return (
    <div className="w-full animate-fade-up">
      <p className="section-kicker">Capabilities</p>
      <h2 className="section-title">
        <span className="keyword">Backend-First</span> Skills
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:text-base">
        A focused stack centered on backend systems, APIs, cloud runtime, and the frontend tools I use when product delivery needs end-to-end ownership.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center rounded-[22px] border border-slate-200 bg-white px-4 py-5 text-center transition-all duration-300 hover:scale-[1.05] hover:border-teal-300 hover:shadow-[0_0_0_4px_rgba(20,184,166,0.08)] dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-teal-600 dark:hover:shadow-[0_0_0_4px_rgba(45,212,191,0.10)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                alt={skill.name}
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs font-semibold leading-snug text-slate-700 dark:text-slate-200 sm:text-sm">
              {skill.label || skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
