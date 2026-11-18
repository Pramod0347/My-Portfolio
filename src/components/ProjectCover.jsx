import React from 'react';

// Cover for projects without a public screenshot: an atmospheric photo with the
// project's pipeline drawn on top. `focus` shifts the crop so covers differ.
const ProjectCover = ({ title, flow, highlight, focus = '50% 50%' }) => (
  <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-slate-950 p-6 sm:p-10">
    <img
      src="/assets/developer-neural.jpg"
      alt=""
      aria-hidden="true"
      draggable={false}
      style={{ objectPosition: focus }}
      className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/70" />

    <p className="relative font-mono text-[10px] uppercase tracking-widest text-slate-300">{title} · architecture</p>
    <ol className="relative flex flex-col items-center">
      {flow.map((step, i) => (
        <li key={step} className="flex flex-col items-center">
          <span
            className={`rounded-md border px-3 py-1 font-mono text-[11px] backdrop-blur-sm sm:text-xs ${
              i === highlight
                ? 'border-accent-soft/60 bg-slate-950/70 text-accent-soft'
                : 'border-white/15 bg-slate-950/60 text-slate-200'
            }`}
          >
            {step}
          </span>
          {i < flow.length - 1 && <span className="h-3 w-px bg-white/25 sm:h-4" />}
        </li>
      ))}
    </ol>
  </div>
);

export default ProjectCover;
