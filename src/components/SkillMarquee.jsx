import React from 'react';

import { getSkillIcon } from '../skillIcons';
import { highlightedSkills } from '../data';

const Item = ({ name }) => {
  const [Icon, color, darkColor] = getSkillIcon(name);
  return (
    <li
      style={{ '--brand': color, '--brand-dark': darkColor }}
      className="flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white/70 py-2 pl-3 pr-5 dark:border-white/10 dark:bg-white/[0.03]"
    >
      <Icon size={20} className="shrink-0 text-[color:var(--brand)] dark:text-[color:var(--brand-dark)]" />
      <span className="whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-200">{name}</span>
    </li>
  );
};

// Endless strip of highlighted skills. The second copy is for the seamless loop only,
// so it is hidden from screen readers. Pauses on hover; static when reduced motion is set.
const SkillMarquee = () => (
  <div className="marquee marquee-fade overflow-hidden py-8" aria-label="Highlighted skills">
    <div className="marquee-track flex w-max">
      {[0, 1].map((copy) => (
        <ul key={copy} aria-hidden={copy === 1 ? 'true' : undefined} className="flex shrink-0 gap-3 pr-3">
          {highlightedSkills.map((name) => (
            <Item key={name} name={name} />
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default SkillMarquee;
