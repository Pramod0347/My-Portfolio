import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  FileText,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const dockItems = [
  {
    id: 'resume',
    label: 'Download Resume',
    subtitle: 'PDF · Updated 2026',
    icon: FileText,
    href: '/pramod_goudar.pdf',
    download: true,
    color: 'from-blue-500 to-cyan-500',
    hoverBorder: 'hover:border-cyan-400',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Profile',
    subtitle: 'in/pramod-goudar-a35605169',
    icon: Linkedin,
    href: 'https://linkedin.com/in/pramod-goudar-a35605169',
    external: true,
    color: 'from-sky-500 to-blue-600',
    hoverBorder: 'hover:border-sky-400',
  },
  {
    id: 'github',
    label: 'GitHub Repositories',
    subtitle: 'github.com/Pramod0347',
    icon: Github,
    href: 'https://github.com/Pramod0347',
    external: true,
    color: 'from-purple-500 to-indigo-600',
    hoverBorder: 'hover:border-purple-400',
  },
  {
    id: 'email',
    label: 'Copy Email',
    subtitle: 'pramod.goudar.dev@gmail.com',
    icon: Mail,
    isCopy: true,
    color: 'from-emerald-500 to-teal-600',
    hoverBorder: 'hover:border-emerald-400',
  },
];

const getInitialCenterOffset = () => {
  if (typeof window === 'undefined') return { x: 0, y: 0 };
  const w = window.innerWidth;
  const h = window.innerHeight;
  const offsetRight = w < 640 ? 20 : 28;
  const offsetBottom = w < 640 ? 20 : 28;
  const buttonSize = 56;
  return {
    x: -(w / 2 - offsetRight - buttonSize / 2),
    y: -(h / 2 - offsetBottom - buttonSize / 2),
  };
};

