import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleDarkMode())}
      className="relative flex h-10 w-[78px] items-center rounded-full border border-slate-200 bg-slate-100 px-1 transition-all duration-300 hover:border-sky-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-700 dark:hover:bg-slate-800"
      aria-label="Toggle Theme"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3 text-sm">
        <span role="img" aria-label="sun">☀️</span>
        <span role="img" aria-label="moon">🌙</span>
      </div>
      <div
        className={`z-10 h-8 w-8 transform rounded-full border border-slate-200 bg-white shadow-sm transition-transform duration-300 dark:border-slate-600 dark:bg-slate-200 ${darkMode ? 'translate-x-9' : 'translate-x-0'}`}
      />
    </button>
  );
};

export default ThemeToggle;
