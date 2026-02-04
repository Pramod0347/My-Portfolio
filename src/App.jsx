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

  // Apply dark mode by default on initial load
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
  }, []);

  // Add smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen app-shell bg-[#F7F3EC] dark:bg-[#0B1220] text-slate-900 dark:text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:bg-grid-dark dark:opacity-40" />

        <div className="relative flex flex-col md:flex-row sm:gap-6">
          <aside className="w-full md:w-[28%] md:self-start md:sticky md:top-4">
              <div className='max-h-[calc(100vh-2rem)] border border-slate-200/70 dark:border-slate-700/60 p-4 md:p-6 overflow-y-auto glass-card rounded-r-[24px] rounded-l-none overflow-hidden'>
                <Sidebar />
              </div>
          </aside>
          <div 
            className='md:w-[72%] md:self-start relative'
          >
            <MainContents />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
