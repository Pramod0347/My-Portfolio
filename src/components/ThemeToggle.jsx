import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themeSlice';
 

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      onClick={() => dispatch(toggleDarkMode())}
      className="w-20 h-10 flex items-center px-1 rounded-full cursor-pointer transition-all duration-300 relative
        bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 border-2 border-transparent hover:border-yellow-400 shadow-lg hover:shadow-xl"
      aria-label="Toggle Theme"
    >
      {/* Icons */}
      <div className="absolute w-full flex justify-between items-center px-3 text-xl pointer-events-none select-none">
        <span role="img" aria-label="moon" className="drop-shadow-sm">🌙</span>
        <span role="img" aria-label="sun" className="drop-shadow-sm">☀️</span>
      </div>

      {/* Toggle Ball */}
      <div
        className={`w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-200 dark:to-gray-300 shadow-lg z-10 border border-gray-200 dark:border-gray-400 transform transition-transform duration-300 ${darkMode ? 'translate-x-10' : 'translate-x-0'}`}
      />
    </div>
  );
};

export default ThemeToggle;
