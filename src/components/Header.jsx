import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun } from 'lucide-react';

import { toggleDarkMode } from '../redux/slices/themeSlice';
import { navRoutes } from '../routes';

const Header = ({ activeRoute, onNavigate }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const go = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-page-light/80 backdrop-blur dark:border-slate-800/70 dark:bg-page-dark/80">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <a href="/" onClick={(e) => go(e, '/')} className="font-semibold tracking-tight">
          Pramod Goudar
        </a>

        <nav className="flex items-center gap-1 text-sm">
          {navRoutes.map(({ key, path, label }) => {
            const active = activeRoute === key;
            return (
              <a
                key={key}
                href={path}
                onClick={(e) => go(e, path)}
                aria-current={active ? 'page' : undefined}
                className={`hidden rounded-md px-2.5 py-1.5 transition-colors sm:block ${
                  active
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {label}
              </a>
            );
          })}
          <button
            type="button"
            onClick={() => dispatch(toggleDarkMode())}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-1 rounded-md p-2 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
