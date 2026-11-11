import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Copy,
  Cpu,
  Database,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const telemetryMetrics = [
  {
    value: '4+',
    label: 'Years building backend & AI systems',
    subtext: 'MedTech · SaaS · E-Commerce',
    badge: '10K+ Req/s',
    metricDetail: '2022 → Present',
    icon: Cpu,
  },
  {
    value: '87%',
    label: 'RAG retrieval precision achieved',
    subtext: 'Raised from 71% baseline (+16%)',
    badge: 'Qdrant Vector DB',
    progress: 87,
    icon: Database,
  },
  {
    value: '10×',
    label: 'Faster document jobs with RabbitMQ',
    subtext: 'Decoupled async worker pipeline',
    badge: 'vLLM on GPU',
    metricDetail: '120s → 12s latency',
    icon: Zap,
  },
  {
    value: '125+',
    label: 'Retail stores real-time synced',
    subtext: 'PostgreSQL & AWS event pipeline',
    badge: '99.9% Uptime',
    progress: 99.9,
    icon: Activity,
  },
];

const quickSpecs = [
  'LangGraph & MCP',
  'FastAPI & Python 3.12',
  'vLLM On-Premise',
  'Qdrant Vector DB',
  'PostgreSQL & Redis',
  'RabbitMQ & Kafka',
  'Docker & Kubernetes',
  'AWS Cloud',
];

// Clean text fade-in for narrative sentences
const textFadeVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0.1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Kinetic spring fly-in specifically for highlighted keywords & badges
const flyAndSitVariant = {
  hidden: (config = {}) => ({
    opacity: 0,
    y: config.y ?? 55,
    x: config.x ?? 0,
    scale: config.scale ?? 1.3,
    filter: 'blur(8px)',
  }),
  visible: (config = {}) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      delay: config.delay ?? 0.2,
      type: 'spring',
      stiffness: 150,
      damping: 13,
      mass: 0.85,
    },
  }),
};

