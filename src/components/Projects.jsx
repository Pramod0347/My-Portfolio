import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Activity,
  ArrowUpRight,
  Bot,
  Cpu,
  Database,
  Github,
  Globe,
  Lock,
  Radio,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from 'lucide-react';

const renderHighlightedText = (
  text,
  highlights = [],
  colorClass = 'font-semibold text-violet-600 dark:text-violet-300'
) => {
  if (!highlights || highlights.length === 0) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className={colorClass}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const projects = [
  {
    number: '01',
    title: 'Wealth Pilot',
    roleTag: 'AI Software Engineer · LLM Security & RAG',
    subtitle: 'AI-Powered Personal Finance & Stock Intelligence',
    mission:
      'A full-stack financial intelligence platform tracking portfolios, cashflow, and taxes, featuring a Gemini-powered research engine with strict source-grounding and privacy guarantees.',
    kpis: [
      { value: 'Zero PII', label: 'Privacy Boundary', subtext: 'Client-side normalized ratios' },
      { value: '100%', label: 'Source Grounded', subtext: 'AST verification guardrail' },
      { value: 'Multi-Tier', label: 'Inference Routing', subtext: 'Gemini Pro & Flash fallback' },
      { value: '99.9%', label: 'Surge Uptime', subtext: 'Redis sliding rate limiting' },
    ],
    pipeline: [
      'Live Market RSS & APIs',
      'Citation Validator Guardrail',
      'Python Analytics Engine',
      'Gemini 1.5 Pro / Flash',
      'PostgreSQL ACID Ledger',
    ],
    challenges: [
      {
        title: 'Zero-Trust Privacy & PII Boundary',
        icon: Lock,
        text: 'Sends only normalized percentage ratios and public ticker symbols to LLMs—no account balances, personal names, or banking credentials ever leave the secure Python execution runtime.',
        highlights: ['normalized percentage ratios', 'secure Python execution runtime'],
      },
      {
        title: 'Automated AST Source-Citation Verification',
        icon: ShieldCheck,
        text: 'Engineered a market research engine that automatically parses Gemini generated output and drops any unverified financial claims lacking explicit source links.',
        highlights: ['market research engine', 'Gemini generated output', 'explicit source links'],
      },
      {
        title: 'Multi-Tier Dynamic Model Fallback',
        icon: Zap,
        text: 'Configured automated traffic routing between Gemini 1.5 Pro for deep qualitative analysis and Gemini Flash for rapid summaries, with sliding Redis rate limiters.',
        highlights: ['Gemini 1.5 Pro', 'Gemini Flash', 'Redis rate limiters'],
      },
      {
        title: 'Full-Stack Portfolio Ledger & Tax Analytics',
        icon: TrendingUp,
        text: 'Built high-precision asset valuation and tax-loss harvesting tracking with PostgreSQL and Redis caching, supporting instant portfolio recalibration.',
        highlights: ['asset valuation', 'PostgreSQL and Redis caching'],
      },
    ],
    technologies: ['Google Gemini API', 'FastAPI', 'Python 3.12', 'PostgreSQL', 'TypeScript', 'React', 'Docker'],
    image: '/assets/projects/wealth-pilot.jpg',
    featured: true,
  },
  {
    number: '02',
    title: 'NewsRAG',
    roleTag: 'AI Software Engineer · Vector Search & Memory',
    subtitle: 'Autonomous Semantic News Research & Multi-Turn Chatbot',
    mission:
      'A production retrieval-augmented chatbot continuously indexing 50+ global sources (Reuters, BBC, CNN) with multi-turn conversational session memory and semantic caching.',
    kpis: [
      { value: '50+', label: 'Live Data Streams', subtext: 'Global RSS & API feeds' },
      { value: '5-Turn', label: 'Session Memory', subtext: 'Upstash Redis sliding TTL' },
      { value: '~60%', label: 'API Deduplication', subtext: 'Semantic vector caching' },
      { value: '<300ms', label: 'Query Latency', subtext: 'HNSW vector search in Qdrant' },
    ],
    pipeline: [
      '50+ Global News Streams',
      'Jina v2 Vector Embeddings',
      'Qdrant Vector DB (HNSW)',
      'Upstash Redis Memory',
      'Fast Contextual API',
    ],
    challenges: [
      {
        title: 'High-Dimensional Vector Ingestion & HNSW Search',
        icon: Database,
        text: 'Built an automated news ingestion and chunking pipeline using Jina v2 embeddings and Qdrant vector database for sub-second semantic retrieval across thousands of daily articles.',
        highlights: ['Jina v2 embeddings', 'Qdrant vector database', 'sub-second semantic retrieval'],
      },
      {
        title: 'Sliding-Window Conversation Memory',
        icon: Bot,
        text: 'Engineered conversational session state backed by Upstash Redis with dynamic TTL, preserving coherent dialog context across 5 distinct interaction turns without token bloat.',
        highlights: ['Upstash Redis', '5 distinct interaction turns'],
      },
      {
        title: 'Semantic Response Caching',
        icon: Zap,
        text: 'Implemented vector similarity caching for recurring breaking news topics, slashing third-party LLM API expenses by ~60% and dropping response times to under 300ms.',
        highlights: ['vector similarity caching', 'slashing third-party LLM API expenses by ~60%', 'under 300ms'],
      },
      {
        title: 'Multi-Source Cross-Verification',
        icon: Radio,
        text: 'Automated clustering across competing news agencies to extract consensus facts while flagging editorial bias and unverified claims.',
        highlights: ['extract consensus facts', 'flagging editorial bias'],
      },
    ],
    technologies: ['RAG Pipeline', 'Qdrant', 'Jina Embeddings', 'Redis Upstash', 'TypeScript', 'Node.js', 'React'],
    image: '/assets/projects/news-rag.jpg',
    liveLink: 'https://voosh-news-rag-frontend.vercel.app/',
    githubLink: 'https://github.com/Pramod0347/voosh-news-rag-frontend',
    backendLink: 'https://github.com/Pramod0347/voosh-news-rag-backend',
    featured: true,
  },
  {
    number: '03',
    title: 'Clinical Copilot & MCP Architecture',
    roleTag: 'Software Engineer 2 · Agentic AI & MedTech',
    subtitle: 'LangGraph Autonomous Clinical Agents & On-Premise GPU Serving',
    mission:
      'Enterprise clinical copilot platform serving 20+ hospitals: built multi-step agent workflows via Model Context Protocol (MCP), event-driven patient journeys, and local GPU inference.',
    kpis: [
      { value: '87%', label: 'Contextual Accuracy', subtext: 'Optimized chunking & evaluation' },
      { value: '10×', label: 'Processing Speedup', subtext: 'Decoupled RabbitMQ workers' },
      { value: '−85%', label: 'Token Reduction', subtext: 'Prompt & graph caching' },
      { value: '20+', label: 'Hospitals Deployed', subtext: '1,000+ daily patients' },
    ],
    pipeline: [
      'Hospital EHR Data & Notes',
      'Custom Clinical MCP Server',
      'LangGraph Multi-Agent Graph',
      'vLLM on On-Premise GPU',
      'Clinician Verified Discharge',
    ],
    challenges: [
      {
        title: 'LangGraph Multi-Agent Orchestration',
        icon: Workflow,
        text: 'Built autonomous clinical agent loops with fallback paths and automated error recovery, coordinating diagnosis checks and drug interaction validations.',
        highlights: ['autonomous clinical agent loops', 'fallback paths', 'automated error recovery'],
      },
      {
        title: 'Model Context Protocol (MCP) Tool Boundaries',
        icon: ShieldCheck,
        text: 'Architected secure MCP servers to standardize agent tool-calling against clinical databases and knowledge graphs with strict HIPAA access boundaries.',
        highlights: ['secure MCP servers', 'strict HIPAA access boundaries'],
      },
      {
        title: 'On-Premise vLLM GPU Serving',
        icon: Cpu,
        text: 'Configured local high-throughput vLLM inference on on-premise GPUs, decoupling heavy narrative processing into asynchronous RabbitMQ worker queues.',
        highlights: ['high-throughput vLLM inference', 'on-premise GPUs', 'RabbitMQ worker queues'],
      },
      {
        title: 'Clinical Accuracy Tuning & Discharge Automation',
        icon: Activity,
        text: 'Elevated contextual search accuracy to 87% through specialized medical vector chunking and prompt engineering, cutting overall token expenditure by 85%.',
        highlights: ['accuracy to 87%', 'medical vector chunking', 'token expenditure by 85%'],
      },
    ],
    technologies: ['LangGraph', 'Model Context Protocol (MCP)', 'vLLM', 'RabbitMQ', 'FastAPI', 'Docker', 'Kubernetes'],
    image: '/assets/projects/clinical-copilot.jpg',
    featured: true,
  },
  {
    number: '04',
    title: 'ProcureFlow',
    roleTag: 'AI Software Engineer · Distributed Microservices',
    subtitle: 'Intelligent Enterprise Procurement & Auto-Reconciliation',
    mission:
      'An end-to-end B2B procurement workflow replacing manual tracking with automated vendor onboarding, purchase-order lifecycles, and auto-generated Goods Received Notes (GRN).',
    kpis: [
      { value: 'Multi-Role', label: 'Governance', subtext: 'Granular RBAC security' },
      { value: '100%', label: 'Audit Trail', subtext: 'Immutable approval logs' },
      { value: '99.4%', label: 'Match Rate', subtext: 'Automated GRN reconciliation' },
      { value: 'Dockerized', label: 'Microservices', subtext: 'Prisma + PostgreSQL backend' },
    ],
    pipeline: [
      'Vendor Onboarding Portal',
      'Microservices API Gateway',
      'Prisma ORM & PostgreSQL',
      'Redis Session Cache',
      'Auto-Reconciliation Engine',
    ],
    challenges: [
      {
        title: 'Automated Purchase-Order Lifecycles',
        icon: Workflow,
        text: 'Engineered an enterprise procurement dashboard with Role-Based Access Control (RBAC), real-time PO/GRN tracking, and multi-tier approval chains.',
        highlights: ['Role-Based Access Control (RBAC)', 'multi-tier approval chains'],
      },
      {
        title: 'High-Performance Microservices Backend',
        icon: Zap,
        text: 'Designed microservices with Docker, Prisma ORM, and PostgreSQL, cutting database response times and handling concurrent vendor updates.',
        highlights: ['Docker, Prisma ORM, and PostgreSQL', 'database response times'],
      },
      {
        title: 'Automated GRN Reconciliation',
        icon: ShieldCheck,
        text: 'Built automated matching between purchase orders, vendor invoices, and physical Goods Received Notes, flagging discrepancies instantly.',
        highlights: ['automated matching', 'Goods Received Notes', 'flagging discrepancies'],
      },
      {
        title: 'Enterprise Audit Trail & Reporting',
        icon: Database,
        text: 'Implemented tamper-evident transaction logging and executive spending dashboards with real-time budget burn charts.',
        highlights: ['tamper-evident transaction logging', 'real-time budget burn charts'],
      },
    ],
    technologies: ['React', 'Redux', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Microservices'],
    image: '/assets/projects/procureflow.jpg',
    liveLink: 'https://procurement-app-delta.vercel.app/',
    featured: false,
  },
];

// Compact Full-Width Unboxed Project Row (NO outer container boxes!)
const ProjectRow = ({ project, isLast }) => {
  const rowRef = useRef(null);

  // Track each project item's scroll progress for bi-directional fade-in & fade-out
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const rowY = useTransform(smoothProgress, [0.03, 0.25, 0.75, 0.97], [50, 0, 0, -50]);
  const rowOpacity = useTransform(smoothProgress, [0.03, 0.20, 0.80, 0.97], [0, 1, 1, 0]);

  return (
    <motion.article
      ref={rowRef}
      style={{ y: rowY, opacity: rowOpacity }}
      className={`w-full space-y-4 ${
        isLast ? 'pb-2' : 'border-b border-slate-200/80 pb-8 dark:border-slate-800/80'
      }`}
    >
      {/* Top Split: Content on Left, Compact Thumbnail on Right (saves massive height!) */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1 space-y-3">
          {/* Header Row: Number + Title + Role Tag + Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-slate-950 font-mono text-sm font-extrabold text-violet-400 shadow-2xs dark:bg-violet-950/40">
                {project.number}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-black tracking-tight text-cyan-600 dark:text-cyan-400 drop-shadow-[0_1px_8px_rgba(6,182,212,0.25)]">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-violet-700 dark:text-violet-300">
                    {project.roleTag}
                  </span>
                </div>
                <p className="font-mono text-xs text-violet-700/90 dark:text-violet-300/80 font-medium">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-violet-500/40 bg-violet-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-violet-700 hover:bg-violet-500/20 dark:text-violet-300 transition-colors"
                >
                  <Globe size={12} />
                  <span>Live Demo</span>
                  <ArrowUpRight size={11} />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-100/80 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700 hover:text-violet-600 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-violet-300 transition-colors"
                >
                  <Github size={12} />
                  <span>Frontend</span>
                </a>
              )}
              {project.backendLink && (
                <a
                  href={project.backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-100/80 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700 hover:text-violet-600 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-violet-300 transition-colors"
                >
                  <Github size={12} />
                  <span>Backend</span>
                </a>
              )}
            </div>
          </div>

          {/* Core Mandate Banner */}
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <span className="font-bold text-violet-600 dark:text-violet-400 mr-1.5">⚡ Architectural Core:</span>
            {project.mission}
          </p>

          {/* Lightweight Full-Width Telemetry Strip (NO nested boxes!) */}
          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-2 py-2 border-y border-slate-200/60 dark:border-slate-800/60 font-mono">
            {project.kpis.map((kpi) => (
              <div key={kpi.label} className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-black text-violet-600 dark:text-violet-400">
                  {kpi.value}
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {kpi.label}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden md:inline">
                  ({kpi.subtext})
                </span>
              </div>
            ))}
          </div>

          {/* Pipeline Flow (Clean inline text flow with arrow separators) */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-mono text-[10px] uppercase font-bold text-violet-600 dark:text-violet-400 mr-1 flex items-center gap-1">
              <Workflow size={12} /> Pipeline:
            </span>
            {project.pipeline.map((step, idx) => (
              <span
                key={step}
                className="font-mono text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1"
              >
                <span className="font-medium">{step}</span>
                {idx < project.pipeline.length - 1 && (
                  <span className="text-violet-500 font-bold mx-0.5">➔</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Compact Side Thumbnail (Replaces giant 300px box; cuts massive vertical height!) */}
        <div className="w-full lg:w-72 xl:w-80 h-36 sm:h-40 shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-[#070a12] shadow-sm dark:border-slate-800/80 relative group">
          <div className="flex items-center justify-between border-b border-slate-800/90 bg-[#0d121f]/90 px-3 py-1 text-[10px] font-mono text-slate-400">
            <span className="truncate">{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.app</span>
            <span className="flex items-center gap-1 text-[9px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          </div>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top opacity-75 contrast-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Key Engineering Challenges & Solutions (2-Column Grid without heavy card borders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 pt-1">
        {project.challenges.map((ch) => {
          const Icon = ch.icon;
          return (
            <div key={ch.title} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-violet-600 dark:text-violet-400">
                <Icon size={14} />
              </span>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-violet-800 dark:text-violet-200 leading-tight">
                  {ch.title}
                </h4>
                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {renderHighlightedText(
                    ch.text,
                    ch.highlights,
                    'font-semibold text-violet-600 dark:text-violet-300'
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stack Chips */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className="font-mono text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mr-1">
          Stack:
        </span>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-200/80 bg-slate-100/70 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const headerRef = useRef(null);

  // Track header scroll for smooth entry & exit
  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start end', 'end start'],
  });

  const smoothHeader = useSpring(headerProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const headerY = useTransform(smoothHeader, [0.02, 0.35, 0.65, 0.95], [50, 0, 0, -50]);
  const headerOpacity = useTransform(smoothHeader, [0.02, 0.28, 0.72, 0.95], [0, 1, 1, 0]);

  return (
    <div className="w-full space-y-8">
      {/* Section Header & Executive Summary */}
      <motion.div
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800/80"
      >
        <div>
          <h2 className="section-title flex flex-wrap items-center gap-x-2.5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              AI systems,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 1.25 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.22 }}
              className="bg-gradient-to-r from-violet-500 via-purple-400 to-indigo-400 dark:from-violet-300 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent font-black inline-block drop-shadow-[0_2px_12px_rgba(139,92,246,0.25)]"
            >
              built for real workflows
            </motion.span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Deep-dive production architectures: <span className="font-semibold text-violet-600 dark:text-violet-400">autonomous agents</span>,{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">high-precision RAG pipelines</span>,{' '}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">on-premise GPU inference</span>, and verifiable safety guardrails.
          </p>
        </div>

        {/* Quick Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-xs font-semibold text-violet-700 dark:text-violet-300">
            Production AI
          </span>
          <span className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-700 dark:text-cyan-300">
            High-Throughput RAG
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            Agentic Workflows
          </span>
        </div>
      </motion.div>

      {/* Projects Full-Width Open Stack (NO outer container boxes!) */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.title}
            project={project}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;