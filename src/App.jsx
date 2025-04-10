import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ThemeToggle from './components/ThemeToggle';

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
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Redux Dark Mode 💡</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;
