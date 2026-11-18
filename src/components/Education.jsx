import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import Section from './Section';
import { certifications, education } from '../data';

const Row = ({ label, children }) => (
  <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
    <p className="pt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">{label}</p>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const Education = () => (
  <Section id="education" index={5} eyebrow="Education" heading="Learning & certifications.">
    <div className="space-y-8">
      <Row label="Education">
        {education.map((e) => (
          <li key={e.title}>
            <p className="font-medium">{e.title}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{e.place}</p>
          </li>
        ))}
      </Row>
      <Row label="Certifications">
        {certifications.map((c) => (
          <li key={c.title}>
            <a href={c.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-1 font-medium">
              <span className="link">{c.title}</span>
              <ArrowUpRight size={14} className="mt-1 shrink-0 text-slate-400 group-hover:text-accent" />
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400">{c.place}</p>
          </li>
        ))}
      </Row>
    </div>
  </Section>
);

export default Education;
