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
          About Me
        </h2>
        <p className='text-sm lg:text-base mt-2 text-gray-800 dark:text-gray-300'>
          Results-driven Software Developer with 2 years of experience in building full-stack web apps using React, JavaScript, and Shopify. 
          I specialize in custom e-commerce solutions, scalable backend services, and clean UI/UX. 
          Currently upskilling in Java and backend technologies to transition into a Full-Stack Developer role.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;