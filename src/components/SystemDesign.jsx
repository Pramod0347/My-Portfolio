import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Activity,
  Cpu,
  Database,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

const renderHighlightedText = (
  text,
  highlights = [],
  colorClass = 'font-semibold text-amber-600 dark:text-amber-300'
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

const architectures = [
  {
    id: 'ehr-copilot',
    number: '01',
    title: 'Agentic Clinical Copilot & MCP Isolation',
    category: 'Multi-Agent Orchestration · HIPAA Security Boundary',
    icon: Network,
    status: 'Live across 20+ Hospitals',
    summary:
      'Model Context Protocol (MCP) servers isolate hospital EHR databases from external LLM weights, executing multi-step diagnostic workflows with cyclic error recovery and human clinician verification.',
    telemetry: [
      { label: 'Clinical Scale', value: '20+ Hospitals', subtext: '1,000+ daily patients' },
      { label: 'Security Boundary', value: 'Zero PII Leaks', subtext: 'HIPAA process sandboxes' },
      { label: 'Citation Quality', value: '100% Grounded', subtext: 'AST source-link check' },
      { label: 'Physician SLA', value: '~1.5 hrs/day', subtext: 'Saved per attending doctor' },
    ],
    pipeline: [
      'Clinician Prompt',
      'LangGraph Cyclic Engine',
      'Custom MCP Server',
      'EHR & Knowledge Graph',
      'Verified Clinical Summary',
    ],
    flow: [
      { step: '01', title: 'Intent Routing', desc: 'LangGraph classifies input into vitals, drug interactions, or discharge synthesis.', highlights: ['LangGraph', 'vitals, drug interactions, or discharge synthesis'] },
      { step: '02', title: 'MCP Sandboxing', desc: 'Air-gapped server queries EHR database without exposing patient identities to LLM.', highlights: ['Air-gapped server', 'EHR database', 'zero patient identities to LLM'] },
      { step: '03', title: 'Groundedness Loop', desc: 'Self-correcting gate re-queries if citation faithfulness score is under 95%.', highlights: ['Self-correcting gate', 'faithfulness score is under 95%'] },
      { step: '04', title: 'Clinician Signoff', desc: 'Structured summary delivered with AST citations; requires manual physician signoff.', highlights: ['AST citations', 'manual physician signoff'] },
    ],
    guardrails: [
      'Zero-trust sub-process isolation between LLM API and clinical database.',
      'Cyclic fallback loops catch hallucinations before clinician output delivery.',
      'Immutable cryptographic audit trail logs every tool invocation with millisecond timestamps.',
    ],
    technologies: ['LangGraph', 'Custom MCP', 'FastAPI', 'Python 3.12', 'Qdrant', 'Docker'],
  },
  {
    id: 'document-intel',
    number: '02',
    title: 'Asynchronous GPU Document Intelligence',
    category: 'On-Premise GPU Serving · Decoupled Queue Worker',
    icon: Cpu,
    status: '10× Acceleration in Prod',
    summary:
      'Asynchronous processing engine removing compute-heavy extraction and vectorization from user request paths, serving open-weights LLMs on local NVIDIA hardware via vLLM PagedAttention.',
    telemetry: [
      { label: 'Pipeline Speedup', value: '10× Acceleration', subtext: 'Over PyTorch baseline' },
      { label: 'Serving Engine', value: 'vLLM PagedAttention', subtext: 'Dynamic GPU memory 0.92' },
      { label: 'Worker SLA', value: '<80ms P99', subtext: 'Decoupled async worker' },
      { label: 'Hardware Isolation', value: 'On-Premise GPU', subtext: 'Zero external cloud transit' },
    ],
    pipeline: [
      'Hospital Records (PDF)',
      'FastAPI Gateway',
      'RabbitMQ Task Queue',
      'Celery Worker Cluster',
      'vLLM on GPU (Llama 3.1 70B)',
    ],
    flow: [
      { step: '01', title: 'Non-Blocking Ingest', desc: 'Incoming clinical PDFs assigned UUID and pushed to RabbitMQ exchange in <12ms.', highlights: ['RabbitMQ exchange', '<12ms'] },
      { step: '02', title: 'Queue & Dead-Lettering', desc: 'Celery pulls batches with DLX queues and exponential backoff retry schedules.', highlights: ['DLX queues', 'exponential backoff retry schedules'] },
      { step: '03', title: 'Local GPU Inference', desc: 'On-premise NVIDIA nodes run vLLM with PagedAttention and tensor parallelism (TP=2).', highlights: ['vLLM', 'PagedAttention', 'tensor parallelism (TP=2)'] },
      { step: '04', title: 'Real-Time Dispatch', desc: 'Vectorized summaries stream to clinician clients via WebSockets, accelerating turnaround 10×.', highlights: ['WebSockets', 'accelerating turnaround 10×'] },
    ],
    guardrails: [
      'Strict air-gapped deployment guarantees no medical narratives leave on-premise hardware.',
      'Dead-letter queues isolate corrupted files without halting pipeline throughput.',
      'Dynamic batching prevents GPU memory fragmentation and Out-Of-Memory (OOM) panics.',
    ],
    technologies: ['vLLM', 'NVIDIA CUDA', 'RabbitMQ', 'Python 3.12', 'Docker', 'Celery'],
  },
  {
    id: 'rag-eval',
    number: '03',
    title: 'Hybrid Vector RAG & Semantic Cache Topology',
    category: 'Dense + Sparse Indexing · TruLens Triad Guardrails',
    icon: Database,
    status: '87% Retrieval Precision',
    summary:
      'Treats retrieval quality and inference costs as rigorous engineering benchmarks: combines Qdrant HNSW indexing, 8K chunking, Upstash Redis semantic caching, and TruLens automated evaluation.',
    telemetry: [
      { label: 'Retrieval Precision', value: '87% Precision', subtext: 'Raised from 71% (+16%)' },
      { label: 'Token Efficiency', value: '−85% Tokens', subtext: 'Semantic caching & prompt tuning' },
      { label: 'Cache Latency', value: '<14ms Hit', subtext: 'Sliding TTL in Redis' },
      { label: 'Context Length', value: '8,192 Tokens', subtext: 'Jina v2 full-document chunking' },
    ],
    pipeline: [
      'User Query',
      'Redis Semantic Cache',
      'Jina v2 Embedding (8K)',
      'Qdrant HNSW Vector DB',
      'TruLens Grounding Check',
    ],
    flow: [
      { step: '01', title: 'Semantic Cache Check', desc: 'Query embedded & compared to Redis vector cache (0.94 threshold); hits return in <14ms.', highlights: ['Redis vector cache', '<14ms'] },
      { step: '02', title: 'Hybrid Qdrant Search', desc: 'Dense HNSW cosine search combined with BM25 keyword matching and payload tenant isolation.', highlights: ['Dense HNSW cosine search', 'BM25 keyword matching'] },
      { step: '03', title: 'Cross-Encoder Re-Rank', desc: 'Top 25 candidate chunks pruned to 5 most relevant passages, cutting ~85% downstream tokens.', highlights: ['pruned to 5 most relevant passages', 'cutting ~85% downstream tokens'] },
      { step: '04', title: 'Triad Quality Gate', desc: 'Scored for Context Relevance, Groundedness, and Faithfulness; raises precision to 87%.', highlights: ['Context Relevance, Groundedness, and Faithfulness', 'precision to 87%'] },
    ],
    guardrails: [
      'Multi-tenant payload filters prevent cross-hospital vector contamination.',
      'Automated Triad assertion fails any generation with groundedness < 0.95.',
      'Sliding TTL window evicts stale news and outdated clinical guidelines automatically.',
    ],
    technologies: ['Qdrant', 'Redis Upstash', 'Jina v2', 'TruLens', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 'event-sync',
    number: '04',
    title: 'Distributed Event Synchronization Mesh',
    category: 'High-Throughput Microservices · Multi-Store Event Stream',
    icon: Server,
    status: '125+ Stores & 10K+ Req/s',
    summary:
      'Real-time distributed inventory reconciliation mesh synchronizing point-of-sale registers across 125+ physical retail stores with central cloud ledgers, resilient to broadband outages and peak bursts.',
    telemetry: [
      { label: 'Store Footprint', value: '125+ Stores', subtext: 'Real-time retail network' },
      { label: 'Sustained Throughput', value: '10K+ Req/s', subtext: 'Peak holiday traffic' },
      { label: 'Query Latency', value: '<150ms P99', subtext: 'Optimized from ~400ms' },
      { label: 'Production Uptime', value: '99.98% SLA', subtext: 'Zero revenue downtime' },
    ],
    pipeline: [
      '125+ Store POS Registers',
      'FastAPI Gateway',
      'RabbitMQ / Kafka Stream',
      'PostgreSQL ACID Ledger',
      'Redis Session Cache',
    ],
    flow: [
      { step: '01', title: 'Offline-Capable Ingestion', desc: 'In-store registers buffer transactions to SQLite during network outages, syncing idempotently.', highlights: ['SQLite', 'syncing idempotently'] },
      { step: '02', title: 'Distributed Idempotency', desc: 'Gateway enforces Redis-backed idempotency keys to prevent duplicate payments or stock deductions.', highlights: ['Redis-backed idempotency keys'] },
      { step: '03', title: 'Partitioned Event Streams', desc: 'Events partitioned by store ID to guarantee FIFO order while scaling parallel consumer workers.', highlights: ['FIFO order', 'parallel consumer workers'] },
      { step: '04', title: 'ACID Ledger Reconciliation', desc: 'Queries optimized from 400ms to <150ms with PgBouncer pooling, sustaining 10,000+ req/s.', highlights: ['PgBouncer pooling', 'sustaining 10,000+ req/s'] },
    ],
    guardrails: [
      'Cryptographic idempotency keys eliminate duplicate transaction mutations.',
      'Circuit breakers isolate failing third-party payment APIs without freezing checkout.',
      'PgBouncer connection pooling shields PostgreSQL from sudden shift-change connection surges.',
    ],
    technologies: ['PostgreSQL', 'Redis', 'RabbitMQ', 'Apache Kafka', 'FastAPI', 'Docker'],
  },
];

// Compact Full-Width Unboxed Architecture Blueprint Row (NO outer container boxes!)
const ArchitectureRow = ({ arch, isLast }) => {
  const rowRef = useRef(null);

  // Track each architecture item's viewport scroll progress for silky bi-directional fade-in / fade-out
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

  const Icon = arch.icon;

  return (
    <motion.article
      ref={rowRef}
      style={{ y: rowY, opacity: rowOpacity }}
      className={`w-full space-y-4 ${
        isLast ? 'pb-2' : 'border-b border-slate-200/80 pb-8 dark:border-slate-800/80'
      }`}
    >
      {/* Row 1: Header (Number + Title + Status Badge + Category) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-slate-950 font-mono text-sm font-extrabold text-amber-400 shadow-2xs dark:bg-amber-950/40">
            {arch.number}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-base sm:text-lg font-black tracking-tight text-cyan-600 dark:text-cyan-400 drop-shadow-[0_1px_8px_rgba(6,182,212,0.25)]">
                {arch.title}
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {arch.status}
              </span>
            </div>
            <p className="font-mono text-xs text-amber-700/90 dark:text-amber-400/80 font-medium">
              {arch.category}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
            <Icon size={13} />
            <span>ARCH-BP-{arch.number}</span>
          </span>
        </div>
      </div>

      {/* Row 2: Topology Overview (Compact Clean Text) */}
      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <span className="font-bold text-amber-600 dark:text-amber-400 mr-1.5">⚡ Topology Overview:</span>
        {arch.summary}
      </p>

      {/* Row 3: Lightweight Full-Width Telemetry Strip (NO nested boxes!) */}
      <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-2 py-2 border-y border-slate-200/60 dark:border-slate-800/60 font-mono">
        {arch.telemetry.map((metric) => (
          <div key={metric.label} className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400">
              {metric.value}
            </span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {metric.label}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden md:inline">
              ({metric.subtext})
            </span>
          </div>
        ))}
      </div>

      {/* Row 4: Component Pipeline Flow (Clean inline text flow with arrow separators) */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        <span className="font-mono text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 mr-1 flex items-center gap-1">
          <Workflow size={12} /> Pipeline:
        </span>
        {arch.pipeline.map((step, idx) => (
          <span
            key={step}
            className="font-mono text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1"
          >
            <span className="font-medium">{step}</span>
            {idx < arch.pipeline.length - 1 && (
              <span className="text-amber-500 font-bold mx-0.5">➔</span>
            )}
          </span>
        ))}
      </div>

      {/* Row 5: Execution Mechanics & Guardrails (Clean 2-Column Grid without heavy borders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-1">
        {/* Left: Execution Flow Steps */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-300">
            <Activity size={13} className="text-amber-500" />
            <span>Execution Flow</span>
          </div>
          <div className="space-y-1.5">
            {arch.flow.map((item) => (
              <div key={item.step} className="flex items-start gap-2 text-xs">
                <span className="font-mono font-bold text-amber-500 mt-0.5">{item.step}.</span>
                <div>
                  <span className="font-bold text-amber-800 dark:text-amber-200 mr-1">{item.title}:</span>
                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {renderHighlightedText(
                      item.desc,
                      item.highlights,
                      'font-semibold text-amber-600 dark:text-amber-300'
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Production Guardrails */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400">
            <ShieldCheck size={14} />
            <span>Reliability Guardrails</span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
            {arch.guardrails.map((gr, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="leading-relaxed">{gr}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Row 6: Stack Chips */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className="font-mono text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 mr-1">
          Stack:
        </span>
        {arch.technologies.map((tech) => (
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

const SystemDesign = () => {
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
      {/* Section Header with Scroll Fade & Kinetic Fly-in */}
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
              AI systems in
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 1.25 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.22 }}
              className="bg-gradient-to-r from-amber-500 via-orange-400 to-rose-400 dark:from-amber-300 dark:via-orange-300 dark:to-rose-300 bg-clip-text text-transparent font-black inline-block drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]"
            >
              production
            </motion.span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            I architect distributed AI workflows with the same production rigor as mission-critical systems: <span className="font-semibold text-amber-600 dark:text-amber-400">isolated tool boundaries</span>, <span className="font-semibold text-emerald-600 dark:text-emerald-400">measurable SLA telemetry</span>, <span className="font-semibold text-cyan-600 dark:text-cyan-400">cyclic error recovery</span>, and <span className="font-semibold text-rose-600 dark:text-rose-400">predictable GPU inference</span>.
          </p>
        </div>

        {/* Quick Executive Status Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-semibold text-amber-700 dark:text-amber-300">
            Cyclic StateGraphs
          </span>
          <span className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            vLLM On-Premise
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-1 font-mono text-xs font-semibold text-rose-700 dark:text-rose-300">
            <Sparkles className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
            Zero-Trust Isolation
          </span>
        </div>
      </motion.div>

      {/* Architecture Full-Width Open Stack (NO outer container boxes!) */}
      <div className="space-y-8">
        {architectures.map((arch, index) => (
          <ArchitectureRow
            key={arch.id}
            arch={arch}
            isLast={index === architectures.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default SystemDesign;