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
      <div 
        className="hidden sticky top-0 left-0 md:flex justify-end mx-4 mb-4 z-10"
      >
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </div>

      {/* Mobile Header */}
      <div 
        className='fixed md:hidden bottom-0 left-0 w-full sm:static sm:w-auto py-[2px] border-t-2 sm:border-2 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700 sm:rounded-3xl flex justify-around sm:justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-10 shadow-lg'
      >
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </div>

      {/* Sections */}
      <div 
        className='px-4 pb-8 md:p-8 lg:p-12'
      >
        <section 
          className='scroll-mt-24 mt-4 mb-12' 
          ref={aboutRef}
        >
          <AboutMe />
        </section>
        <section 
          className='scroll-mt-24 my-12' 
          ref={experienceRef}
        >
          <Experience />
        </section>
        <section 
          className='scroll-mt-24 my-12' 
          ref={skillsRef}
        >
          <Skills />
        </section>
        <section 
          className='scroll-mt-24 my-12' 
          ref={certificationsRef}
        >
          <Certifications />
        </section>
        <section 
          className='scroll-mt-24 my-12' 
          ref={projectsRef}
        >
          <Projects />
        </section>
        <section 
          className='scroll-mt-24 my-12' 
          ref={educationRef}
        >
          <Education />
        </section>
        <section 
          className='scroll-mt-24 my-12' 
          ref={contactRef}
        >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default MainContents;
