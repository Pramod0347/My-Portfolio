import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub, SiLeetcode } from 'react-icons/si';

import Section from './Section';
import useLiveStats from '../hooks/useLiveStats';
import { profile } from '../data';

const ACCENT = '5, 150, 105'; // accent (#059669) as rgb, for opacity steps
const LEVEL_ALPHA = [0, 0.3, 0.5, 0.75, 1];
const LANG_SHADES = ['bg-slate-700 dark:bg-slate-200', 'bg-slate-500 dark:bg-slate-400', 'bg-slate-400 dark:bg-slate-600', 'bg-slate-300 dark:bg-slate-700'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Card = ({ icon: Icon, title, handle, href, children, className = '' }) => (
  <div className={`min-w-0 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] ${className}`}>
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <Icon size={18} />
        <h3 className="font-medium">{title}</h3>
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-slate-500 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-soft"
        >
          @{handle} <ArrowUpRight size={12} />
        </a>
      )}
    </div>
    {children}
  </div>
);

const Stat = ({ value, label }) => (
  <div>
    <p className="text-2xl font-semibold tracking-tight">{value}</p>
    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{label}</p>
  </div>
);

const GithubCard = ({ github, contributions }) => {
  const total = github.languages.reduce((sum, [, n]) => sum + n, 0) || 1;
  const top = github.languages.slice(0, 4);
  return (
    <Card icon={SiGithub} title="GitHub" handle={profile.githubUser} href={profile.github}>
      <div className="grid grid-cols-3 gap-4">
        <Stat value={github.repos} label="public repos" />
        <Stat value={contributions} label="contributions, last year" />
        <Stat value={github.since} label="coding on GitHub since" />
      </div>

      <p className="mb-2 mt-8 font-mono text-xs text-slate-500 dark:text-slate-400">Languages</p>
      <div className="flex h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/5">
        {top.map(([lang, n], i) => (
          <span key={lang} className={LANG_SHADES[i]} style={{ width: `${(n / total) * 100}%` }} />
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
        {top.map(([lang, n], i) => (
          <li key={lang} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${LANG_SHADES[i]}`} />
            {lang} <span className="text-slate-400 dark:text-slate-500">{Math.round((n / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

// Ring split by difficulty, drawn with stroke-dasharray on one circle per segment.
const SolvedRing = ({ easy, medium, hard, solved }) => {
  const r = 52;
  const c = 2 * Math.PI * r;
  const parts = [
    { n: easy, className: 'stroke-accent-soft' },
    { n: medium, className: 'stroke-accent' },
    { n: hard, className: 'stroke-slate-500' },
  ];
  let offset = 0;
  return (
    <div className="relative h-36 w-36 shrink-0">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" strokeWidth="8" className="stroke-slate-100 dark:stroke-white/5" />
        {parts.map(({ n, className }) => {
          const len = solved ? (n / solved) * c : 0;
          const el = (
            <circle
              key={className}
              cx="60"
              cy="60"
              r={r}
              fill="none"
              strokeWidth="8"
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={-offset}
              className={className}
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold tracking-tight">{solved}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">solved</span>
      </div>
    </div>
  );
};

const LeetcodeCard = ({ leetcode }) => {
  const rows = [
    { label: 'Easy', n: leetcode.easy, bar: 'bg-accent-soft' },
    { label: 'Medium', n: leetcode.medium, bar: 'bg-accent' },
    { label: 'Hard', n: leetcode.hard, bar: 'bg-slate-500' },
  ];
  return (
    <Card icon={SiLeetcode} title="LeetCode" handle={profile.leetcodeUser} href={profile.leetcode}>
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <SolvedRing {...leetcode} />
        <ul className="w-full space-y-4">
          {rows.map(({ label, n, bar }) => (
            <li key={label}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">{label}</span>
                <span className="font-mono text-slate-500 dark:text-slate-400">{n}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/5">
                <div className={`h-full rounded-full ${bar}`} style={{ width: `${leetcode.solved ? (n / leetcode.solved) * 100 : 0}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

// Groups the daily list into Sunday-first week columns, padding the first week.
const toWeeks = (days) => {
  const weeks = [];
  let week = new Array(new Date(days[0].date).getUTCDay()).fill(null);
  days.forEach((d) => {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) weeks.push(week);
  return weeks;
};

const Heatmap = ({ calendar }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // On narrow screens, show the most recent weeks first.
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
  }, [calendar]);

  if (!calendar) {
    return <div className="h-[118px] animate-pulse rounded-lg bg-slate-100 dark:bg-white/5" aria-label="Loading contributions" />;
  }

  const weeks = toWeeks(calendar.days);
  let lastMonth = -1;

  return (
    <div ref={scrollRef} className="overflow-x-auto pb-1">
      <div className="inline-flex gap-[3px]">
        {weeks.map((week, wi) => {
          const first = week.find(Boolean);
          const month = first ? new Date(first.date).getUTCMonth() : lastMonth;
          const label = month !== lastMonth && wi > 0 ? MONTHS[month] : '';
          lastMonth = month;
          return (
            <div key={first ? first.date : wi} className="flex flex-col gap-[3px]">
              <span className="h-4 font-mono text-[10px] leading-none text-slate-400">{label}</span>
              {week.map((day, di) =>
                day ? (
                  <span
                    key={day.date}
                    title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                    className={`h-[11px] w-[11px] rounded-[3px] lg:h-[13px] lg:w-[13px] ${day.level === 0 ? 'bg-slate-100 dark:bg-white/[0.06]' : ''}`}
                    style={day.level ? { backgroundColor: `rgba(${ACCENT}, ${LEVEL_ALPHA[day.level]})` } : undefined}
                  />
                ) : (
                  <span key={`pad-${di}`} className="h-[11px] w-[11px] lg:h-[13px] lg:w-[13px]" />
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Activity = () => {
  const { github, leetcode, calendar } = useLiveStats();
  const contributions = calendar ? calendar.total : github.contributions;

  return (
    <Section id="activity" index={3} eyebrow="Activity" heading="Code & practice.">
      <div className="grid gap-4 md:grid-cols-2">
        <GithubCard github={github} contributions={contributions} />
        <LeetcodeCard leetcode={leetcode} />

        <Card icon={SiGithub} title="Contributions in the last year" className="md:col-span-2">
          <Heatmap calendar={calendar} />
          <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-slate-400">
            Less
            {LEVEL_ALPHA.map((a, i) => (
              <span
                key={a}
                className={`h-[10px] w-[10px] rounded-[2px] ${i === 0 ? 'bg-slate-100 dark:bg-white/[0.06]' : ''}`}
                style={i ? { backgroundColor: `rgba(${ACCENT}, ${a})` } : undefined}
              />
            ))}
            More
          </div>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2 md:col-span-2 lg:grid-cols-4">
          {github.recent.map((repo) => (
            <a
              key={repo.name}
              href={`https://github.com/${profile.githubUser}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
            >
              <p className="flex items-center justify-between gap-2 text-sm font-medium">
                <span className="truncate">{repo.name}</span>
                <ArrowUpRight size={14} className="shrink-0 text-slate-400 transition-colors group-hover:text-accent" />
              </p>
              <p className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                {repo.language || 'Code'} · {repo.pushed}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Activity;
