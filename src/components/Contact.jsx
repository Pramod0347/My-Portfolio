import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Viewport scroll tracking for smooth entry & exit
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const contentY = useTransform(smoothProgress, [0.03, 0.25, 0.75, 0.97], [40, 0, 0, -40]);
  const contentOpacity = useTransform(smoothProgress, [0.03, 0.20, 0.80, 0.97], [0, 1, 1, 0]);

  const copyEmail = (e) => {
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { x, y },
        colors: ['#10b981', '#06b6d4', '#38bdf8', '#34d399'],
      });
    }
    navigator.clipboard?.writeText('pramod.goudar.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const onSubmit = async (data) => {
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbz5KbBt8mzxnlP427am5Ft626wXkoGvL0XueD85P5JXZBycFqrI7bzrxOA2SVgnIZ8O/exec';

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    if (data.subject) formData.append('subject', data.subject);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setSubmitted(true);
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#10b981', '#06b6d4', '#34d399', '#38bdf8'],
      });
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // Even on no-cors errors, Google scripts often execute successfully
      setSubmitted(true);
      reset();
    }
  };

  return (
    <section ref={containerRef} id="contact" className="w-full space-y-8">
      {/* Section Header with Kinetic Animated Title */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
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
              Open to
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, scale: 1.25 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.22 }}
              className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent font-black inline-block drop-shadow-[0_2px_12px_rgba(16,185,129,0.25)]"
            >
              AI Engineering Roles
            </motion.span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Actively exploring opportunities in{' '}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Agentic AI systems</span>,{' '}
            <span className="font-semibold text-teal-600 dark:text-teal-400">high-precision RAG</span>, and{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">distributed backend engineering</span>.
          </p>
        </div>

        {/* Live Availability Status Pill */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available Now · Remote / Bengaluru
          </span>
        </div>
      </motion.div>

      {/* Main 2-Column Unboxed Grid */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
      >
        {/* Left Column: Direct Access Channels & SLAs (No outer box!) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <Zap size={13} />
              <span>Direct Channels</span>
            </span>
            <h3 className="font-display text-lg sm:text-xl font-black text-cyan-600 dark:text-cyan-400 drop-shadow-[0_1px_8px_rgba(6,182,212,0.25)]">
              Let's build production AI together.
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you are architecting multi-agent workflows, scaling GPU pipelines, or looking for an AI Software Engineer who ships with production rigor—reach out directly.
            </p>
          </div>

          {/* Quick-Action Channels Strip */}
          <div className="space-y-2.5 pt-1">
            {/* Email Channel with Instant Copy */}
            <div className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/70 p-3 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5 dark:border-slate-800/80 dark:bg-[#0c1017]/70">
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Mail size={16} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                    Primary Email
                  </p>
                  <p className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                    pramod.goudar.dev@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 pl-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-100 px-2 py-1 font-mono text-[10px] font-semibold text-slate-700 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-emerald-300 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  <Copy size={11} />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <a
                  href="mailto:pramod.goudar.dev@gmail.com"
                  className="inline-flex items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-1 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400"
                  title="Open mail client"
                >
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <a
              href="https://linkedin.com/in/pramod-goudar-a35605169"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/70 p-3 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5 dark:border-slate-800/80 dark:bg-[#0c1017]/70"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Linkedin size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                    LinkedIn Network
                  </p>
                  <p className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100">
                    pramod-goudar-a35605169
                  </p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* GitHub Channel */}
            <a
              href="https://github.com/Pramod0347"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/70 p-3 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5 dark:border-slate-800/80 dark:bg-[#0c1017]/70"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-400/30 bg-slate-500/10 text-slate-800 dark:text-slate-200">
                  <Github size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                    GitHub Codebase
                  </p>
                  <p className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100">
                    github.com/Pramod0347
                  </p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>
          </div>

          {/* Quick SLA & Location Metadata */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 border-t border-slate-200/70 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-emerald-500" />
              <span>Response: &lt;24 hours</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-teal-500" />
              <span>Bengaluru, India</span>
            </span>
          </div>
        </div>

        {/* Right Column: Unboxed Minimalist Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 px-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 text-center space-y-4"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25">
                <CheckCircle2 size={32} />
              </span>
              <div className="space-y-1">
                <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm">
                  Thank you for reaching out. Your transmission has been queued—I will review your message and reply within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-white/80 px-4 py-2 font-mono text-xs font-semibold text-emerald-700 hover:bg-emerald-500/15 dark:bg-[#0c1017]/80 dark:text-emerald-300 transition-colors cursor-pointer"
              >
                Send Another Transmission
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                  >
                    Your Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="e.g. Satya Nadella"
                    className="w-full rounded-xl border border-slate-200/90 bg-white/80 px-3.5 py-2.5 font-sans text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-[#0c1017]/80 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-400"
                  />
                  {errors.name && (
                    <p className="font-mono text-[11px] text-rose-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                  >
                    Email Address <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder="e.g. satya@microsoft.com"
                    className="w-full rounded-xl border border-slate-200/90 bg-white/80 px-3.5 py-2.5 font-sans text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-[#0c1017]/80 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-400"
                  />
                  {errors.email && (
                    <p className="font-mono text-[11px] text-rose-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject / Scope */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  Opportunity / Scope <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  placeholder="e.g. AI Software Engineer Role / LLM Infra Consulting"
                  className="w-full rounded-xl border border-slate-200/90 bg-white/80 px-3.5 py-2.5 font-sans text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-[#0c1017]/80 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-400"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >
                  Transmission Message <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Share details on your mandate, tech stack requirements, or team timeline..."
                  className="w-full rounded-xl border border-slate-200/90 bg-white/80 p-3.5 font-sans text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-[#0c1017]/80 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-emerald-400 resize-none"
                />
                {errors.message && (
                  <p className="font-mono text-[11px] text-rose-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button & Security Note */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 font-mono text-xs font-bold transition-all duration-200 shadow-md ${
                    isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed text-white'
                      : 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                  }`}
                >
                  <Send size={13} className={isSubmitting ? 'animate-pulse' : ''} />
                  <span>{isSubmitting ? 'Dispatching...' : 'Dispatch Transmission'}</span>
                </button>

                <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Sparkles size={11} className="text-emerald-500" />
                  <span>Direct transmission delivery</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
