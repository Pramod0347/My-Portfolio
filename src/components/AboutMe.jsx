import React from 'react';
 

const AboutMe = () => {
  return (
    <div
      className="flex flex-col items-start justify-center w-full h-full space-y-4"
    >
      <div>
        <h2 
          className="relative w-fit text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full drop-shadow-sm"
        >
          My Tech Journey
        </h2>
        <p 
          className="text-sm lg:text-base mt-4 text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          Full Stack Engineer with <span 
            className="font-semibold"
          >2.8+ years</span> of experience in e-commerce platforms, building custom product features, authentication flows, and scalable APIs. Skilled in designing secure systems with strong expertise in integrations, caching, and <span 
            className="font-semibold text-orange-600 dark:text-orange-400"
          >AWS</span> deployments. Proficient in <span 
            className="font-semibold text-green-600 dark:text-green-400"
          >Node.js</span>, <span 
            className="font-semibold text-green-600 dark:text-green-400"
          >Express.js</span>, <span 
            className="font-semibold text-green-600 dark:text-green-400"
          >MongoDB</span>, <span 
            className="font-semibold text-purple-600 dark:text-purple-400"
          >SQL</span>, <span 
            className="font-semibold text-blue-600 dark:text-blue-400"
          >React</span>, <span 
            className="font-semibold text-violet-600 dark:text-violet-400"
          >Redux</span>, <span 
            className="font-semibold text-cyan-600 dark:text-cyan-400"
          >Tailwind CSS</span>, focused on delivering high-performance solutions that drive business growth.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;