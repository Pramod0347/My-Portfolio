import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
 
import Sidebar from './components/Sidebar';
import MainContents from './components/MainContents';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Add smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen app-shell bg-white dark:bg-[#0b1220] text-slate-900 dark:text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 dark:bg-grid-dark dark:opacity-30" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-slate-100/70 via-white/40 to-transparent dark:from-slate-950/40 dark:via-transparent" />

        <div className="relative mx-auto flex max-w-[1500px] flex-col gap-4 px-3 py-3 sm:px-4 md:flex-row md:gap-6 md:px-4 md:py-4 xl:px-6">
          <aside className="w-full md:w-[31%] md:self-start md:sticky md:top-4">
              <div className='surface-outline overflow-visible border border-slate-200/70 p-4 glass-card rounded-[26px] dark:border-slate-700/60 sm:p-5 md:h-[calc(100vh-2rem)] md:rounded-[30px] md:p-6'>
                <Sidebar />
              </div>
          </aside>
          <div 
            className='relative min-w-0 md:w-[69%] md:self-start'
          >
            <MainContents />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
