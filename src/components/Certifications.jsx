import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Generative AI Prompt Design with Vertex AI',
    organization: 'Google Cloud',
    badge: 'Vertex AI · GenAI',
    issueDate: 'Issued 2024',
    description: [
      'Completed hands-on labs using Vertex AI Studio for Generative AI prompt engineering.',
      'Explored advanced techniques like model tuning, zero-shot, and few-shot learning.',
      'Built an AI-powered tagline generator application using Python and Vertex AI SDK.',
    ],
    highlights: [
      'Vertex AI Studio',
      'prompt engineering',
      'model tuning',
      'few-shot learning',
      'Python and Vertex AI SDK',
    ],
    link: 'https://www.cloudskillsboost.google/public_profiles/2db6c1af-fede-4828-8b15-475876db8639/badges/15341157',
  },
  {
    title: 'Build Real World AI Applications with Gemini and Imagen',
    organization: 'Google Cloud',
    badge: 'Multimodal AI · Gemini',
    issueDate: 'Issued 2024',
    description: [
      'Completed Google Cloud Skills Boost training in building AI applications with Gemini and Imagen.',
      'Implemented multimodal prompt strategies, structured outputs, and image generation pipelines.',
    ],
    highlights: [
      'Google Cloud Skills Boost',
      'Gemini and Imagen',
      'multimodal prompt strategies',
      'structured outputs',
    ],
    link: 'https://www.cloudskillsboost.google/public_profiles/2db6c1af-fede-4828-8b15-475876db8639/badges/15589348',
  },
];

const renderHighlightedText = (
  text,
  highlights = [],
  colorClass = 'font-semibold text-blue-600 dark:text-blue-300'
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

// Compact Full-Width Unboxed Certification Row
const CertificationRow = ({ cert, isLast }) => {
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

  return (
    <motion.article
      ref={rowRef}
      style={{ y: rowY, opacity: rowOpacity }}
      className={`w-full space-y-3 ${
        isLast ? 'pb-2' : 'border-b border-slate-200/80 pb-6 dark:border-slate-800/80'
      }`}
    >
      {/* Row 1: Header (Title in Unified Cyan, Subtitle in Sapphire Blue, Badge, Link) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 shadow-2xs">
            <Award size={20} />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-base sm:text-lg font-black tracking-tight text-cyan-600 dark:text-cyan-400 drop-shadow-[0_1px_8px_rgba(6,182,212,0.25)]">
                {cert.title}
              </h3>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-700 dark:text-blue-300">
                {cert.badge}
              </span>
            </div>
            <p className="font-mono text-xs text-blue-700/90 dark:text-blue-300/80 font-medium">
              <span className="font-semibold text-blue-600 dark:text-blue-300">{cert.organization}</span>
              {' · '}
              <span className="text-slate-500 dark:text-slate-400">{cert.issueDate}</span>
            </p>
          </div>
        </div>

        {/* Verification Link Button */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/40 bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-700 hover:bg-blue-500/20 dark:text-blue-300 transition-colors"
          >
            <span>View Credential</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Row 2: Highlights / Bullet Points */}
      <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-300 pl-1">
        {cert.description.map((point, i) => (
          <li key={i} className="flex items-start gap-2 leading-relaxed">
            <span className="text-blue-500 font-bold mt-0.5">➔</span>
            <span>
              {renderHighlightedText(
                point,
                cert.highlights,
                'font-semibold text-blue-600 dark:text-blue-300'
              )}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

const Certifications = () => {
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
              Certifications &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 1.25 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.22 }}
              className="bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-400 dark:from-blue-300 dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent font-black inline-block drop-shadow-[0_2px_12px_rgba(59,130,246,0.25)]"
            >
              Achievements
            </motion.span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Specialized engineering credentials in{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Generative AI prompt design</span>,{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Vertex AI Studio</span>, and{' '}
            <span className="font-semibold text-sky-600 dark:text-sky-400">multimodal application deployment</span>.
          </p>
        </div>

        {/* Verification Status Pill */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-700 dark:text-blue-300">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
            Google Cloud Verified
          </span>
        </div>
      </motion.div>

      {/* Unboxed Full-Width Certification Rows */}
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <CertificationRow
            key={cert.title}
            cert={cert}
            isLast={index === certifications.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
