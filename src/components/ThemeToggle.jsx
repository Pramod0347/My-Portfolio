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
      className="w-16 h-8  bg-gray-700 dark:bg-gray-300 rounded-full flex items-center px-1 relative cursor-pointer transition-colors duration-300"
    >
      {/* Icons on both ends */}
      <div className="w-full flex justify-between items-center absolute z-10 px-2 text-sm">
        <span role="img" aria-label="moon">🌙</span>
        <span role="img" aria-label="sun">☀️</span>
      </div>

      {/* Toggle Ball */}
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-lg z-20"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        animate={{ x: darkMode ? 0 : 32 }}
      />
    </div>
  );
};

export default ThemeToggle;
