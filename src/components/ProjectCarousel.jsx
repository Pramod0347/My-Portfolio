import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import ProjectCover from './ProjectCover';

const AUTOPLAY_MS = 6000;
const SWIPE_PX = 60;
const isTest = process.env.NODE_ENV === 'test';

const ProjectCarousel = ({ projects }) => {
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = projects.length;

  const go = useCallback(
    (dir) => setState(([i]) => [(i + dir + count) % count, dir]),
    [count]
  );
  const goTo = (i) => setState(([cur]) => [i, i > cur ? 1 : -1]);

  useEffect(() => {
    if (paused || reduceMotion || isTest) return undefined;
    const t = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, reduceMotion, go]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  const p = projects[index];
  const offset = reduceMotion ? 0 : 40;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.article
            key={p.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${count}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * offset }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * offset }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            drag={reduceMotion ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_PX) go(1);
              else if (info.offset.x > SWIPE_PX) go(-1);
            }}
            className="grid cursor-grab active:cursor-grabbing md:grid-cols-[1.4fr_1fr]"
          >
            <div className="aspect-video overflow-hidden border-b border-slate-200 dark:border-slate-800 md:border-b-0 md:border-r">
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  draggable={false}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <ProjectCover title={p.title} flow={p.flow} highlight={p.highlight} focus={p.focus} />
              )}
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <p className="font-mono text-xs text-slate-400">
                {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">{p.description}</p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-slate-700 transition-colors hover:text-accent dark:text-slate-300 dark:hover:text-accent-soft"
                    >
                      {l.label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-2">
          {projects.map((proj, i) => (
            <button
              key={proj.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${proj.title}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-slate-900 dark:bg-slate-100' : 'w-3 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className="btn-ghost px-2.5">
            <ArrowLeft size={16} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next slide" className="btn-ghost px-2.5">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
