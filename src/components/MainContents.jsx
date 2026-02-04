import React, { useRef, useEffect, useState } from 'react';
 
import Header from './Header';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import Certifications from './Certifications';
import Education from './Education';

const MainContents = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const educationRef = useRef(null);

  const sectionRefs = {
    home: aboutRef,
    experience: experienceRef,
    skills: skillsRef,
    projects: projectsRef,
    education: educationRef,
    contact: contactRef,
    certifications: certificationsRef,
  };

  const [activeSection, setActiveSection] = useState('home');

  const sectionVisibility = useRef({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: [0.1, 0.25, 0.5, 0.75],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const matchedKey = Object.entries(sectionRefs).find(
          ([, ref]) => ref.current === entry.target
        )?.[0];
        if (matchedKey) {
          sectionVisibility.current[matchedKey] = entry.intersectionRatio;
        }
      });

      const mostVisible = Object.entries(sectionVisibility.current).sort(
        (a, b) => b[1] - a[1]
      )[0]?.[0];

      if (mostVisible) {
        setActiveSection(mostVisible);
      }
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
    <div className="animate-fade-in">
      {/* Desktop Header */}
      <div 
        className="hidden sticky top-4 left-0 md:flex justify-end mx-6 mb-6 z-20"
      >
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </div>

      {/* Mobile Header */}
      <div 
        className='fixed md:hidden bottom-0 left-0 w-full sm:static sm:w-auto py-[6px] border-t border-white/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-100 sm:rounded-3xl flex justify-around sm:justify-center glass-card z-10 shadow-lift'
      >
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </div>

      {/* Sections */}
      <div 
        className='px-4 pb-16 pt-8 md:px-8 md:pb-12 md:pt-16 lg:px-12 lg:pb-16'
      >
        <section 
          className='scroll-mt-32 mt-4 mb-12' 
          ref={aboutRef}
        >
          <AboutMe />
        </section>
        <section 
          className='scroll-mt-32 my-12' 
          ref={experienceRef}
        >
          <Experience />
        </section>
        <section 
          className='scroll-mt-32 my-12' 
          ref={skillsRef}
        >
          <Skills />
        </section>
        <section 
          className='scroll-mt-32 my-12' 
          ref={certificationsRef}
        >
          <Certifications />
        </section>
        <section 
          className='scroll-mt-32 my-12' 
          ref={projectsRef}
        >
          <Projects />
        </section>
        <section 
          className='scroll-mt-32 my-12' 
          ref={educationRef}
        >
          <Education />
        </section>
        <section 
          className='scroll-mt-32 my-12' 
          ref={contactRef}
        >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default MainContents;
