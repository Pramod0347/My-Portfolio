import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      className="flex flex-col items-start justify-center w-full h-full space-y-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="relative w-fit text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full drop-shadow-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          My Tech Journey
        </motion.h2>
        <motion.p 
          className="text-sm lg:text-base mt-4 text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Full Stack Engineer with <motion.span 
            className="font-semibold"
            whileHover={{ scale: 1.1, color: "rgb(59, 130, 246)" }}
            transition={{ duration: 0.2 }}
          >2.8+ years</motion.span> of experience in e-commerce platforms, building custom product features, authentication flows, and scalable APIs. Skilled in designing secure systems with strong expertise in integrations, caching, and <motion.span 
            className="font-semibold text-orange-600 dark:text-orange-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >AWS</motion.span> deployments. Proficient in <motion.span 
            className="font-semibold text-green-600 dark:text-green-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >Node.js</motion.span>, <motion.span 
            className="font-semibold text-green-600 dark:text-green-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >Express.js</motion.span>, <motion.span 
            className="font-semibold text-green-600 dark:text-green-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >MongoDB</motion.span>, <motion.span 
            className="font-semibold text-purple-600 dark:text-purple-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >SQL</motion.span>, <motion.span 
            className="font-semibold text-blue-600 dark:text-blue-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >React</motion.span>, <motion.span 
            className="font-semibold text-violet-600 dark:text-violet-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >Redux</motion.span>, <motion.span 
            className="font-semibold text-cyan-600 dark:text-cyan-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >Tailwind CSS</motion.span>, focused on delivering high-performance solutions that drive business growth.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;