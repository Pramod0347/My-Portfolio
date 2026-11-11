import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Calendar, GraduationCap, School } from 'lucide-react';

const educationData = [
  {
    title: 'Bachelor of Engineering',
    institution: 'Sir M Visvesvaraya Institute of Technology',
    location: 'Bengaluru, India',
    duration: '2018 – 2022',
    icon: GraduationCap,
    badge: 'Engineering Degree',
    details: [
      'Comprehensive curriculum covering distributed systems, data structures, algorithms, and computer network architecture.',
      'Active focus on applied software development, object-oriented programming, and high-performance databases.',
    ],
    highlights: [
      'distributed systems',
      'data structures',
      'algorithms',
      'computer network architecture',
      'high-performance databases',
    ],
  },
  {
    title: 'All India Secondary & Senior Secondary (CBSE)',
    institution: 'Sainik School Kodagu',
    location: 'Karnataka, India',
    duration: '2011 – 2018',
    icon: School,
    badge: 'Military Boarding',
    details: [
      'Premier military boarding school under the Ministry of Defence, fostering cadet leadership, discipline, and analytical problem-solving.',
      'Rigorous academic training in advanced mathematics, physical sciences, and team leadership.',
    ],
    highlights: [
      'Ministry of Defence',
      'cadet leadership',
      'discipline',
      'analytical problem-solving',
      'advanced mathematics',
    ],
  },
];

const renderHighlightedText = (
  text,
  highlights = [],
  colorClass = 'font-semibold text-teal-600 dark:text-teal-300'
) => {
  if (!highlights || highlights.length === 0) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className={colorClass}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

// Compact Full-Width Unboxed Education Row
const EducationRow = ({ edu, isLast }) => {
  const rowRef = useRef(null);

  // Track each item's viewport scroll progress for smooth fade-in / fade-out
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const rowY = useTransform(smoothProgress, [0.03, 0.25, 0.75, 0.97], [40, 0, 0, -40]);
  const rowOpacity = useTransform(smoothProgress, [0.03, 0.20, 0.80, 0.97], [0, 1, 1, 0]);

  const Icon = edu.icon;

  return (
    <motion.article
      ref={rowRef}
      style={{ y: rowY, opacity: rowOpacity }}
      className={`w-full space-y-3 ${
        isLast ? 'pb-2' : 'border-b border-slate-200/80 pb-6 dark:border-slate-800/80'
      }`}
    >
      {/* Row 1: Header (Title in Unified Cyan, Subtitle in Teal, Duration Badge) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 shadow-2xs">
            <Icon size={20} />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-base sm:text-lg font-black tracking-tight text-cyan-600 dark:text-cyan-400 drop-shadow-[0_1px_8px_rgba(6,182,212,0.25)]">
                {edu.title}
              </h3>
              <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-teal-700 dark:text-teal-300">
                {edu.badge}
              </span>
            </div>
            <p className="font-mono text-xs text-teal-700/90 dark:text-teal-300/80 font-medium">
              <span className="font-semibold text-teal-600 dark:text-teal-300">{edu.institution}</span>
              {' · '}
              <span className="text-slate-500 dark:text-slate-400">{edu.location}</span>
            </p>
          </div>
        </div>

        {/* Duration Badge */}
        <div className="flex items-center gap-1.5 self-start sm:self-center font-mono text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-teal-700 dark:text-teal-300">
            <Calendar size={12} />
            <span>{edu.duration}</span>
          </span>
        </div>
      </div>

      {/* Row 2: Highlights / Bullet Points */}
      <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-300 pl-1">
        {edu.details.map((point, i) => (
          <li key={i} className="flex items-start gap-2 leading-relaxed">
            <span className="text-teal-500 font-bold mt-0.5">➔</span>
            <span>
              {renderHighlightedText(
                point,
                edu.highlights,
                'font-semibold text-teal-600 dark:text-teal-300'
              )}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

const Education = () => {
  const headerRef = useRef(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start end', 'end start'],
  });

  const smoothHeader = useSpring(headerProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const headerY = useTransform(smoothHeader, [0.02, 0.35, 0.65, 0.95], [40, 0, 0, -40]);
  const headerOpacity = useTransform(smoothHeader, [0.02, 0.28, 0.72, 0.95], [0, 1, 1, 0]);

  return (
    <div className="w-full space-y-7">
      {/* Section Header with Kinetic Heading Highlight */}
      <motion.div
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800/80"
      >
        <div>
          <h2 className="section-title flex flex-wrap items-center gap-x-2.5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Academic
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 1.25 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.22 }}
              className="bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 dark:from-teal-300 dark:via-cyan-300 dark:to-emerald-300 bg-clip-text text-transparent font-black inline-block drop-shadow-[0_2px_12px_rgba(20,184,166,0.25)]"
            >
              Foundation
            </motion.span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Analytical training and core engineering principles from{' '}
            <span className="font-semibold text-teal-600 dark:text-teal-400">computer science fundamentals</span> to{' '}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">military cadet leadership</span>.
          </p>
        </div>

        {/* Verification Status Pill */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-teal-500/30 bg-teal-500/10 px-3 py-1 font-mono text-xs font-semibold text-teal-700 dark:text-teal-300">
            <GraduationCap className="h-3.5 w-3.5 text-teal-500 dark:text-teal-400" />
            B.E. Engineering · Sainik School
          </span>
        </div>
      </motion.div>

      {/* Unboxed Full-Width Education Rows */}
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <EducationRow
            key={edu.title}
            edu={edu}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
