import React from 'react'
 
import { ExternalLink, Github } from 'lucide-react'
import kushalsBanner from '../Images/kushalsBanner.png'
import swiggy from '../Images/swiggy.avif'

const Projects = () => {
  const projects = [
    {
      title: 'News RAG Application – AI-Powered News Chatbot',
      description:
        'Developed a RAG-based chatbot using Jina embeddings + Qdrant Vector DB, enabling semantic search over 100+ news articles (BBC, CNN, Reuters). Built Node.js/Express backend with Redis (Upstash) for per-session chat history (sliding TTL) and multi-turn conversation handling. Created a React (Vite) frontend with optimistic UI, pseudo-streaming responses, and secure deployment on Render, Vercel, and Upstash Redis.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      technologies: ['Node.js', 'React', 'RAG', 'Qdrant', 'Redis', 'Jina Embeddings', 'Vector DB'],
      liveLink: 'https://voosh-news-rag-frontend.vercel.app/',
      githubLink: 'https://github.com/Pramod0347/voosh-news-rag-frontend',
      backendLink: 'https://github.com/Pramod0347/voosh-news-rag-backend',
      featured: true,
    },
    {
      title: 'TaskFlow - Full-Stack Task Management App',
      description:
        'Responsive, offline-first PWA with real-time collaboration and drag-and-drop boards using MERN stack (MongoDB, Express.js, React, Node.js), Service Workers, Socket.io, and axios for API/file requests. Modular microservices (Node/Express) with JWT authentication, bcrypt password hashing, Redis caching, and Docker Compose for containerized deployment.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      technologies: ['MERN Stack', 'Socket.io', 'Redis', 'Docker', 'PWA', 'Microservices'],
      liveLink: 'https://taskflow-demo.vercel.app/',
      githubLink: 'https://github.com/Pramod0347/Task-Flow-Frontend-Tailwind',
      backendLink: 'https://github.com/Pramod0347/Task-Flow-Backend-DB',
      featured: true,
    },
    {
      title: 'Kushals Fashion Jewellery - E-commerce Platform',
      description:
        'Full-stack e-commerce solution with inventory sync structure using Node.js, MongoDB, and AWS-hosted pipelines. Implemented OTP-based authentication, personalized recommendations, and AWS EC2/S3 migration. Optimized performance with lazy loading and image compression, reducing load time by 30%.',
      image: kushalsBanner,
      technologies: ['Node.js', 'MongoDB', 'AWS', 'Express.js', 'JWT', 'E-commerce'],
      liveLink: 'https://kushals.com/',
      githubLink: null,
      featured: false,
    },
    {
      title: "Levi's & Nobero - Shopify E-commerce",
      description:
        'Custom Shopify development for major retail brands with backend return-flow system, custom coupon logic, and third-party API integrations. Built scalable component-driven architecture and delivered end-to-end e-commerce solutions with reliable backend infrastructure.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      technologies: ['Shopify', 'Node.js', 'MongoDB', 'E-commerce', 'API Integration'],
      liveLink: 'https://levi.in/',
      githubLink: null,
      featured: false,
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Modern, responsive portfolio built with React, Tailwind CSS, Redux, and Framer Motion. Features animated sidebar navigation, dark/light theme toggle, smooth scrolling, and optimized performance. Deployed on Vercel with CI/CD pipeline.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Tailwind CSS', 'Redux', 'Framer Motion', 'Vercel'],
      liveLink: 'https://pramod-347.vercel.app/',
      githubLink: 'https://github.com/pramod347/portfolio',
      featured: false,
    },
    {
      title: 'Spotify Homepage UI Clone',
      description:
        "Cloned Spotify's homepage UI using HTML5, CSS3, and vanilla JavaScript. Focused on pixel-perfect design, responsiveness, and interactive hover effects. Achieved fast load times and seamless user experience.",
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveLink: 'https://spotify-clone-demo.vercel.app/',
      githubLink: 'https://github.com/pramod347/spotify-clone',
      featured: false,
    },
    {
      title: 'Swiggy Food Delivery Clone',
      description:
        'Built a responsive food delivery app clone with React.js featuring restaurant listings, menu browsing, cart functionality, and order tracking. Implemented state management with Redux and integrated with mock APIs for realistic user experience.',
      image: swiggy,
      technologies: ['React', 'Redux', 'JavaScript', 'API Integration', 'State Management'],
      liveLink: 'https://swiggy-clone-jet-omega.vercel.app/',
      githubLink: 'https://github.com/pramod347/swiggy-clone',
      featured: false,
    },
    {
      title: 'YouTube-Like Video Platform',
      description:
        'Responsive video streaming UI with infinite scroll, debounced search, lazy loading, and axios-based paginated requests to YouTube Data API v3 using Redux Toolkit. Reusable Tailwind CSS UI components and improved performance via code-splitting, memoization (React.memo, useCallback), and custom hooks.',
      image:
        'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Redux Toolkit', 'YouTube API', 'Tailwind CSS', 'Performance Optimization'],
      liveLink: 'https://youtube-clone-dun-phi-25.vercel.app/',
      githubLink: 'https://github.com/pramod347/youtube-clone',
      featured: false,
    }
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div
      className="w-full mt-8"
    >
      <div 
        className="mb-12"
      >
        <h2 
          className="relative w-fit text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full drop-shadow-sm"
        >
          Featured Projects
        </h2>
        <p 
          className="text-sm lg:text-base mt-3 text-gray-600 dark:text-gray-400 max-w-3xl"
        >
          Key development projects showcasing expertise in full stack development, microservices, and modern web technologies.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Project Image */}
            <div 
              className="relative h-40 sm:h-44 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Subtle featured tag */}
              <div 
                className="absolute bottom-3 left-3 px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-md shadow"
              >
                Featured
              </div>
            </div>

            {/* Project Content */}
            <div 
              className="p-6"
            >
              <h3 
                className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 leading-tight"
              >
                {project.title}
              </h3>

              <p 
                className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
              >
                {project.description}
              </p>

              {/* Technology Tags */}
              <div 
                className="flex flex-wrap gap-2 mb-4"
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div 
                className="flex flex-wrap gap-2"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-all duration-300"
                >
                  <ExternalLink size={14} />
                  View Details
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs font-medium rounded-lg transition-all duration-300"
                  >
                    <Github size={14} />
                    Frontend
                  </a>
                )}
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs font-medium rounded-lg transition-all duration-300"
                  >
                    <Github size={14} />
                    Backend
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div 
          className="mt-16"
        >
          <h3 
            className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-8"
          >
            Other Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Project Image */}
                <div 
                  className="relative h-32 sm:h-36 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div 
                  className="p-4"
                >
                  <h4 
                    className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 leading-tight"
                  >
                    {project.title}
                  </h4>

                  <p 
                    className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-3 line-clamp-3"
                  >
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div 
                    className="flex flex-wrap gap-1.5 mb-3"
                  >
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md transition-all duration-200"
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-all duration-300 w-full justify-center"
                  >
                    <ExternalLink size={14} />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects