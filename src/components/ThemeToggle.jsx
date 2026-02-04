import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themeSlice';
 

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      onClick={() => dispatch(toggleDarkMode())}
      className="w-20 h-10 flex items-center px-1 rounded-full cursor-pointer transition-all duration-300 relative
        bg-gradient-to-r from-amber-100 via-amber-200 to-emerald-100 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 border border-white/70 dark:border-slate-700/60 shadow-soft hover:shadow-lift"
      aria-label="Toggle Theme"
    >
      {/* Icons */}
      <div className="absolute w-full flex justify-between items-center px-3 text-xl pointer-events-none select-none">
        <span role="img" aria-label="moon" className="drop-shadow-sm">🌙</span>
        <span role="img" aria-label="sun" className="drop-shadow-sm">☀️</span>
      </div>

      {/* Toggle Ball */}
      <div
        className={`w-8 h-8 rounded-full bg-white dark:bg-slate-200 shadow-lg z-10 border border-white/80 dark:border-slate-300 transform transition-transform duration-300 ${darkMode ? 'translate-x-10' : 'translate-x-0'}`}
      />
    </div>
  );
};

export default ThemeToggle;
