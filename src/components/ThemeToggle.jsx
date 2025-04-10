import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/themeSlice';

const ThemeToggle = () => {

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div>
      <button
      onClick={() => dispatch(toggleDarkMode())}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-white dark:text-black"
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
    </div>
  )
}

export default ThemeToggle;
