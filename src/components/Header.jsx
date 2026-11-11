import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Home,
  Layers3,
  Mail,
  Menu,
  X,
} from 'lucide-react';

import ThemeToggle from './ThemeToggle';
import { routes } from '../routes';

const icons = {
  home: Home,
  experience: BriefcaseBusiness,
  skills: Code2,
  systems: Layers3,
  certifications: Award,
  projects: Code2,
  education: GraduationCap,
  contact: Mail,
};

const Header = ({ activeRoute, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (event, path, key) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;
    event.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(path, key);
  };

  return (
    <>
      <header className="sticky top-0 z-50 mx-auto flex w-full justify-center px-3 sm:px-6 pt-3 sm:pt-4 pb-2 pointer-events-none transition-all duration-300">
        <div className="pointer-events-auto flex max-w-full items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 p-1.5 shadow-xl shadow-slate-200/40 backdrop-blur-xl transition-all duration-300 dark:border-slate-800/90 dark:bg-[#0c1017]/95 dark:shadow-black/60">
          {/* Desktop Navigation Menus (Bigger Font, High-Contrast Highlight) */}
          <nav
            aria-label="Portfolio navigation"
            className="nav-links hidden lg:flex items-center gap-1.5 py-0.5 px-1.5"
          >
            {routes.map(({ key, path, label }) => {
              const Icon = icons[key];
              const isActive = activeRoute === key;

              return (
                <a
                  key={key}
                  href={path}
                  onClick={(event) => navigate(event, path, key)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`nav-link-item flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-md dark:border dark:border-cyan-400/50 dark:bg-cyan-500/25 dark:text-cyan-200 dark:shadow-[0_0_16px_rgba(6,182,212,0.3)]'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white'
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    size={15}
                    strokeWidth={isActive ? 2.3 : 1.9}
                    className={isActive ? 'text-cyan-400' : 'text-slate-400 dark:text-slate-400'}
                  />
                  <span>{label}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger Button (Visible on screens < lg) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={16} className="text-cyan-600 dark:text-cyan-400" />
              <span>Menu</span>
            </button>
          </div>

          {/* Subtle divider before Theme Toggle */}
          <span className="h-5 w-px bg-slate-200 dark:bg-slate-800 shrink-0" aria-hidden="true" />

          {/* Dark/Light Theme Toggle */}
          <div className="shrink-0 pr-1">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Navigation Modal Window */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Menu Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl dark:border-slate-800/90 dark:bg-[#0c1017]/95"
            >
              <div className="mb-4 flex items-center justify-between border-b border-slate-200/60 pb-3 dark:border-slate-800/60">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                  Navigation Menu
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  aria-label="Close menu window"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {routes.map(({ key, path, label }) => {
                  const Icon = icons[key];
                  const isActive = activeRoute === key;

                  return (
                    <a
                      key={key}
                      href={path}
                      onClick={(event) => navigate(event, path, key)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-150 ${
                        isActive
                          ? 'bg-slate-950 text-white shadow-sm dark:bg-cyan-500/25 dark:text-cyan-200 dark:border dark:border-cyan-400/40'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white'
                      }`}
                    >
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                        <Icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />
                      </span>
                      <span className="flex-1">{label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
