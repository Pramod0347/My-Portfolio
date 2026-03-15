import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Calendar, Github, Linkedin, ArrowUpRight, Sparkles, Binary, ServerCog, DatabaseZap } from 'lucide-react';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'pramodgoudardev2@gmail.com', link: 'mailto:pramodgoudardev2@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8951790286', link: 'tel:+918951790286' },
  { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
  { icon: Calendar, label: 'Birthday', value: 'July 17, 2000' },
  { icon: Github, label: 'Github', value: 'github.com/pramod347', link: 'http://github.com/Pramod0347' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pramod-347', link: 'http://linkedin.com/in/pramod-goudar-a35605169' },
];

const profileSignals = [
  { icon: ServerCog, label: 'Distributed APIs' },
  { icon: DatabaseZap, label: 'Data-intensive systems' },
  { icon: Binary, label: 'Backend-first mindset' },
];

const quickFacts = [
  { label: 'Experience', value: '3+ years' },
  { label: 'Focus', value: 'Node + AWS' },
  { label: 'Location', value: 'Bangalore' },
  { label: 'Birthday', value: '17 Jul 2000' },
];

const Sidebar = () => {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="flex h-full w-full flex-col animate-fade-up">
      <div className="sidebar-shell rounded-[28px] p-4 text-slate-900 dark:text-white">
        <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
          <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-sm lg:h-32 lg:w-32 dark:border-slate-700 dark:bg-slate-800">
            <img
              src="https://debeshpanda555.github.io/assets/images/my-avatar.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </span>

          <div className="flex flex-1 flex-col gap-2 lg:items-center">
            <p className="font-display text-xl font-semibold tracking-tight text-slate-950 lg:text-3xl dark:text-white">
              Pramod G
            </p>
            <p className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-700 lg:px-4 lg:text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Backend Engineer
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Building <span className="font-semibold text-slate-950 dark:text-white">distributed backends</span>, <span className="font-semibold text-sky-700 dark:text-sky-300">scalable APIs</span>, and <span className="font-semibold text-slate-950 dark:text-white">cloud-native services</span> with a product mindset.
            </p>

            <div className="mt-3 flex flex-wrap gap-2 lg:justify-center">
              {profileSignals.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
                >
                  <Icon className="h-3.5 w-3.5 text-sky-700 dark:text-sky-300" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 lg:justify-center">
              <a
                href="http://github.com/Pramod0347"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-700 dark:hover:text-sky-300"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="http://linkedin.com/in/pramod-goudar-a35605169"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-700 dark:hover:text-sky-300"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowContent((prev) => !prev)}
            className="ml-auto transition-transform duration-300 ease-in-out lg:hidden"
            aria-label="Toggle contact details"
          >
            <div className={showContent ? 'rotate-180 transition-transform duration-300 ease-in-out' : 'transition-transform duration-300 ease-in-out'}>
              <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-300" />
            </div>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {quickFacts.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800/80">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className={`mt-1 text-sm font-semibold ${item.label === 'Focus' ? 'text-sky-700 dark:text-sky-300' : 'text-slate-950 dark:text-white'}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showContent && (
        <div className="flex flex-col gap-3 pt-4 md:mt-auto">
          {contactItems.map(({ icon: Icon, label, value, link }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 dark:border-slate-700 dark:bg-slate-900/70"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <Icon className="h-4 w-4 text-slate-700 dark:text-slate-200" />
              </span>
              <div className="flex flex-col">
                <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {label}
                </p>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 break-all text-sm text-slate-900 transition-colors duration-200 hover:text-sky-700 dark:text-slate-200 dark:hover:text-sky-300 lg:text-base"
                  >
                    {value}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="break-all text-sm text-slate-900 dark:text-slate-200 lg:text-base">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
