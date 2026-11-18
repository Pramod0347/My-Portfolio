import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Hero from './components/Hero';
import SkillMarquee from './components/SkillMarquee';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Activity from './components/Activity';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { getRouteForPath, routes } from './routes';
import { profile } from './data';

const scrollToKey = (key) => {
  if (key === 'home') {
    window.scrollTo?.({ top: 0, behavior: 'smooth' });
    return;
  }
  document.getElementById(key)?.scrollIntoView?.({ behavior: 'smooth' });
};

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [activeRoute, setActiveRoute] = useState(() => getRouteForPath(window.location.pathname).key);
  const navigatingRef = useRef(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Deep links like /projects scroll to their section on load and on back/forward.
  useEffect(() => {
    const initial = getRouteForPath(window.location.pathname).key;
    const timer = initial !== 'home' ? setTimeout(() => scrollToKey(initial), 100) : null;

    const onPop = () => {
      const { key } = getRouteForPath(window.location.pathname);
      setActiveRoute(key);
      scrollToKey(key);
    };
    window.addEventListener('popstate', onPop);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', onPop);
    };
  }, []);

  // Highlight the nav item for whichever section is in view.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (navigatingRef.current) return;
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveRoute(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    routes.forEach(({ key }) => {
      const el = document.getElementById(key);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navigateTo = useCallback((path) => {
    const route = getRouteForPath(path);
    if (window.location.pathname !== route.path) {
      window.history.pushState({}, '', route.path);
    }
    setActiveRoute(route.key);
    navigatingRef.current = true;
    setTimeout(() => {
      navigatingRef.current = false;
    }, 800);
    scrollToKey(route.key);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeRoute={activeRoute} onNavigate={navigateTo} />

      <main className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
        <Hero onNavigate={navigateTo} />
        <SkillMarquee />
        <Experience />
        <Projects />
        <Activity />
        <Skills />
        <Education />
        <Resume />
        <Contact />
      </main>

      <footer className="container-page flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 py-8 text-sm text-slate-500 dark:border-slate-800/70 dark:text-slate-400">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-slate-900 dark:hover:text-white">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
