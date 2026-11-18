import React from 'react';

import Section from './Section';
import { experience } from '../data';

const Experience = () => (
  <Section id="experience" index={1} eyebrow="Experience" heading="Where I've worked.">
    <ol>
      {experience.map((job, i) => (
        <li key={job.company} className="grid sm:grid-cols-[9rem_1fr] sm:gap-6">
          <p className="pb-2 pt-1 font-mono text-xs text-slate-500 dark:text-slate-400">{job.period}</p>

          <div
            className={`relative max-w-2xl border-l border-slate-200 pl-8 dark:border-slate-800 ${
              i === experience.length - 1 ? 'pb-2' : 'pb-14'
            }`}
          >
            <span
              className={`absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full ring-4 ring-page-light dark:ring-page-dark ${
                i === 0 ? 'bg-accent' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            />
            <div className="flex items-center gap-3">
              <img
                src={job.logo}
                alt=""
                loading="lazy"
                className="h-8 w-8 shrink-0 rounded-md border border-slate-200 bg-white object-contain p-0.5 dark:border-slate-800"
              />
              <h3 className="font-medium leading-tight">
                {job.role}
                <span className="text-slate-500 dark:text-slate-400">
                  {' '}
                  · {job.company}
                  {job.team ? ` (${job.team})` : ''}
                </span>
              </h3>
            </div>

            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
