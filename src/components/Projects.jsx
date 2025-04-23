import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Kushals Fashion Jewellery – Website/App Enhancements',
      description: [
        'Enhanced performance with image rendering optimization; reduced load time by ~30%.',
        'Implemented ‘Book My Appointment’, Bundling, and Close Matched Products features to boost engagement and sales.',
        'Improved Store Inventory Management, reducing fulfillment errors by ~25%.'
      ],
      link: 'https://example.com/kushals',
    },
    {
      title: 'Levi\'s, Nobero, Urbano – E-Commerce Development',
      description: [
        'Built comprehensive e-commerce websites from scratch using Shopify.',
        'Integrated key features and third-party apps for end-to-end functionality.'
      ],
      link: 'https://example.com/levis',
    },
    {
      title: 'Bewakoof – Website Migration',
      description: [
        'Migrated website from WooCommerce to Shopify.',
        'Improved site performance and modernized UI with Liquid and React.'
      ],
      link: 'https://example.com/bewakoof',
    },
    {
      title: 'Spotify Homepage Clone',
      description: [
        'Developed a responsive UI clone using HTML5, CSS3, and JavaScript.',
        'Focused on pixel-perfect layout and smooth interactions.'
      ],
      link: 'https://example.com/spotify-clone',
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full mt-8"
    >
      <h2 className="relative w-fit text-xl lg:text-2xl font-medium after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full">
        My Projects
      </h2>

      <div className="flex flex-col gap-6 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-2 rounded transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-100 dark:hover:bg-stone-800/30 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-stone-200 dark:border-stone-700"
          >
            <h3 className="font-bold text-gray-900 dark:text-stone-100 text-base lg:text-lg">
              {project.title}
            </h3>
            <ul className="list-disc pl-5 text-sm md:text-base mt-2 text-gray-800 dark:text-gray-300 space-y-1">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-3 inline-block text-sm md:text-base"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects;
