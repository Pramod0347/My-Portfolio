import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Cpu, FileText, Github, Linkedin, MapPin } from 'lucide-react';

import { profile, stats, typedPhrases } from '../data';

const isTest = process.env.NODE_ENV === 'test';

// Types each phrase out, pauses, deletes it, then moves to the next.
const useTyped = (phrases, enabled) => {
  const [state, setState] = useState({ i: 0, len: enabled ? 0 : phrases[0].length, deleting: false });

  useEffect(() => {
    if (!enabled) return undefined;
    const word = phrases[state.i];
    let delay = state.deleting ? 45 : 85;
    let next;
    if (!state.deleting && state.len === word.length) {
      delay = 1600;
      next = { ...state, deleting: true };
    } else if (state.deleting && state.len === 0) {
      delay = 300;
      next = { i: (state.i + 1) % phrases.length, len: 0, deleting: false };
    } else {
      next = { ...state, len: state.len + (state.deleting ? -1 : 1) };
    }
    const t = setTimeout(() => setState(next), delay);
    return () => clearTimeout(t);
  }, [state, phrases, enabled]);

  return phrases[state.i].slice(0, state.len);
};

const ProfileCard = () => {
  const [photoFailed, setPhotoFailed] = useState(false);
  const rows = [
    { icon: MapPin, text: profile.location },
    { icon: Cpu, text: 'Python · FastAPI · AI systems' },
    { icon: Briefcase, text: '4 yrs experience' },
  ];

  return (
    <div className="w-full max-w-xs rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/40">
      <div className="aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
        {photoFailed ? (
          <div className="bg-dots flex h-full w-full items-center justify-center text-6xl font-semibold tracking-tight text-slate-400 dark:text-slate-600">
            PG
          </div>
        ) : (
          <img
            src="/assets/profile.jpg"
            alt={profile.name}
            onError={() => setPhotoFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>
      <p className="mt-5 font-semibold">{profile.name}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{profile.role}</p>
      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
        {rows.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2.5">
            <Icon size={14} className="text-slate-400" /> {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Hero = ({ onNavigate }) => {
  const reduceMotion = useReducedMotion();
  const typed = useTyped(typedPhrases, !isTest && !reduceMotion);

  return (
    <div id="home" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src="/assets/developer-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-[0.12] grayscale dark:opacity-60 dark:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-page-light/30 via-page-light/60 to-page-light dark:from-page-dark/20 dark:via-page-dark/50 dark:to-page-dark" />
      </div>
      <motion.section
        className="container-page relative grid items-center gap-12 pb-24 pt-16 sm:pt-24 md:grid-cols-[1fr_auto]"
        initial={isTest ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div>
          <p className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to new roles
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Hi, I'm {profile.name.split(' ')[0]}.<span className="sr-only"> {profile.name}</span>
          </h1>
          <p
            className="mt-3 text-2xl tracking-tight text-slate-500 dark:text-slate-400 sm:text-3xl"
            aria-label={`I build ${typedPhrases.join(', ')}.`}
          >
            I build <span className="text-slate-900 dark:text-slate-100">{typed}</span>
            <span
              className="ml-0.5 inline-block w-[2px] animate-pulse bg-slate-400 align-middle"
              style={{ height: '0.9em' }}
            />
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.role} in Bengaluru, building Python backends and AI systems. At Meril Life Sciences I build MCP
            servers and a Gemini discharge-summary tool used across 20+ hospitals. Before that I worked on retail and
            e-commerce at Kushals and Marmeto.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold tracking-tight">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contact');
              }}
              className="btn-primary"
            >
              Get in touch <ArrowUpRight size={15} />
            </a>
            <a
              href="/resume"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/resume');
              }}
              className="btn-ghost"
            >
              <FileText size={15} /> Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-3"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-3"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ProfileCard />
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
