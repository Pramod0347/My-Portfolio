import React from 'react'
 
import { ExternalLink, Github } from 'lucide-react'
import kushalsBanner from '../Images/kushalsBanner.png'
import procurementImg from '../Images/procurement.png'
import swiggy from '../Images/swiggy.avif'

const Projects = () => {
  const projects = [
    {
      title: 'NewsRAG – AI-Powered News Chatbot',
      description:
        'RAG-based semantic search chatbot using Jina embeddings, Qdrant vector DB, and Redis Upstash caching — indexes 50+ news sources with multi-turn conversation support.',
      systemDesign:
        'Split retrieval and conversation state so vector search stays fast while Redis preserves low-latency multi-turn context.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      technologies: ['RAG', 'Qdrant', 'Redis', 'Node.js', 'TypeScript', 'Vector DB'],
      liveLink: 'https://voosh-news-rag-frontend.vercel.app/',
      githubLink: 'https://github.com/Pramod0347/voosh-news-rag-frontend',
      backendLink: 'https://github.com/Pramod0347/voosh-news-rag-backend',
      featured: true,
      highlighted: true,
    },
    {
      title: 'ProcureFlow – Intelligent Procurement & GRN System',
      description:
        'End-to-end procurement system with microservices architecture, Redis caching, Docker deployments, and PostgreSQL optimized to sub-150ms response times.',
      systemDesign:
        'Isolated approval, vendor, and GRN flows into service boundaries to keep high-volume writes away from dashboard read paths.',
      image: procurementImg,
      technologies: [
        'Microservices',
        'PostgreSQL',
        'Redis',
        'Docker',
        'RBAC',
      ],
      liveLink: 'https://procurement-app-delta.vercel.app/',
      githubLink: null,
      backendLink: null,
      featured: true,
      highlightedSecondary: true,
    },
    {
      title: 'TaskFlow - Full-Stack Task Management App',
      description:
        'Responsive, offline-first PWA with real-time collaboration and drag-and-drop boards using MERN stack (MongoDB, Express.js, React, Node.js), Service Workers, Socket.io, and axios for API/file requests. Modular microservices (Node/Express) with JWT authentication, bcrypt password hashing, Redis caching, and Docker Compose for containerized deployment.',
      systemDesign:
        'Used websocket updates for collaboration while keeping task persistence behind standard API boundaries for easier recovery and debugging.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      technologies: ['MERN Stack', 'Socket.io', 'Redis', 'Docker', 'PWA', 'Microservices'],
      liveLink: 'https://taskflow-demo.vercel.app/',
      githubLink: 'https://github.com/Pramod0347/Task-Flow-Frontend-Tailwind',
      backendLink: 'https://github.com/Pramod0347/Task-Flow-Backend-DB',
      featured: false,
    },
    {
      title: 'Kushals Fashion Jewellery - E-commerce Platform',
      description:
        'Full-stack e-commerce solution with inventory sync structure using Node.js, MongoDB, and AWS-hosted pipelines. Implemented OTP-based authentication, personalized recommendations, and AWS EC2/S3 migration. Optimized performance with lazy loading and image compression, reducing load time by 30%.',
      systemDesign:
        'Separated sync processing from storefront requests so inventory updates could scale independently from user traffic.',
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
      systemDesign:
        'Abstracted campaign and return rules into backend logic so brand-specific requirements could change without rewriting templates.',
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
      systemDesign:
        'Kept the frontend component-driven so positioning changes and content reframing could happen without rewriting the whole page.',
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
      systemDesign:
        'Optimized static assets and layout structure for fast paint and smooth interaction on lower-end devices.',
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
      systemDesign:
        'Centralized state updates in Redux to keep cart and menu flows predictable across multiple views.',
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
      systemDesign:
        'Used debounced search and paginated fetches to control API usage while keeping the browsing experience responsive.',
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

  const highlightedProject = featuredProjects.find((project) => project.highlighted)
  const secondaryHighlightedProjects = featuredProjects.filter(
    (project) => project.highlightedSecondary
  )
  const regularFeaturedProjects = featuredProjects.filter(
    (project) => !project.highlighted && !project.highlightedSecondary
  )

  return (
    <div
      className="w-full animate-fade-up"
    >
      <div className="mb-8 grid gap-4 lg:grid-cols-[1.3fr,0.7fr]">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Projects That Show <span className="keyword">Product</span> and <span className="keyword-accent">Backend</span> Range</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:text-base">
            These projects represent the work I want a hiring team to evaluate: <span className="keyword">internal tools</span>, <span className="keyword-accent">AI workflows</span>, <span className="keyword">real-time collaboration</span>, and commerce systems shipped with a backend-first mindset.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="metric-card">
            <p className="text-2xl font-display font-semibold text-slate-900 dark:text-slate-50">8+</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Production and portfolio builds</p>
          </div>
          <div className="metric-card">
            <p className="text-2xl font-display font-semibold text-slate-900 dark:text-slate-50">Redis + PG</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Frequent backend building blocks</p>
          </div>
        </div>
      </div>

      {/* Highlighted Project */}
      {highlightedProject && (
        <section className="mb-12">
          <div className="mb-6">
            <p className="section-kicker">Spotlight</p>
            <h3 className="section-title">
              Highlighted Project
            </h3>
            <p className="text-sm lg:text-base mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">
              A <span className="keyword">backend-heavy product build</span> implemented as a production-ready <span className="keyword-accent">microservices system</span>.
            </p>
          </div>

          <div className="glass-card rounded-3xl ring-1 ring-amber-300/80 dark:ring-amber-400/40 overflow-hidden grid grid-cols-1 md:grid-cols-[1.4fr,1fr]">
            {/* Image side */}
            <div className="relative h-52 sm:h-64 md:h-full overflow-hidden">
              <img
                src={highlightedProject.image}
                alt={highlightedProject.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Backend architecture spotlight
              </span>
            </div>

            {/* Content side */}
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-600 dark:text-amber-300 mb-1.5">
                  Highlighted project
                </p>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-50 leading-snug">
                  {highlightedProject.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                  {highlightedProject.description}
                </p>
              </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                  {highlightedProject.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[11px] font-medium rounded-full dark:bg-amber-900/40 dark:text-amber-100"
                    >
                      {tech}
                    </span>
                  ))}
                  {highlightedProject.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-full dark:bg-slate-800 dark:text-slate-200">
                      +{highlightedProject.technologies.length - 4} more
                    </span>
                  )}
                  </div>

                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 dark:border-slate-700 dark:bg-slate-900/70">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      System Design Highlight
                    </p>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {highlightedProject.systemDesign}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                  <a
                    href={highlightedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-all"
                  >
                    <ExternalLink size={14} />
                    View live dashboard
                  </a>
                  {highlightedProject.githubLink && (
                    <a
                      href={highlightedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-800 text-xs font-semibold rounded-lg transition-all"
                    >
                      <Github size={14} />
                      View repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Secondary highlighted featured projects (e.g., NewsRAG) */}
      {secondaryHighlightedProjects.length > 0 && (
        <section className="mb-12">
          <div className="mb-6">
            <p className="section-kicker">Featured</p>
            <h3 className="section-title">
              <span className="keyword">AI</span> & <span className="keyword-accent">Real-time</span> Experiences
            </h3>
            <p className="text-sm lg:text-base mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">
              Production-grade AI and realtime apps that pair <span className="keyword">robust backends</span> with focused delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {secondaryHighlightedProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-emerald-200/60 dark:border-emerald-700/40 overflow-hidden grid grid-cols-1 sm:grid-cols-[1.1fr,1.3fr]"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    AI / RAG
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col justify-between gap-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-50 leading-snug mb-1.5">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-medium rounded-full dark:bg-emerald-900/40 dark:text-emerald-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-full dark:bg-slate-800 dark:text-slate-200">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 dark:border-slate-700 dark:bg-slate-900/70">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        System Design Highlight
                      </p>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {project.systemDesign}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-all"
                      >
                        <ExternalLink size={14} />
                        Open app
                      </a>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-3 py-1.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-800 text-xs font-semibold rounded-lg transition-all"
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
                          className="inline-flex items-center justify-center gap-2 px-3 py-1.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-800 text-xs font-semibold rounded-lg transition-all"
                        >
                          <Github size={14} />
                          Backend
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Remaining featured projects */}
      {regularFeaturedProjects.length > 0 && (
        <section className="mb-12">
          <div className="mb-6">
            <p className="section-kicker">Featured</p>
            <h3 className="section-title">
          Featured Projects
            </h3>
            <p className="text-sm lg:text-base mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">
              Additional end-to-end builds demonstrating real-time systems, AI, and production-grade web apps.
        </p>
      </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {regularFeaturedProjects.map((project, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl hover:shadow-lift transition-all duration-500 overflow-hidden border border-white/60 dark:border-slate-700/60"
          >
            {/* Project Image */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  <div className="absolute bottom-3 left-3 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-md shadow">
                Featured
              </div>
            </div>

            {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-tight">
                {project.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

                  <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 dark:border-slate-700 dark:bg-slate-900/70">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      System Design Highlight
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {project.systemDesign}
                    </p>
                  </div>

              {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg transition-all duration-300"
                >
                  <ExternalLink size={14} />
                  View Details
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-1.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800 text-xs font-medium rounded-lg transition-all duration-300"
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
                    className="flex items-center justify-center gap-2 px-3 py-1.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800 text-xs font-medium rounded-lg transition-all duration-300"
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
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="mt-14">
          <p className="section-kicker">More Work</p>
          <h3 className="section-title mb-6">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col glass-card rounded-2xl shadow-md hover:shadow-lift transition-all duration-400 overflow-hidden border border-white/60 dark:border-slate-700/60"
              >
                {/* Project Image */}
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-tight">
                    {project.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span 
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md transition-all duration-200 mt-1"
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 dark:border-slate-700 dark:bg-slate-900/70">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      System Design Highlight
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      {project.systemDesign}
                    </p>
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg transition-all duration-300 w-full justify-center"
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
