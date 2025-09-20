import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      <motion.div 
        className='bg-gradient-to-br from-stone-50 to-stone-100 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 min-h-screen'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className='flex sm:gap-4 md:gap-0 flex-col md:flex-row'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div 
            className='w-full md:w-[25%] md:sticky md:h-[100vh] md:pt-12 md:top-0 md:self-start border-r-2 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700 p-4 overflow-hidden overflow-y-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Sidebar />
          </motion.div>
          <motion.div 
            className='bg-gradient-to-br from-stone-50 to-stone-100 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700 lg:justify-center md:sticky md:w-[75%] md:self-start relative'
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <MainContents />
          </motion.div>
        </motion.div>
      </motion.div>
    </Router>
  );
}

export default App;
