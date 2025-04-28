import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Kushals Fashion Jewellery – Website/App Enhancements',
      description: [
        'Optimized image rendering, reducing site load time by 30%.',
        'Developed “Book My Appointment”, Product Bundling, and Cross-Sell features to boost engagement.',
        'Enhanced store inventory management, cutting fulfillment errors by 25%.'
      ],
      link: 'https://kushals.com/',
    },
    {
      title: 'Levi\'s, Nobero, Urbano – E-Commerce Development',
      description: [
        'Built and launched responsive Shopify-based e-commerce websites.',
        'Integrated payment gateways, product filters, and dynamic inventory syncs.',
        'Customized third-party apps to meet brand-specific UX needs.'
      ],
      link: 'https://levi.in/',
    },
    {
      title: 'YouTube and Swiggy Clones – React Projects',
      description: [
        'Built responsive YouTube and Swiggy web app clones with React.js and Redux.',
        'Integrated YouTube Open API for dynamic search and video streaming.',
        'Applied lazy loading, modular architecture, and TailwindCSS for UI perfection.'
      ],
      link: 'https://youtube-clone-dun-phi-25.vercel.app/',
    },
    {
      title: 'Personal Portfolio Website – React Based',
      description: [
        'Designed a dynamic portfolio using React, Tailwind CSS, Redux, and Framer Motion.',
        'Built animated sidebar navigation, Google Sheets-powered contact form, and smooth mobile UX.',
        'Deployed using Vercel for lightning-fast performance.'
      ],
      link: 'https://pramod-347.vercel.app/',
    },
    {
      title: 'Spotify Homepage UI Clone',
      description: [
        'Cloned Spotify’s homepage UI using HTML5, CSS3, and vanilla JavaScript.',
        'Focused on pixel-perfect design, responsiveness, and interactive hover effects.',
        'Achieved fast load times and seamless user experience.'
      ],
      link: 'https://swiggy-clone-jet-omega.vercel.app/',
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
            className="p-2 rounded md:rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-100 dark:hover:bg-stone-800/30 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-stone-200 dark:border-stone-700"
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