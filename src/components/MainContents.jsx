import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import Certifications from './Certifications';
import Education from './Education';
import SystemDesign from './SystemDesign';

const sections = [
  {
    key: 'home',
    label: 'Overview',
    component: AboutMe,
    badge: '// 00. OVERVIEW & TELEMETRY',
    badgeColor: 'text-cyan-600 dark:text-cyan-400',
    dotColor: 'bg-cyan-500',
  },
  {
    key: 'skills',
    label: 'Skills',
    component: Skills,
    badge: '// 01. TECHNICAL ARSENAL',
    badgeColor: 'text-sky-600 dark:text-sky-400',
    dotColor: 'bg-sky-500',
  },
  {
    key: 'experience',
    label: 'Experience',
    component: Experience,
    badge: '// 02. WORK HISTORY & IMPACT',
    badgeColor: 'text-emerald-600 dark:text-emerald-400',
    dotColor: 'bg-emerald-500',
  },
  {
    key: 'projects',
    label: 'Projects',
    component: Projects,
    badge: '// 03. PRODUCTION CODE & ARCHITECTURE',
    badgeColor: 'text-violet-600 dark:text-violet-400',
    dotColor: 'bg-violet-500',
  },
  {
    key: 'systems',
    label: 'Systems',
    component: SystemDesign,
    badge: '// 04. DISTRIBUTED ARCHITECTURE',
    badgeColor: 'text-amber-600 dark:text-amber-400',
    dotColor: 'bg-amber-500',
  },
  {
    key: 'certifications',
    label: 'Certifications',
    component: Certifications,
    badge: '// 05. VERIFIED CREDENTIALS',
    badgeColor: 'text-blue-600 dark:text-blue-400',
    dotColor: 'bg-blue-500',
  },
  {
    key: 'education',
    label: 'Education',
    component: Education,
    badge: '// 06. ACADEMIC FOUNDATION',
    badgeColor: 'text-teal-600 dark:text-teal-400',
    dotColor: 'bg-teal-500',
  },
  {
    key: 'contact',
    label: 'Contact',
    component: Contact,
    badge: '// 07. DIRECT INQUIRIES',
    badgeColor: 'text-emerald-600 dark:text-emerald-400',
    dotColor: 'bg-emerald-500',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const MainContents = ({ activeRoute, onNavigate, onSectionVisible }) => {
  const containerRef = useRef(null);

  // Rock-solid Scroll-Spy for precision section tracking in the viewport
  useEffect(() => {
    if (process.env.NODE_ENV === 'test') return;

    let ticking = false;

    const updateActiveSection = () => {
      const sectionElements = containerRef.current?.querySelectorAll('[data-section-key]');
      if (!sectionElements || sectionElements.length === 0) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. If at very top of the page, activate 'home'
      if (scrollPosition < 180) {
        onSectionVisible?.('home');
        return;
      }

      // 2. If at very bottom of page, activate the last section ('contact')
      if (scrollPosition + windowHeight >= documentHeight - 60) {
        const lastKey = sectionElements[sectionElements.length - 1].getAttribute('data-section-key');
        if (lastKey && onSectionVisible) {
          onSectionVisible(lastKey);
        }
        return;
      }

      // 3. Focal line: 30% down from viewport top (comfortably below sticky header)
      const focalLine = windowHeight * 0.30;
      let currentActiveKey = null;

      // Find section currently spanning across the focal reading line
      for (let i = 0; i < sectionElements.length; i += 1) {
        const el = sectionElements[i];
        const rect = el.getBoundingClientRect();
        if (rect.top <= focalLine && rect.bottom >= focalLine) {
          currentActiveKey = el.getAttribute('data-section-key');
          break;
        }
      }

      // 4. Fallback: if in transition gaps, pick the section closest to focal line
      if (!currentActiveKey) {
        let minDistance = Infinity;
        for (let i = 0; i < sectionElements.length; i += 1) {
          const el = sectionElements[i];
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - focalLine);
          if (dist < minDistance) {
            minDistance = dist;
            currentActiveKey = el.getAttribute('data-section-key');
          }
        }
      }

      if (currentActiveKey && onSectionVisible) {
        onSectionVisible(currentActiveKey);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run on initial mount, resize, and scroll
    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [onSectionVisible]);

  return (
    <div ref={containerRef} className="portfolio-infinite-flow flex flex-col space-y-16 md:space-y-24">
      {/* Infinite Scroll Sections with Viewport Animations */}
      {sections.map(({ key, component: Component, badge, badgeColor, dotColor }) => (
        <motion.section
          key={key}
          id={key}
          data-section-key={key}
          initial={key === 'home' || key === 'skills' ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={key === 'home' || key === 'skills' ? undefined : sectionVariants}
          className="section-anchor scroll-mt-24 w-full"
        >
          <div className="w-full">
            <div className="mb-6 flex items-center justify-between border-b border-slate-200/70 pb-3 dark:border-slate-800/80">
              <span className={`font-mono text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 ${badgeColor}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${dotColor} animate-pulse`} />
                {badge}
              </span>
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                [{key.toUpperCase()}]
              </span>
            </div>
            <Component onNavigate={onNavigate} />
          </div>
        </motion.section>
      ))}

      {/* Developer Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 w-full border-t border-slate-200/80 pt-8 pb-12 dark:border-slate-800/80"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-950 font-mono text-xs font-bold text-white shadow-sm dark:bg-slate-800">
              PG<span className="text-cyan-400">.</span>
            </span>
            <div className="text-left">
              <p className="font-display text-sm font-bold text-slate-900 dark:text-white">
                Developer Console
              </p>
              <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                AI Software Engineer · Bengaluru, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Pramod0347"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-cyan-400"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com/in/pramod-goudar-a35605169"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:pramod.goudar.dev@gmail.com"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-cyan-400"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 font-mono text-[11px] font-semibold text-slate-700 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              Top <ArrowUp size={12} />
            </button>
          </div>
        </div>

        <p className="mt-4 border-t border-slate-200/60 pt-4 font-mono text-[10px] text-slate-500 dark:border-slate-800/60 dark:text-slate-500">
          Engineered with React, Tailwind CSS, JetBrains Mono & Redux Toolkit · 2026 Production Release
        </p>
      </motion.footer>
    </div>
  );
};

export default MainContents;
