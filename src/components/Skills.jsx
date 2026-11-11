import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Activity,
  CheckCircle2,
  Radio,
  Sparkles,
} from 'lucide-react';
import {
  SiAmazonwebservices,
  SiApachekafka,
  SiApollographql,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGooglegemini,
  SiJsonwebtokens,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiNodedotjs,
  SiNvidia,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
} from 'react-icons/si';

// Custom Official Vector Logos for Specialized AI Stack
const QdrantLogo = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2zm0 2.3l6.9 4-6.9 4-6.9-4 6.9-4zm-7.5 5.8l6.5 3.8v7.2l-6.5-3.8v-7.2zm15 0v7.2l-6.5 3.8v-7.2l6.5-3.8z" />
  </svg>
);

const McpLogo = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

// --- 1. The Flagship Primary Skills (8 Pop-In Highlighted Technologies) ---
const primarySkills = [
  {
    id: 'langgraph',
    name: 'LangGraph',
    badge: 'Multi-Agent Cyclic',
    subtitle: 'Stateful cyclic multi-agent graphs, error recovery & human-in-the-loop signoff',
    icon: SiLangchain,
    brandColor: 'text-cyan-400',
    bgTint: 'bg-cyan-500/10',
    borderGlow: 'hover:border-cyan-400/60 hover:shadow-cyan-500/15',
    pillColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
  },
  {
    id: 'mcp',
    name: 'Model Context Protocol (MCP)',
    badge: 'HIPAA Sandboxing',
    subtitle: 'Air-gapped server isolation between LLMs and hospital databases with zero PII leaks',
    icon: McpLogo,
    brandColor: 'text-emerald-400',
    bgTint: 'bg-emerald-500/10',
    borderGlow: 'hover:border-emerald-400/60 hover:shadow-emerald-500/15',
    pillColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  },
  {
    id: 'vllm',
    name: 'vLLM on On-Prem GPU',
    badge: '10× Acceleration',
    subtitle: 'PagedAttention, dynamic GPU KV-cache allocation & local open-weights serving',
    icon: SiNvidia,
    brandColor: 'text-[#76B900]',
    bgTint: 'bg-lime-500/10',
    borderGlow: 'hover:border-lime-400/60 hover:shadow-lime-500/15',
    pillColor: 'border-lime-500/30 bg-lime-500/10 text-lime-700 dark:text-lime-300',
  },
  {
    id: 'qdrant',
    name: 'Qdrant Vector DB',
    badge: '87% Precision',
    subtitle: 'Dense + sparse HNSW indexing, BM25 hybrid ranking & payload tenant isolation',
    icon: QdrantLogo,
    brandColor: 'text-rose-400',
    bgTint: 'bg-rose-500/10',
    borderGlow: 'hover:border-rose-400/60 hover:shadow-rose-500/15',
    pillColor: 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300',
  },
  {
    id: 'fastapi-python',
    name: 'FastAPI & Python 3.12',
    badge: '10K+ Req/s Async',
    subtitle: 'Asyncio microservices, Pydantic strict typing & high-throughput inference gateways',
    icon: SiFastapi,
    brandColor: 'text-teal-400',
    bgTint: 'bg-teal-500/10',
    borderGlow: 'hover:border-teal-400/60 hover:shadow-teal-500/15',
    pillColor: 'border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-300',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & pgvector',
    badge: 'ACID + Vectors',
    subtitle: 'ACID transactional ledgers, PgBouncer pooling & vector embeddings storage',
    icon: SiPostgresql,
    brandColor: 'text-sky-400',
    bgTint: 'bg-blue-500/10',
    borderGlow: 'hover:border-sky-400/60 hover:shadow-sky-500/15',
    pillColor: 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300',
  },
  {
    id: 'redis',
    name: 'Redis & Upstash',
    badge: '<14ms Latency',
    subtitle: 'In-memory semantic vector cache, distributed rate limiting & session locking',
    icon: SiRedis,
    brandColor: 'text-rose-400',
    bgTint: 'bg-rose-500/10',
    borderGlow: 'hover:border-rose-400/60 hover:shadow-rose-500/15',
    pillColor: 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300',
  },
  {
    id: 'rabbitmq-kafka',
    name: 'RabbitMQ & Kafka',
    badge: 'Decoupled Queues',
    subtitle: 'Asynchronous Celery worker pipelines, dead-letter exchanges & event streams',
    icon: SiRabbitmq,
    brandColor: 'text-amber-400',
    bgTint: 'bg-amber-500/10',
    borderGlow: 'hover:border-amber-400/60 hover:shadow-amber-500/15',
    pillColor: 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  },
];

