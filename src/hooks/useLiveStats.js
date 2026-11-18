import { useEffect, useState } from 'react';

import { profile, statsSnapshot } from '../data';

const CACHE_KEY = 'portfolio_live_stats_v2';

// Repos kept off the portfolio (client theme work, not mine to showcase).
const HIDDEN_REPO = /^shopify/i;
const TIMEOUT_MS = 12000;

const getJson = async (url) => {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
};

const loadGithub = async () => {
  const user = profile.githubUser;
  const [info, repos] = await Promise.all([
    getJson(`https://api.github.com/users/${user}`),
    getJson(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`),
  ]);
  const own = repos.filter((r) => !r.fork && !HIDDEN_REPO.test(r.name));
  const counts = {};
  own.forEach((r) => {
    if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
  });
  return {
    repos: info.public_repos,
    since: new Date(info.created_at).getFullYear(),
    languages: Object.entries(counts).sort((a, b) => b[1] - a[1]),
    recent: own
      .filter((r) => r.name !== 'My-Portfolio')
      .slice(0, 4)
      .map((r) => ({ name: r.name, language: r.language, pushed: r.pushed_at.slice(0, 10) })),
  };
};

const loadCalendar = async () => {
  const data = await getJson(`https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`);
  return { total: data.total.lastYear, days: data.contributions };
};

const loadLeetcode = async () => {
  const d = await getJson(`https://alfa-leetcode-api.onrender.com/${profile.leetcodeUser}/solved`);
  return { solved: d.solvedProblem, easy: d.easySolved, medium: d.mediumSolved, hard: d.hardSolved };
};

const readCache = () => {
  try {
    return JSON.parse(sessionStorage.getItem(CACHE_KEY)) || {};
  } catch {
    return {};
  }
};

// Starts from the bundled snapshot so the section never renders empty, then
// swaps in live numbers as each source answers. Failed sources keep the snapshot.
export default function useLiveStats() {
  const [stats, setStats] = useState(() => ({
    github: statsSnapshot.github,
    leetcode: statsSnapshot.leetcode,
    calendar: null,
    ...readCache(),
  }));

  useEffect(() => {
    if (process.env.NODE_ENV === 'test' || typeof fetch !== 'function') return undefined;
    let alive = true;
    const cached = readCache();

    const apply = (key, promise) =>
      promise
        .then((value) => {
          if (!alive) return;
          setStats((prev) => {
            const next = { ...prev, [key]: value };
            try {
              sessionStorage.setItem(CACHE_KEY, JSON.stringify(next));
            } catch {
              /* storage full or disabled: live data still shows */
            }
            return next;
          });
        })
        .catch(() => {});

    // Each source is fetched once per browser session.
    if (!cached.github) apply('github', loadGithub());
    if (!cached.calendar) apply('calendar', loadCalendar());
    if (!cached.leetcode) apply('leetcode', loadLeetcode());

    return () => {
      alive = false;
    };
  }, []);

  return stats;
}
