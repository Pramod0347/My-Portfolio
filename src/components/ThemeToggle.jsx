import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themeSlice';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      onClick={() => dispatch(toggleDarkMode())}
      className="w-20 h-10 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 relative
        bg-gray-600 dark:bg-gray-700 border-2 border-transparent hover:border-yellow-400"
      aria-label="Toggle Theme"
    >
      {/* Icons */}
      <div className="absolute w-full flex justify-between items-center px-3 text-xl pointer-events-none select-none">
        <span role="img" aria-label="moon">🌙</span>
        <span role="img" aria-label="sun">☀️</span>
      </div>

      {/* Toggle Ball */}
      <motion.div
        className="w-8 h-8 rounded-full bg-white dark:bg-stone-200 shadow-md z-10"
        layout
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        animate={{ x: darkMode ? 0 : 40 }}
      />
    </div>
  );
};

export default ThemeToggle;
