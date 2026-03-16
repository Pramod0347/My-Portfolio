import React, { useRef, useEffect, useState } from 'react';

import Header from './Header';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import Certifications from './Certifications';
import Education from './Education';
import SystemDesign from './SystemDesign';

const MainContents = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const educationRef = useRef(null);
  const architectureRef = useRef(null);

  const sectionRefs = {
    home: aboutRef,
    experience: experienceRef,
    skills: skillsRef,
    architecture: architectureRef,
    projects: projectsRef,
    education: educationRef,
    contact: contactRef,
    certifications: certificationsRef,
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const anchorOffset = 170;

    const updateActiveSection = () => {
      ticking = false;
      const entries = Object.entries(sectionRefs)
        .map(([key, ref]) => {
          if (!ref.current) return null;
          const rect = ref.current.getBoundingClientRect();
          return {
            key,
            top: rect.top,
            bottom: rect.bottom,
            distanceFromAnchor: Math.abs(rect.top - anchorOffset),
          };
        })
        .filter(Boolean);

      if (!entries.length) return;

      const containingAnchor = entries.find(
        (item) => item.top <= anchorOffset && item.bottom > anchorOffset
      );

      const nextKey = containingAnchor?.key
        ?? entries.sort((a, b) => a.distanceFromAnchor - b.distanceFromAnchor)[0]?.key;

      if (nextKey && nextKey !== activeSection) {
        setActiveSection(nextKey);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="animate-fade-in">
      <div className="sticky top-3 left-0 z-30 mb-4 md:top-4 md:mb-6">
        <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      </div>

      <div className="space-y-4 px-0 pb-10 pt-1 sm:space-y-5 md:space-y-6 md:pb-12 md:pt-2">
        <section className="scroll-mt-32 md:scroll-mt-36" ref={aboutRef}>
          <div className="section-panel surface-outline">
            <AboutMe />
          </div>
        </section>
        <section className="scroll-mt-32 md:scroll-mt-36" ref={experienceRef}>
          <div className="section-panel surface-outline">
            <Experience />
          </div>
        </section>
        <section className="scroll-mt-32 md:scroll-mt-36" ref={skillsRef} id="skills">
          <div className="section-panel surface-outline">
            <Skills />
          </div>
        </section>
        <section className="scroll-mt-32 md:scroll-mt-36" ref={architectureRef} id="architecture">
          <div className="section-panel surface-outline">
            <SystemDesign />
          </div>
        </section>
        <section className="scroll-mt-32 md:scroll-mt-36" ref={certificationsRef}>
          <div className="section-panel surface-outline">
            <Certifications />
          </div>
        </section>
        <section className="scroll-mt-32 md:scroll-mt-36" ref={projectsRef} id="projects">
          <div className="section-panel surface-outline">
            <Projects />
          </div>
        </section>
        <section className="scroll-mt-32 md:scroll-mt-36" ref={educationRef}>
          <div className="section-panel surface-outline">
            <Education />
          </div>
        </section>
        <section className="scroll-mt-32 md:scroll-mt-36" ref={contactRef} id="contact">
          <div className="section-panel surface-outline">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContents;
