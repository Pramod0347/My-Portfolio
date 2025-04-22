import React from 'react'

// Import all the images here.. or bring them here i wanna use them 
// import Levis from "./images/Levis.avif";
// import Kushals from "../images/Kushals.png";
// import Bewakoof from "../images/Bewakoof.webp";

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
      // image: Kushals
    },
    {
      title: 'Levi\'s, Nobero, Urbano – E-Commerce Development',
      description: [
        'Built comprehensive e-commerce websites from scratch using Shopify.',
        'Integrated key features and third-party apps for end-to-end functionality.'
      ],
      link: 'https://example.com/levis',
      // image: Levis
    },
    {
      title: 'Bewakoof – Website Migration',
      description: [
        'Migrated website from WooCommerce to Shopify.',
        'Improved site performance and modernized UI with Liquid and React.'
      ],
      link: 'https://example.com/bewakoof',
      // image: Bewakoof
    },
    {
      title: 'Spotify Homepage Clone',
      description: [
        'Developed a responsive UI clone using HTML5, CSS3, and JavaScript.',
        'Focused on pixel-perfect layout and smooth interactions.'
      ],
      link: 'https://example.com/spotify-clone',
      // image: 'https://via.placeholder.com/150'
    }
  ]
  

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 db:p-4">
      {projects.map((project, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          {/* <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" /> */}
          <h2 className="text-base font-semibold border-b-2 border-blue-500 w-fit mb-2">
            {project.title}
          </h2>
          <ul className='list-disc pl-5 text-xs db:text-sm mt-2 text-gray-800 dark:text-gray-300 space-y-1'>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  )
}

export default Projects;