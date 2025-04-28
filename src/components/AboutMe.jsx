import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      className="flex flex-col items-start justify-center w-full h-full space-y-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="relative w-fit text-xl lg:text-2xl font-medium after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full">
          My Tech Journey
        </h2>
        <p className='text-sm lg:text-base mt-2 text-gray-800 dark:text-gray-300'>
          Full-stack-focused Software Developer with 2.5 years of experience building responsive, scalable web applications using <b>React</b>, <b>JavaScript</b>, and modern frameworks. 
          Currently deepening expertise in <b>Java</b>, <b>Node.js</b>, <b>SQL</b>, and <b>Cloud technologies</b>, while exploring the potential of <b>Generative AI</b>. 
          Passionate about building impactful digital solutions with clean architecture and strong user experience.
        </p>

      </div>
    </motion.div>
  );
};

export default AboutMe;