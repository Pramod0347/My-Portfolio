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

  return (
    <Router>
      <div className='bg-stone-100 text-gray-700 dark:bg-gray-700 dark:text-stone-100 md:px-4 lg:px-8'>
        <div className='flex sm:gap-4 md:gap-0 flex-col md:flex-row'>
          <div className='w-full md:w-[20%] md:sticky md:h-[100vh] md:pt-12 md:top-0 md:self-start border-r-2 text-gray-700 dark:text-stone-100 border-gray-300 dark:border-gray-600 p-4 overflow-hidden overflow-y-auto'>
            <Sidebar />
          </div>
          <div className='bg-stone-100 text-gray-700 dark:bg-gray-700 dark:text-stone-100 border-gray-300 dark:border-gray-600 lg:justify-center md:sticky md:w-[80%] md:self-start relative'>
            <MainContents />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
