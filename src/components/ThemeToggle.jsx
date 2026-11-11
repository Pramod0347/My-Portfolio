import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { toggleDarkMode } from '../redux/slices/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={darkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => dispatch(toggleDarkMode())}
      className="group relative flex h-8 w-[64px] cursor-pointer items-center rounded-full border border-slate-200/90 bg-slate-100/90 p-1 shadow-2xs backdrop-blur-md transition-colors duration-200 hover:border-cyan-500/40 hover:bg-slate-200/60 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 select-none"
    >
      {/* Background Track Icons (Muted when inactive) */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-slate-400 dark:text-slate-600">
        <Sun
          size={13}
          strokeWidth={2.2}
          className={`transition-all duration-200 ${
            !darkMode ? 'opacity-0 scale-75' : 'opacity-70 group-hover:opacity-100 group-hover:text-amber-400'
          }`}
        />
        <Moon
          size={13}
          strokeWidth={2.2}
          className={`transition-all duration-200 ${
            darkMode ? 'opacity-0 scale-75' : 'opacity-70 group-hover:opacity-100 group-hover:text-cyan-400'
          }`}
        />
      </div>

      {/* Kinetic Spring Gliding Pill Indicator */}
      <motion.div
        animate={{
          x: darkMode ? 28 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 32,
        }}
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm transition-colors duration-200 border-amber-200/80 bg-white text-amber-500 shadow-amber-500/10 dark:border-cyan-500/30 dark:bg-slate-800 dark:text-cyan-400 dark:shadow-cyan-500/20"
      >
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ rotate: darkMode ? -90 : 90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: darkMode ? 90 : -90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {darkMode ? (
            <Moon size={13} strokeWidth={2.5} className="drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]" />
          ) : (
            <Sun size={13} strokeWidth={2.5} className="drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
