import React from 'react';
import { motion } from 'framer-motion';

const floatingBadges = [
  {
    id: 1,
    text: 'MCP://clinical-ehr.local',
    sub: 'port: 6333 · tcp',
    pos: 'top-[12%] right-[8%]',
    delay: 0,
    duration: 8,
  },
  {
    id: 2,
    text: '<AgentState graph={langgraph} />',
    sub: 'nodes: 8 · async',
    pos: 'top-[36%] right-[2%]',
    delay: 1.5,
    duration: 9.5,
  },
  {
    id: 3,
    text: 'git commit -m "feat: vllm on gpu"',
    sub: 'hash: 9f2a4c1 · main',
    pos: 'top-[58%] right-[14%]',
    delay: 2.2,
    duration: 7.5,
  },
  {
    id: 4,
    text: '{ status: 200, latency: "14ms" }',
    sub: 'http/2 · gzip',
    pos: 'top-[78%] right-[6%]',
    delay: 0.8,
    duration: 8.5,
  },
  {
    id: 5,
    text: 'POST /v1/chat/completions',
    sub: 'model: llama-3.3-70b',
    pos: 'top-[22%] left-[2%]',
    delay: 1.2,
    duration: 9,
  },
];

const DeveloperBackground = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Cybernetic Canvas Base (Rich, clean contrast in both themes) */}
      <div className="absolute inset-0 bg-slate-50/70 dark:bg-[#080b11]" />

      {/* 2. Cybernetic Blueprint Grid (Crisp Hairlines, Zero Blurring, Very Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_40%,transparent_100%)] opacity-40 dark:opacity-20" />

      {/* 3. Precision Neural Circuit Traces (Clean SVG, Low Opacity, Non-Intrusive) */}
      <svg
        className="absolute inset-0 h-full w-full stroke-cyan-500/10 dark:stroke-cyan-400/10 [mask-image:radial-gradient(ellipse_60%_50%_at_65%_35%,#000_30%,transparent_80%)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 100 200 L 300 200 L 450 350 L 800 350 L 950 200 L 1400 200"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <path
          d="M 250 100 L 250 400 L 450 600 L 1100 600 L 1300 400"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
        <path
          d="M 600 50 L 750 200 L 750 500 L 900 650 L 1250 650"
          strokeWidth="0.75"
        />
        <circle cx="450" cy="350" r="2.5" className="fill-cyan-400/30" />
        <circle cx="800" cy="350" r="2" className="fill-emerald-400/30" />
        <circle cx="750" cy="200" r="2" className="fill-sky-400/30" />
      </svg>

      {/* 4. Smooth Ambient Glowing Orbs (Soft, rich colored illumination) */}
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />
      <div className="page-grain absolute inset-0 opacity-40 dark:opacity-20" />

      {/* 5. Floating Telemetry Badges (Desktop Only) */}
      <div className="hidden xl:block absolute inset-0">
        {floatingBadges.map((badge) => (
          <motion.div
            key={badge.id}
            initial={{ y: 0, opacity: 0.25 }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: badge.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: badge.delay,
            }}
            className={`absolute ${badge.pos} rounded-xl border border-cyan-500/15 bg-slate-900/30 p-2 backdrop-blur-xs font-mono text-[11px] shadow-sm dark:border-cyan-400/15 dark:bg-slate-950/40`}
          >
            <div className="flex items-center gap-1.5 text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{badge.text}</span>
            </div>
            <div className="text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 pl-3">
              {badge.sub}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperBackground;
