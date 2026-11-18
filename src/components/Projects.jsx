import React from 'react';

import Section from './Section';
import ProjectCarousel from './ProjectCarousel';
import { projects } from '../data';

const Projects = () => (
  <Section id="projects" index={2} eyebrow="Projects" heading="Things I've built.">
    <ProjectCarousel projects={projects} />
  </Section>
);

export default Projects;
