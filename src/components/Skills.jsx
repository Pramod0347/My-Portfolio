import React from 'react';
import { getSkillIcon } from '../skillIcons';

import Section from './Section';
import { skills } from '../data';

const Skills = () => (
  <Section id="skills" index={4} eyebrow="Skills" heading="Tools I work with.">
    <div className="space-y-10">
      {skills.map(({ group, items }) => (
        <div key={group}>
          <h3 className="mb-4 font-mono text-xs text-slate-500 dark:text-slate-400">{group}</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((name) => {
              const [Icon, color, darkColor] = getSkillIcon(name);
              return (
                <li
                  key={name}
                  style={{ '--brand': color, '--brand-dark': darkColor }}
                  className="group flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                >
                  <Icon
                    size={20}
                    className="shrink-0 text-slate-400 transition-colors group-hover:text-[color:var(--brand)] dark:group-hover:text-[color:var(--brand-dark)]"
                  />
                  <span className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">{name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