// --- 2. The Minimal Supporting Stack (Zero-Clutter Compact Ribbon) ---
const supportingSkills = [
  { name: 'Google Gemini 1.5', icon: SiGooglegemini, brandColor: 'text-sky-400' },
  { name: 'OpenAI GPT-4o API', icon: SiOpenai, brandColor: 'text-slate-300' },
  { name: 'Jina v2 Embeddings', icon: Radio, brandColor: 'text-amber-400' },
  { name: 'TruLens RAG Triad', icon: CheckCircle2, brandColor: 'text-teal-400' },
  { name: 'Python 3.12 Core', icon: SiPython, brandColor: 'text-sky-400' },
  { name: 'TypeScript', icon: SiTypescript, brandColor: 'text-blue-400' },
  { name: 'Docker Containers', icon: SiDocker, brandColor: 'text-sky-400' },
  { name: 'Kubernetes (K8s)', icon: SiKubernetes, brandColor: 'text-blue-400' },
  { name: 'AWS Cloud Services', icon: SiAmazonwebservices, brandColor: 'text-amber-400' },
  { name: 'Node.js & Express', icon: SiNodedotjs, brandColor: 'text-emerald-400' },
  { name: 'Prisma ORM', icon: SiPrisma, brandColor: 'text-slate-300' },
  { name: 'GraphQL & Apollo', icon: SiApollographql, brandColor: 'text-pink-400' },
  { name: 'MongoDB', icon: SiMongodb, brandColor: 'text-emerald-400' },
  { name: 'Apache Kafka', icon: SiApachekafka, brandColor: 'text-slate-200' },
  { name: 'JWT & RBAC Security', icon: SiJsonwebtokens, brandColor: 'text-rose-400' },
  { name: 'CI/CD & Git Workflows', icon: SiGit, brandColor: 'text-orange-400' },
  { name: 'WebSockets & Socket.io', icon: SiSocketdotio, brandColor: 'text-slate-300' },
  { name: 'Query Optimization', icon: Activity, brandColor: 'text-amber-400' },
];

const Skills = () => {
  const containerRef = useRef(null);

  // Smooth scroll tracking for the section header
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const headerY = useTransform(smoothProgress, [0.02, 0.25, 0.75, 0.98], [40, 0, 0, -40]);
  const headerOpacity = useTransform(smoothProgress, [0.02, 0.20, 0.80, 0.98], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="w-full space-y-6">
      {/* Section Header with Kinetic Heading Highlight */}
      <motion.div
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
              Skills for
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 1.25 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.22 }}
              className="bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400 dark:from-sky-300 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent font-black inline-block drop-shadow-[0_2px_12px_rgba(56,189,248,0.25)]"
            >
              production AI
            </motion.span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Technologies and runtimes I build with daily—focusing on{' '}
            <span className="font-semibold text-sky-600 dark:text-sky-400">autonomous agent orchestration</span>,{' '}
            <span className="font-semibold text-teal-600 dark:text-teal-400">high-precision RAG</span>, and{' '}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">low-latency inference microservices</span>.
          </p>
        </div>

        {/* Executive Highlights Pill */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <span className="inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-sky-700 dark:text-sky-300">
            <Sparkles className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400 animate-pulse" />
            8 Core Production Technologies
          </span>
        </div>
      </motion.div>

      {/* --- Section 1: The Highlighted Core Arsenal (Pop-In Bouncy Animation on Scroll) --- */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Primary Daily Production Stack
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {primarySkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 35, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 18,
                  delay: (idx % 2) * 0.08,
                }}
                whileHover={{ y: -4, scale: 1.015 }}
                className={`group relative flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-2xs backdrop-blur-md transition-all duration-300 ${skill.borderGlow} hover:shadow-lg dark:border-slate-800/90 dark:bg-[#0c1017]/90 overflow-hidden cursor-default`}
              >
                {/* Top Subtle Animated Accent Beam on Hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Authentic Brand Icon Frame */}
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 dark:border-slate-800 ${skill.bgTint} shadow-2xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2`}
                >
                  <Icon size={24} className={skill.brandColor} />
                </span>

                {/* Content: Title + Badge + Subtitle */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-sky-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold ${skill.pillColor}`}
                    >
                      {skill.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {skill.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- Section 2: Supporting Production Ecosystem (Minimal, Zero-Clutter Chip Cloud) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-30px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 space-y-3"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Supporting Ecosystem & Infrastructure
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
            {supportingSkills.length} Additional Technologies
          </span>
        </div>

        {/* Lightweight Compact Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {supportingSkills.map((tech) => {
            const Icon = tech.icon;
            return (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/70 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-slate-950 dark:border-slate-800/80 dark:bg-[#0c1017]/70 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-white"
              >
                <Icon size={14} className={tech.brandColor} />
                <span>{tech.name}</span>
              </span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
