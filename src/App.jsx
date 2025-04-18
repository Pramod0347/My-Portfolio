import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
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

  return (
    <Router>
      <div className='db:py-20 db:px-60 p-8 min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white'>
        <div className="flex justify-end gap-4">
          <ThemeToggle />
        </div>
        <div className='flex gap-4 flex-col tb:flex-row'>
          <div className='flex border-2 bg-stone-100 text-black dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 db:rounded-3xl db:justify-center rounded-xl p-4'>
            <Sidebar />
          </div>
          <div className='flex-1 border-2 bg-stone-100 text-black dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 db:rounded-3xl db:justify-center rounded-xl p-4 db:relative'>
            <MainContents />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