const AboutMe = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('json');

  // Track window scroll directly for rock-solid reliability
  const { scrollY } = useScroll();

  // Inertial spring for natural, fluid scroll physics
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.5,
  });

  // Layer 1: Top Identity Bar vanishes upward early, reverses back down on scroll-up
  const topBarY = useTransform(smoothScrollY, [0, 240], [0, -45]);
  const topBarOpacity = useTransform(smoothScrollY, [0, 200], [1, 0]);

  // Layer 2: Main Hero Narrative glides upward, scales down, and dissolves, reverses on scroll-up
  const heroNarrativeY = useTransform(smoothScrollY, [0, 520], [0, -90]);
  const heroNarrativeOpacity = useTransform(smoothScrollY, [0, 420], [1, 0]);
  const heroNarrativeScale = useTransform(smoothScrollY, [0, 520], [1, 0.95]);

  // Layer 3: Terminal glides off to top-right with depth, reverses on scroll-up
  const terminalY = useTransform(smoothScrollY, [0, 520], [0, -90]);
  const terminalX = useTransform(smoothScrollY, [0, 520], [0, 50]);
  const terminalOpacity = useTransform(smoothScrollY, [0, 420], [1, 0]);
  const terminalScale = useTransform(smoothScrollY, [0, 520], [1, 0.95]);

  // Layer 4: Telemetry Metrics Cards remain fully visible while in viewport, only dissolving as user scrolls past into next section
  const metricsY = useTransform(smoothScrollY, [650, 1100], [0, -60]);
  const metricsOpacity = useTransform(smoothScrollY, [650, 1000], [1, 0]);
  const metricsScale = useTransform(smoothScrollY, [650, 1100], [1, 0.96]);

  const copyEmail = (e) => {
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 45,
        spread: 75,
        origin: { x, y },
        colors: ['#06b6d4', '#22d3ee', '#10b981', '#38bdf8'],
      });
    }
    navigator.clipboard?.writeText('pramod.goudar.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="hero-content flex w-full flex-col items-start justify-center space-y-8">
      {/* Top Identity Command Bar (Unboxed & Minimal) */}
      <motion.div
        style={{ y: topBarY, opacity: topBarOpacity }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full pb-2"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left: Avatar + Name + Role + Verification */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="relative">
              {/* Gradient border ring */}
              <div className="flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 p-[1.5px] shadow-sm shadow-cyan-500/20">
                <span className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 font-mono text-base sm:text-lg font-black text-white dark:bg-slate-900">
                  PG<span className="text-cyan-400">.</span>
                </span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <h1 className="font-display text-xl sm:text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                  Pramod Goudar
                </h1>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                  <ShieldCheck size={12} className="text-emerald-500" />
                  <span>Verified AI Engineer</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                <p className="font-mono text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  AI Software Engineer
                </p>
                <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                  Autonomous Agents & RAG Systems
                </span>
              </div>
            </div>
          </div>

          {/* Right: Availability & Geolocation Capsule */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start sm:self-center">
            <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Hire</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/70 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 shadow-2xs dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
              <MapPin size={13} className="text-cyan-500" />
              <span>Bengaluru, India</span>
              <span className="text-slate-400 dark:text-slate-500">·</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">IST (UTC+5:30)</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Grid: Narrative + Interactive Terminal */}
      <div className="hero-layout grid w-full gap-8 lg:grid-cols-[1.18fr,1fr] lg:items-center">
        {/* Left Column: Kinetic Narrative with Highlight Fly-in */}
        <motion.div
          style={{
            y: heroNarrativeY,
            opacity: heroNarrativeOpacity,
            scale: heroNarrativeScale,
          }}
        >
          {/* Big Impact Headline with Kinetic Masked Slide-In & Glowing Accent */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-950 dark:text-white leading-[1.12]">
            <span className="block overflow-visible py-0.5">
              <motion.span
                custom={0.12}
                initial="hidden"
                animate="visible"
                variants={textFadeVariant}
                className="inline-block mr-3 sm:mr-4"
              >
                I build
              </motion.span>
              <motion.span
                custom={{ delay: 0.28, y: 70, scale: 1.35 }}
                initial="hidden"
                animate="visible"
                variants={flyAndSitVariant}
                className="hero-title-accent inline-block"
              >
                systems
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <motion.span
                custom={0.24}
                initial="hidden"
                animate="visible"
                variants={textFadeVariant}
                className="block"
              >
                that make ideas
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <motion.span
                custom={0.34}
                initial="hidden"
                animate="visible"
                variants={textFadeVariant}
                className="block"
              >
                work at scale<span className="hero-title-period">.</span>
              </motion.span>
            </span>
          </h2>

          <motion.p
            custom={0.42}
            initial="hidden"
            animate="visible"
            variants={textFadeVariant}
            className="hero-role mt-4 font-display text-base font-semibold text-slate-800 dark:text-slate-200 sm:text-lg flex flex-wrap items-center gap-x-2"
          >
            <span className="text-cyan-600 dark:text-cyan-400">Autonomous Agents</span>
            <span className="text-slate-400">·</span>
            <span className="text-emerald-600 dark:text-emerald-400">Production RAG</span>
            <span className="text-slate-400">·</span>
            <span className="text-violet-600 dark:text-violet-400">Distributed High-Throughput APIs</span>
          </motion.p>

          <motion.div
            custom={0.48}
            initial="hidden"
            animate="visible"
            variants={textFadeVariant}
            className="mt-5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 space-y-2"
          >
            <p>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">4+ years</span> shipping
              production backends, high-throughput pipelines, and applied AI systems across{' '}
              <span className="font-semibold text-cyan-600 dark:text-cyan-300">MedTech</span>,{' '}
              <span className="font-semibold text-violet-600 dark:text-violet-300">SaaS</span>, and{' '}
              <span className="font-semibold text-amber-600 dark:text-amber-300">retail e-commerce</span>.
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Specialized in taking AI from evaluation into agentic workflows and on-premise GPU inference with{' '}
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Python</span>,{' '}
              <span className="font-semibold text-teal-600 dark:text-teal-400">FastAPI</span>,{' '}
              <span className="font-semibold text-sky-600 dark:text-sky-400">LangGraph</span>, and{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">PostgreSQL</span>.
            </p>
          </motion.div>

          {/* Quick Specs Chips: Staggered Fly-In */}
          <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            {quickSpecs.map((spec, idx) => (
              <motion.span
                key={spec}
                custom={{ delay: 0.82 + idx * 0.04, y: 30, scale: 1.15 }}
                initial="hidden"
                animate="visible"
                variants={flyAndSitVariant}
                className="tag-chip text-xs"
              >
                {spec}
              </motion.span>
            ))}
          </div>

          {/* Developer CTA Buttons */}
          <motion.div
            custom={1.05}
            initial="hidden"
            animate="visible"
            variants={textFadeVariant}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="/projects"
              onClick={(event) => {
                event.preventDefault();
                onNavigate('/projects');
              }}
              className="hero-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-cyan-500/20"
            >
              Explore Architecture & Work <ArrowDown className="h-4 w-4" />
            </a>

            <a
              href="/contact"
              onClick={(event) => {
                event.preventDefault();
                onNavigate('/contact');
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/90 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300 shadow-xs"
            >
              <BriefcaseBusiness className="h-4 w-4 text-emerald-500" />
              Open to Work
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/90 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400 shadow-xs"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4 text-slate-400" />}
              {copied ? 'Email Copied!' : 'Copy Email'}
            </button>
          </motion.div>

          {/* Direct Verified Contact Bar */}
          <motion.div
            custom={1.12}
            initial="hidden"
            animate="visible"
            variants={textFadeVariant}
            className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-cyan-500" /> +91 8951790286
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-cyan-500" /> pramod.goudar.dev@gmail.com
            </span>
          </motion.div>
        </motion.div>

        {/* Developer Terminal Console Widget */}
        <motion.div
          style={{
            y: terminalY,
            x: terminalX,
            opacity: terminalOpacity,
            scale: terminalScale,
          }}
          initial={{ opacity: 0, x: 60, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.35,
            duration: 0.8,
            type: 'spring',
            stiffness: 120,
            damping: 18,
          }}
          className="terminal-window w-full shadow-2xl rounded-2xl border border-slate-700/80 bg-[#0a0e17] overflow-hidden"
        >
          {/* Terminal Window Header */}
          <div className="terminal-topbar flex items-center justify-between border-b border-slate-800/90 bg-[#0f1422] px-4 py-2.5">
            <div className="terminal-dots flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>

            <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" /> pramod@ai-engineer: ~
            </span>

            {/* Terminal File Tabs */}
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('json')}
                className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
                  activeTab === 'json'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                profile.json
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sh')}
                className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
                  activeTab === 'sh'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                curl.sh
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('py')}
                className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
                  activeTab === 'py'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                agent.py
              </button>
            </div>
          </div>

          {/* Terminal File Content Area */}
          <div className="terminal-content p-4 text-xs font-mono leading-relaxed overflow-x-auto min-h-[250px] bg-[#070a12]/90">
            <AnimatePresence mode="wait">
              {activeTab === 'json' && (
                <motion.div
                  key="json"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-0.5"
                >
                  <p className="text-slate-500">{"{"}</p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"engineer"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"pramod_dev"</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"role"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"AI Software Engineer"</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"experience_years"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-amber-400">4</span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"specialization"</span>
                    <span className="text-slate-400">: [</span>
                  </p>
                  <p className="pl-8 text-emerald-300">"Agentic Workflows (LangGraph + MCP)",</p>
                  <p className="pl-8 text-emerald-300">"RAG Pipelines & Qdrant Vector Search",</p>
                  <p className="pl-8 text-emerald-300">"On-Premise GPU Inference (vLLM)",</p>
                  <p className="pl-8 text-emerald-300">"Distributed Event Topologies (RabbitMQ + Kafka)"</p>
                  <p className="pl-4 text-slate-400">],</p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"production_benchmarks"</span>
                    <span className="text-slate-400">: {"{"}</span>
                  </p>
                  <p className="pl-8">
                    <span className="text-sky-300">"retrieval_precision"</span>: <span className="text-emerald-400">"87%"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-sky-300">"document_speedup"</span>: <span className="text-emerald-400">"10x"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-sky-300">"token_reduction"</span>: <span className="text-emerald-400">"-85%"</span>
                  </p>
                  <p className="pl-4 text-slate-400">{"},"}</p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"status"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">"ready_to_deploy"</span>
                  </p>
                  <p className="text-slate-500">{"}"}</p>
                </motion.div>
              )}

              {activeTab === 'sh' && (
                <motion.div
                  key="sh"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-1"
                >
                  <p className="text-cyan-400 font-semibold">
                    <span className="text-emerald-400">$</span> curl -s https://api.pramod.dev/health
                  </p>
                  <p className="text-slate-400 text-[11px]">HTTP/2 200 OK</p>
                  <p className="text-slate-500 text-[11px]">content-type: application/json</p>
                  <p className="text-slate-500 text-[11px]">x-response-time: 14ms</p>
                  <p className="text-slate-500 text-[11px]">x-status: healthy</p>
                  <div className="pt-2 text-slate-300">
                    <p className="text-slate-500">{"{"}</p>
                    <p className="pl-4"><span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"online"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">"candidate"</span>: <span className="text-emerald-400">"Pramod Goudar"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">"location"</span>: <span className="text-emerald-400">"Bengaluru, India"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">"stack"</span>: <span className="text-emerald-400">"Python 3.12, FastAPI, LangGraph, Qdrant, Redis"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">"inference_backend"</span>: <span className="text-emerald-400">"vLLM on GPU"</span>,</p>
                    <p className="pl-4"><span className="text-cyan-400">"contact"</span>: <span className="text-emerald-400">"pramod.goudar.dev@gmail.com"</span></p>
                    <p className="text-slate-500">{"}"}</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'py' && (
                <motion.div
                  key="py"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-1 font-mono text-slate-300"
                >
                  <p className="text-slate-500 italic">{"# LangGraph Copilot + Custom MCP Server Setup"}</p>
                  <p>
                    <span className="text-purple-400">from</span> <span className="text-slate-200">langgraph.graph</span> <span className="text-purple-400">import</span> <span className="text-cyan-300">StateGraph</span>, <span className="text-cyan-300">END</span>
                  </p>
                  <p>
                    <span className="text-purple-400">from</span> <span className="text-slate-200">mcp.client</span> <span className="text-purple-400">import</span> <span className="text-cyan-300">MCPClient</span>
                  </p>
                  <p className="pt-2">
                    <span className="text-purple-400">class</span> <span className="text-yellow-300 font-semibold">CopilotPipeline</span>:
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">def</span> <span className="text-sky-300 font-semibold">__init__</span>(<span className="text-orange-300">self</span>):
                  </p>
                  <p className="pl-8 text-slate-300">
                    <span className="text-orange-300">self</span>.mcp = <span className="text-cyan-300">MCPClient</span>(<span className="text-emerald-400">"mcp://ehr.clinical.local"</span>)
                  </p>
                  <p className="pl-8 text-slate-300">
                    <span className="text-orange-300">self</span>.vector_db = <span className="text-cyan-300">QdrantClient</span>(host=<span className="text-emerald-400">"localhost"</span>, port=<span className="text-amber-400">6333</span>)
                  </p>
                  <p className="pl-4 pt-1">
                    <span className="text-purple-400">async def</span> <span className="text-sky-300 font-semibold">run</span>(<span className="text-orange-300">self</span>, query: <span className="text-cyan-300">str</span>) -&gt; <span className="text-cyan-300">dict</span>:
                  </p>
                  <p className="pl-8 text-slate-300">
                    context = <span className="text-purple-400">await</span> <span className="text-orange-300">self</span>.vector_db.<span className="text-sky-300">search</span>(<span className="text-emerald-400">"ehr_docs"</span>, query, limit=<span className="text-amber-400">5</span>)
                  </p>
                  <p className="pl-8 text-slate-300">
                    res = <span className="text-purple-400">await</span> <span className="text-orange-300">self</span>.mcp.<span className="text-sky-300">execute_tool</span>(<span className="text-emerald-400">"grounded_inference"</span>, context)
                  </p>
                  <p className="pl-8 text-slate-300">
                    <span className="text-purple-400">return</span> {"{"}<span className="text-emerald-400">"result"</span>: res, <span className="text-emerald-400">"status"</span>: <span className="text-emerald-400">"200_OK"</span>{"}"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Revamped Production Telemetry Metric Strip with Vanish & Reverse */}
      <motion.div
        style={{
          y: metricsY,
          opacity: metricsOpacity,
          scale: metricsScale,
        }}
        className="w-full pt-4"
      >
        {/* Telemetry Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Verified Production Telemetry
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-500 dark:text-slate-400">
            AUDITED DEPLOYMENTS · 99.9% RELIABILITY
          </span>
        </div>

        {/* 4 High-Tech Telemetry Cards with Staggered Landing Fly-In */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {telemetryMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                custom={0.85 + idx * 0.08}
                initial="hidden"
                animate="visible"
                variants={textFadeVariant}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="metric-card group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800/80 dark:bg-slate-900/60"
              >
                {/* Subtle gradient glow bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-cyan-600 dark:text-cyan-400">
                    {item.value}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Icon size={16} />
                  </span>
                </div>

                <p className="mt-2 text-xs font-bold leading-snug text-slate-900 dark:text-slate-100 sm:text-sm">
                  {item.label}
                </p>

                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {item.subtext}
                </p>

                {item.progress && (
                  <div className="mt-2.5">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                      />
                    </div>
                  </div>
                )}

                {item.metricDetail && !item.progress && (
                  <p className="mt-2 font-mono text-[10px] text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                    <span>⚡</span> {item.metricDetail}
                  </p>
                )}

                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="rounded-md border border-slate-200/60 bg-slate-50 px-2 py-0.5 font-mono text-[9px] font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-400">
                    {item.badge}
                  </span>
                  <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
