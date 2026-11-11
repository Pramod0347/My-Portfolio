import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import Header from './components/Header';
import MainContents from './components/MainContents';
import FloatingActionDock from './components/FloatingActionDock';
import DeveloperBackground from './components/DeveloperBackground';
import { getRouteForPath } from './routes';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [activeRoute, setActiveRoute] = useState(() => getRouteForPath(window.location.pathname).key);
  const [isContentRevealed, setIsContentRevealed] = useState(
    () => process.env.NODE_ENV === 'test'
  );

  // Safety fallback to guarantee content is revealed
  useEffect(() => {
    if (process.env.NODE_ENV === 'test') return;
    const fallbackTimer = setTimeout(() => {
      setIsContentRevealed(true);
    }, 1200);
    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Add smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Listen to browser forward/backward navigation
  useEffect(() => {
    const handlePopState = () => {
      const currentRoute = getRouteForPath(window.location.pathname);
      setActiveRoute(currentRoute.key);
      const element = document.getElementById(currentRoute.key);
      if (element?.scrollIntoView) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initial scroll if URL points to a specific section on load
  useEffect(() => {
    const initialRoute = getRouteForPath(window.location.pathname);
    if (initialRoute.key !== 'home') {
      const timer = setTimeout(() => {
        const element = document.getElementById(initialRoute.key);
        if (element?.scrollIntoView) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef(null);

  const navigateTo = (path, explicitKey) => {
    const targetRoute = getRouteForPath(path);
    const routeKey = explicitKey || targetRoute.key;

    if (window.location.pathname !== targetRoute.path) {
      window.history.pushState({}, '', targetRoute.path);
    }
    setActiveRoute(routeKey);

    // Lock scroll-spy during programmatic smooth scroll to prevent accidental overrides
    isNavigatingRef.current = true;
    clearTimeout(navTimeoutRef.current);
    navTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 900);

    const targetElement = document.getElementById(routeKey);
    if (targetElement?.scrollIntoView) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else if (routeKey === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionVisible = (sectionKey) => {
    if (!isNavigatingRef.current) {
      setActiveRoute(sectionKey);
    }
  };

  return (
    <div className="app-shell relative min-h-screen w-full max-w-full overflow-x-clip text-slate-900 dark:text-slate-100">
      {/* Dynamic AI Developer Ambient Background (Cybernetic Grid, Neural Paths, Floating Telemetry) */}
      <DeveloperBackground />

      {/* Page Content: Blank screen while dock is in center, smoothly reveals as it starts moving to corner */}
      <motion.div
        initial={process.env.NODE_ENV === 'test' ? false : { opacity: 0, y: 24 }}
        animate={
          isContentRevealed
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 24, pointerEvents: 'none' }
        }
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full flex flex-col"
      >
        {/* Modern Floating Header: Just Menus & Dark/Light Toggle */}
        <Header activeRoute={activeRoute} onNavigate={navigateTo} />

        {/* Infinite Scroll Full-Width Main Canvas */}
        <main className="relative mx-auto w-full max-w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-6 sm:py-10">
          <MainContents
            activeRoute={activeRoute}
            onNavigate={navigateTo}
            onSectionVisible={handleSectionVisible}
          />
        </main>
      </motion.div>

      {/* iOS/macOS Curved Floating Action Dock with Emoji Face in Bottom-Right Corner */}
      <FloatingActionDock onStartMoving={() => setIsContentRevealed(true)} />
    </div>
  );
}

export default App;
