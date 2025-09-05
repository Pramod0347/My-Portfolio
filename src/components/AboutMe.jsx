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
        <h2 className="relative w-fit text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full drop-shadow-sm">
          My Tech Journey
        </h2>
        <p className='text-sm lg:text-base mt-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
          Full-stack-focused Software Developer with 2.5 years of experience building responsive, scalable web applications using <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, <span className="font-semibold text-yellow-600 dark:text-yellow-400">JavaScript</span>, and modern frameworks. 
          Currently deepening expertise in <span className="font-semibold text-orange-600 dark:text-orange-400">Java</span>, <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">SQL</span>, and <span className="font-semibold text-indigo-600 dark:text-indigo-400">Cloud technologies</span>, while exploring the potential of <span className="font-semibold text-pink-600 dark:text-pink-400">Generative AI</span>. 
          Passionate about building impactful digital solutions with clean architecture and strong user experience.
        </p>

      </div>
    </motion.div>
  );
};

export default AboutMe;