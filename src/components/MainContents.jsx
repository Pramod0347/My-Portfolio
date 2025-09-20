import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Desktop Header */}
      <motion.div 
        className="hidden sticky top-0 left-0 md:flex justify-end mx-4 mb-4 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </motion.div>

      {/* Mobile Header */}
      <motion.div 
        className='fixed md:hidden bottom-0 left-0 w-full sm:static sm:w-auto py-[2px] border-t-2 sm:border-2 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700 sm:rounded-3xl flex justify-around sm:justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-10 shadow-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </motion.div>

      {/* Sections */}
      <motion.div 
        className='px-4 pb-8 md:p-8 lg:p-12'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.section 
          className='scroll-mt-24 mt-4 mb-12' 
          ref={aboutRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <AboutMe />
        </motion.section>
        <motion.section 
          className='scroll-mt-24 my-12' 
          ref={experienceRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.section>
        <motion.section 
          className='scroll-mt-24 my-12' 
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>
        <motion.section 
          className='scroll-mt-24 my-12' 
          ref={certificationsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Certifications />
        </motion.section>
        <motion.section 
          className='scroll-mt-24 my-12' 
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.section>
        <motion.section 
          className='scroll-mt-24 my-12' 
          ref={educationRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Education />
        </motion.section>
        <motion.section 
          className='scroll-mt-24 my-12' 
          ref={contactRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default MainContents;
