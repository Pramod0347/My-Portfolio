import React, { useRef, useEffect, useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const MainContents = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  const sectionRefs = {
    home: aboutRef,
    experience: experienceRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedKey = Object.entries(sectionRefs).find(
            ([key, ref]) => ref.current === entry.target
          )?.[0];
          if (matchedKey) {
            setActiveSection(matchedKey);
          }
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      {/* Desktop Header */}
      <div className="hidden sticky top-0 left-0 md:flex justify-end  m-4">
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </div>

      {/* Mobile Header */}
      <div className='fixed md:hidden bottom-0 left-0 w-full sm:static sm:w-auto py-[2px] border-t-2 sm:border-2 text-gray-700 dark:text-stone-100 border-gray-300 dark:border-gray-600 sm:rounded-3xl flex justify-around sm:justify-center bg-stone-100 dark:bg-gray-700 z-10 shadow-lg'>
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </div>

      {/* Sections */}
      <div className='px-4 py-8 md:p-8 lg:p-12'>
        <section className='scroll-mt-24 my-4 md:my-12' ref={aboutRef}><AboutMe /></section>
        <section className='scroll-mt-24 my-4 md:my-12' ref={experienceRef}><Experience /></section>
        <section className='scroll-mt-24 my-4 md:my-12' ref={skillsRef}><Skills /></section>
        <section className='scroll-mt-24 my-4 md:my-12' ref={projectsRef}><Projects /></section>
        <section className='scroll-mt-24 mt-4 mb-12' ref={contactRef}><Contact /></section>
      </div>
    </div>
  );
};

export default MainContents;
