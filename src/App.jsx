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
      <div 
        className='bg-gradient-to-br from-stone-50 to-stone-100 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 min-h-screen'
      >
        <div 
          className='flex sm:gap-4 md:gap-0 flex-col md:flex-row'
        >
          <div 
            className='w-full md:w-[25%] md:sticky md:h-[100vh] md:pt-12 md:top-0 md:self-start border-r-2 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700 p-4 overflow-hidden overflow-y-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm'
          >
            <Sidebar />
          </div>
          <div 
            className='bg-gradient-to-br from-stone-50 to-stone-100 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700 lg:justify-center md:sticky md:w-[75%] md:self-start relative'
          >
            <MainContents />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