const FloatingActionDock = ({ onStartMoving }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dockState, setDockState] = useState('intro'); // 'intro' -> 'moving' -> 'docked'
  const [centerOffset, setCenterOffset] = useState(getInitialCenterOffset);
  const [showArrivalBadge, setShowArrivalBadge] = useState(false);
  const dockRef = useRef(null);
  const onStartMovingRef = useRef(onStartMoving);

  useEffect(() => {
    onStartMovingRef.current = onStartMoving;
  }, [onStartMoving]);

  // Measure center coordinates dynamically on resize
  useEffect(() => {
    const updateCenter = () => {
      setCenterOffset(getInitialCenterOffset());
    };
    window.addEventListener('resize', updateCenter);

    // Initial cinematic entrance choreography:
    // 0ms - 950ms: Blank screen with dock centered
    // 950ms: Trigger start of flight & reveal page content simultaneously
    // 2200ms+: Settle docked into bottom-right
    const moveTimer = setTimeout(() => {
      setDockState('moving');
      onStartMovingRef.current?.();
    }, 950);

    const dockTimer = setTimeout(() => {
      setDockState('docked');
      setShowArrivalBadge(true);
    }, 2200);

    const arrivalBadgeTimer = setTimeout(() => {
      setShowArrivalBadge(false);
    }, 4500);

    return () => {
      window.removeEventListener('resize', updateCenter);
      clearTimeout(moveTimer);
      clearTimeout(dockTimer);
      clearTimeout(arrivalBadgeTimer);
    };
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dockRef.current && !dockRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = (e) => {
    if (typeof confetti === 'function' && e?.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / (window.innerWidth || 1);
      const y = (rect.top + rect.height / 2) / (window.innerHeight || 1);

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#06b6d4', '#22d3ee', '#10b981', '#38bdf8'],
      });
    }

    navigator.clipboard?.writeText('pramod.goudar.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleTriggerClick = () => {
    // If clicked early while moving/intro, jump straight to docked
    if (dockState !== 'docked') {
      setDockState('docked');
      setShowArrivalBadge(false);
      onStartMoving?.();
    }
    setIsOpen((prev) => !prev);
  };

  const isIntro = dockState === 'intro';
  const isMoving = dockState === 'moving';

  return (
    <motion.aside
      ref={dockRef}
      aria-label="Quick actions dock"
      initial={{
        x: centerOffset.x,
        y: centerOffset.y,
        scale: 0.9,
        opacity: 0,
      }}
      animate={{
        x: isIntro ? centerOffset.x : 0,
        y: isIntro ? centerOffset.y : 0,
        scale: isIntro ? 1.08 : 1,
        opacity: 1,
      }}
      transition={{
        x: {
          type: 'spring',
          stiffness: 85,
          damping: 19,
          mass: 0.95,
        },
        y: {
          type: 'spring',
          stiffness: 85,
          damping: 19,
          mass: 0.95,
        },
        scale: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.35,
        },
      }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end select-none"
    >
      {/* 1. Page Load Intro Stage: Welcome Card shown on Blank Screen */}
      <AnimatePresence>
        {isIntro && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.85,
              transition: { duration: 0.28, ease: 'easeIn' },
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex flex-col items-center gap-3 rounded-2xl border border-cyan-500/40 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl dark:border-cyan-500/30 dark:bg-[#0c1017]/95 text-center min-w-[270px] sm:min-w-[310px]"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                SYSTEM_ONLINE · READY
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1.5">
                <span className="font-display text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                  Developer Actions
                </span>
                <ShieldCheck size={14} className="text-emerald-500" />
              </div>
              <p className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                AI Software Engineer
              </p>
            </div>

            {/* Quick Action Rails Preview */}
            <div className="flex items-center gap-2 pt-1 border-t border-slate-200/80 dark:border-slate-800/80 w-full justify-center">
              {dockItems.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.id}
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-700 shadow-2xs dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    title={item.label}
                  >
                    <Icon size={14} />
                  </span>
                );
              })}
            </div>
            <span className="font-mono text-[9px] text-slate-400 dark:text-slate-500">
              Docking to quick actions...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Organized Vertical Stacking Menu (Opened on Click) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 flex flex-col items-end gap-2.5 max-w-[calc(100vw-2.5rem)]"
          >
            {dockItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      delay: (dockItems.length - 1 - index) * 0.04,
                      duration: 0.25,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: 15,
                    transition: { duration: 0.15 },
                  }}
                >
                  {item.isCopy ? (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className={`group flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 pr-4 shadow-2xl backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cyan-500/10 dark:border-slate-800/90 dark:bg-[#0c1017]/95 ${item.hoverBorder}`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
                        {copied ? <Check size={18} strokeWidth={2.4} /> : <Icon size={18} strokeWidth={2.2} />}
                      </span>
                      <div className="text-left">
                        <p className="font-display text-xs font-bold text-slate-900 dark:text-white">
                          {copied ? 'Copied to Clipboard! 🎉' : item.label}
                        </p>
                        <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      download={item.download ? true : undefined}
                      className={`group flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 pr-4 shadow-2xl backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cyan-500/10 dark:border-slate-800/90 dark:bg-[#0c1017]/95 ${item.hoverBorder}`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}
                      >
                        <Icon size={18} strokeWidth={2.2} />
                      </span>
                      <div className="text-left min-w-[130px]">
                        <div className="flex items-center gap-1">
                          <p className="font-display text-xs font-bold text-slate-900 dark:text-white">
                            {item.label}
                          </p>
                          <ArrowUpRight size={12} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Arrival notification pill right after landing */}
      <AnimatePresence>
        {showArrivalBadge && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-2 pointer-events-none rounded-xl border border-cyan-500/30 bg-white/95 px-3 py-1 font-mono text-[11px] font-semibold text-cyan-600 shadow-lg backdrop-blur-md dark:border-cyan-400/30 dark:bg-[#0c1017]/95 dark:text-cyan-400"
          >
            <span className="flex items-center gap-1.5">
              <Sparkles size={12} className="text-cyan-500" />
              Quick Connect Dock
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        type="button"
        onClick={handleTriggerClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? 'Close quick links menu' : 'Open developer quick links'}
        aria-expanded={isOpen}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-200/90 bg-white/95 shadow-2xl backdrop-blur-xl transition-colors duration-200 hover:border-cyan-500 dark:border-slate-700/90 dark:bg-[#0c1017]/95 dark:hover:border-cyan-400 cursor-pointer"
      >
        {/* Glow ambient ring */}
        <span
          className={`absolute inset-0 -z-10 rounded-full bg-cyan-500/25 blur-md transition-opacity duration-300 dark:bg-cyan-400/30 ${
            isMoving ? 'opacity-100 scale-125' : 'group-hover:opacity-100'
          }`}
        />

        {/* Live status dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>

        {/* Dynamic Emoji Icon or Close Cross */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-slate-700 dark:text-slate-200"
            >
              <X size={22} strokeWidth={2.4} />
            </motion.span>
          ) : (
            <motion.span
              key="emoji"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-2xl select-none"
              role="img"
              aria-label="Developer avatar emoji"
            >
              👨‍💻
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.aside>
  );
};

export default FloatingActionDock;
