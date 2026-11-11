import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Activity,
  Bot,
  Cpu,
  Database,
  Layers,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from 'lucide-react';

const renderHighlightedText = (
  text,
  highlights = [],
  colorClass = 'font-semibold text-emerald-600 dark:text-emerald-300'
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

const experiences = [
  {
    company: 'Meril Life Sciences (Nuvo AI)',
    role: 'Software Engineer 2',
    logo: '/assets/companies/meril.png',
    logoFit: 'cover',
    duration: 'Jul 2026 – Present',
    isActive: true,
    location: 'Bengaluru, India',
    focus: 'MedTech · AI Systems · Clinical Workflows',
    mission:
      'Architecting autonomous clinical copilots, custom Model Context Protocol (MCP) servers, and on-premise GPU inference across 20+ hospital networks.',
    kpis: [
      { value: '87%', label: 'RAG Precision', subtext: 'Raised from 71% baseline (+16%)' },
      { value: '10×', label: 'Processing Speed', subtext: 'Async RabbitMQ workers' },
      { value: '−85%', label: 'Token Reduction', subtext: 'Prompt & graph caching' },
      { value: '1,000+', label: 'Daily Patients', subtext: 'Live across 20+ hospitals' },
    ],
    pipeline: [
      'EHR APIs & Knowledge Graph',
      'Custom MCP Server',
      'LangGraph Multi-Agent',
      'vLLM on On-Prem GPU',
      'Verified Discharge Summary',
    ],
    achievements: [
      {
        title: 'Agentic AI & Custom MCP Servers',
        icon: Bot,
        text: 'Built LangGraph copilots, custom MCP servers for EHR APIs and knowledge-graph queries, and multi-step agent workflows with error recovery.',
        highlights: ['LangGraph copilots', 'custom MCP servers', 'multi-step agent workflows'],
      },
      {
        title: 'High-Precision RAG & Token Efficiency',
        icon: Database,
        text: 'Improved retrieval precision from 71% to 87%, sped up document processing 10× with RabbitMQ pipelines, and reduced LLM token usage by approximately 85%.',
        highlights: ['retrieval precision from 71% to 87%', '10×', 'RabbitMQ pipelines', '85%'],
      },
      {
        title: 'On-Premise GPU Inference Infrastructure',
        icon: Cpu,
        text: 'Set up vLLM inference on on-premise GPUs and worked across retrieval, evaluation, and fine-tuning.',
        highlights: ['vLLM inference', 'on-premise GPUs'],
      },
      {
        title: 'Clinical Event Pipeline & Gemini Summaries',
        icon: Activity,
        text: 'Built an event-driven patient-journey system across hospital stages, serving 1,000+ patients daily at 20+ hospitals; built a Gemini-powered discharge-summary extension by aggregating data from 10+ patient-page APIs for clinicians.',
        highlights: ['1,000+ patients daily', '20+ hospitals', 'Gemini-powered discharge-summary'],
      },
    ],
    tech: [
      'LangGraph',
      'Model Context Protocol (MCP)',
      'vLLM (GPU)',
      'Qdrant Vector DB',
      'FastAPI',
      'RabbitMQ',
      'PostgreSQL',
      'Docker',
      'Plane',
    ],
  },
  {
    company: 'Kushals Retail Pvt. Ltd.',
    role: 'Software Engineer',
    logo: '/assets/companies/kushals.png',
    logoFit: 'contain',
    duration: 'Nov 2024 – Jun 2026',
    isActive: false,
    location: 'Bengaluru, India',
    focus: 'Retail SaaS · Applied AI · Distributed Systems',
    mission:
      'Engineering real-time multi-store inventory synchronization, low-latency microservices, and AI merchandise showcase optimization across 125+ retail stores.',
    kpis: [
      { value: '125+', label: 'Stores Synced', subtext: 'Real-time event stream' },
      { value: '−30%', label: 'Dead Stock', subtext: 'AI showcase recommendations' },
      { value: '10K+', label: 'Req/s Sustained', subtext: 'JWT & Redis session cache' },
      { value: '<150ms', label: 'Query P99', subtext: 'Optimized from ~400ms' },
    ],
    pipeline: [
      '125+ Store POS Registers',
      'PostgreSQL Change Events',
      'AWS Queue Pipeline',
      'Redis Session Cache',
      'Omnichannel Real-Time Sync',
    ],
    achievements: [
      {
        title: 'AI Showcase & Merchandise Optimization',
        icon: TrendingUp,
        text: 'Developed an AI display-optimization system recommending showcase changes across 125+ jewellery stores, reducing dead stock by 30%.',
        highlights: ['125+ jewellery stores', 'reducing dead stock by 30%'],
      },
      {
        title: 'Distributed Inventory Event Stream',
        icon: Workflow,
        text: 'Designed PostgreSQL and AWS event-pipeline inventory synchronization for real-time updates across 125+ stores and online channels.',
        highlights: ['PostgreSQL and AWS event-pipeline', '125+ stores'],
      },
      {
        title: 'Executive AI Strategy Tools',
        icon: Bot,
        text: 'Built a Python and OpenAI strategy tool with OKR tracking and transcript analysis, supporting decisions across five teams.',
        highlights: ['Python and OpenAI strategy tool', 'five teams'],
      },
      {
        title: 'Monolith to Microservices & Query Tuning',
        icon: Zap,
        text: 'Built REST APIs with JWT authentication, rate limiting, and Redis sessions for 10K+ users; optimized PostgreSQL queries from approximately 400 ms to under 150 ms and migrated a monolith to AWS EC2 microservices with Docker and Redis.',
        highlights: ['10K+ users', 'under 150 ms', 'AWS EC2 microservices'],
      },
    ],
    tech: [
      'Python 3.12',
      'OpenAI API',
      'PostgreSQL',
      'Redis',
      'AWS EC2',
      'RabbitMQ',
      'Docker',
      'Microservices',
    ],
  },
  {
    company: 'Marmeto',
    role: 'Software Engineer',
    logo: '/assets/companies/marmeto.png',
    logoFit: 'cover',
    duration: 'Jan 2023 – Nov 2024',
    isActive: false,
    location: 'Bengaluru, India',
    focus: 'E-commerce Core · High-Throughput APIs · Headless Web',
    mission:
      'Engineering high-concurrency payment integrations, idempotent returns engines, and headless storefront architectures for Levi’s India and Bewakoof.com.',
    kpis: [
      { value: '500+', label: 'Monthly Returns', subtext: 'Automated idempotent refunds' },
      { value: '99.9%', label: 'Uptime', subtext: '10K+ concurrent requests' },
      { value: '−20%', label: 'Bounce Rate', subtext: 'Bewakoof React migration' },
      { value: '0', label: 'Payment Drops', subtext: 'Webhook retry automation' },
    ],
    pipeline: [
      '10K+ Concurrent Shoppers',
      'Idempotent Returns Engine',
      'Razorpay & Shiprocket Webhooks',
      'Automated Refund Settlement',
    ],
    achievements: [
      {
        title: 'Idempotent Reverse Logistics Engine',
        icon: Workflow,
        text: 'Led Levi’s India returns and exchanges with idempotent APIs and automated refunds, reducing support tickets across 500+ monthly orders.',
        highlights: ['idempotent APIs', '500+ monthly orders'],
      },
      {
        title: 'Resilient Payment & Logistics Webhooks',
        icon: Zap,
        text: 'Integrated Razorpay and Shiprocket using webhooks and retry logic for reliable payments and shipment tracking.',
        highlights: ['Razorpay and Shiprocket', 'retry logic'],
      },
      {
        title: 'Headless Storefront React Migration',
        icon: Layers,
        text: 'Directed Bewakoof.com’s migration from Salesforce Commerce Cloud to component-driven React, reducing bounce rates by 20%.',
        highlights: ['Bewakoof.com’s migration', 'reducing bounce rates by 20%'],
      },
      {
        title: 'High-Concurrency DB Connection Pooling',
        icon: Database,
        text: 'Optimized database queries and connection pooling to sustain 10K+ concurrent requests at 99.9% uptime for Levi’s India.',
        highlights: ['connection pooling', '10K+ concurrent requests', '99.9% uptime'],
      },
    ],
    tech: [
      'React.js',
      'FastAPI',
      'PostgreSQL',
      'Razorpay',
      'Shiprocket',
      'Salesforce Commerce Cloud',
      'Redis',
    ],
  },
];

// Compact Full-Width Unboxed Experience Block
const ExperienceRow = ({ exp, isLast }) => {
  const rowRef = useRef(null);

  // Track each item's viewport scroll progress for silky bi-directional fade-in / fade-out
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
      {/* Row 1: Header (Logo + Role + Company + Badges + Duration) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-white p-0 shadow-2xs dark:border-emerald-500/30 dark:bg-emerald-950/40 overflow-hidden">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className={`h-full w-full ${
                exp.logoFit === 'cover' ? 'object-cover' : 'object-contain p-1'
              }`}
              loading="lazy"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display text-base sm:text-lg font-black tracking-tight text-cyan-600 dark:text-cyan-400 drop-shadow-[0_1px_8px_rgba(6,182,212,0.25)]">
                {exp.company}
              </span>
              <span className="text-slate-400 dark:text-slate-600 font-bold">/</span>
              <h3 className="font-display text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-300">
                {exp.role}
              </h3>
              {exp.isActive && (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  CURRENT
                </span>
              )}
            </div>
            <p className="font-mono text-xs text-emerald-700/90 dark:text-emerald-300/80 font-medium">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{exp.focus}</span>
              {' · '}
              <span className="text-slate-500 dark:text-slate-400">{exp.location}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center font-mono text-xs font-semibold">
          <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-700 dark:text-emerald-300">
            {exp.duration}
          </span>
        </div>
      </div>

      {/* Row 2: Core Mandate (Compact Clean Text) */}
      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <span className="font-bold text-emerald-600 dark:text-emerald-400 mr-1.5">⚡ Mandate:</span>
        {exp.mission}
      </p>

      {/* Row 3: Lightweight Full-Width Telemetry Strip (NO nested boxes!) */}
      <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-2 py-2 border-y border-slate-200/60 dark:border-slate-800/60 font-mono">
        {exp.kpis.map((kpi) => (
          <div key={kpi.label} className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400">
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

      {/* Row 4: Pipeline Flow (Clean inline text flow with arrow separators) */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        <span className="font-mono text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 mr-1 flex items-center gap-1">
          <Workflow size={12} /> Pipeline:
        </span>
        {exp.pipeline.map((step, idx) => (
          <span
            key={step}
            className="font-mono text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1"
          >
            <span className="font-medium">{step}</span>
            {idx < exp.pipeline.length - 1 && (
              <span className="text-emerald-500 font-bold mx-0.5">➔</span>
            )}
          </span>
        ))}
      </div>

      {/* Row 5: Key Engineering Achievements (Clean 2-Column Grid without heavy borders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 pt-1">
        {exp.achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Icon size={14} />
              </span>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-200 leading-tight">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {renderHighlightedText(
                    item.text,
                    item.highlights,
                    'font-semibold text-emerald-600 dark:text-emerald-300'
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Row 6: Stack Chips */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className="font-mono text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mr-1">
          Stack:
        </span>
        {exp.tech.map((tech) => (
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

const Experience = () => {
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
      {/* Section Header & 10-Second Executive Summary */}
      <motion.div
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800/80"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white flex flex-wrap items-center gap-x-2.5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Engineering
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 1.25 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.22 }}
              className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent font-black inline-block drop-shadow-[0_2px_12px_rgba(16,185,129,0.25)]"
            >
              Track Record
            </motion.span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">4+ years</span> shipping production backends,{' '}
            <span className="font-semibold text-teal-600 dark:text-teal-400">autonomous AI copilots</span>, and{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">distributed event systems</span>. Optimized for rapid executive review.
          </p>
        </div>

        {/* 10-Second Skim Summary Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            4+ Years Proven
          </span>
          <span className="rounded-xl border border-teal-500/30 bg-teal-500/10 px-3 py-1 font-mono text-xs font-semibold text-teal-700 dark:text-teal-300">
            3 Deployments
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs font-semibold text-purple-700 dark:text-purple-300">
            <Sparkles className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
            AI + Distributed Systems
          </span>
        </div>
      </motion.div>

      {/* Experience Full-Width Open Stack (NO outer container boxes!) */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceRow
            key={exp.company}
            exp={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;