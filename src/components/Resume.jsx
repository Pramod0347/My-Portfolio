import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';

import Section from './Section';
import { profile } from '../data';

// pdf.js is large, so the viewer is split out and only fetched once the section is near the screen.
const ResumeViewer = lazy(() => import('./ResumeViewer'));

const fileName = profile.resume.split('/').pop();

const Placeholder = () => (
  <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-white/10 dark:bg-white/[0.03]">
    <p className="text-sm text-slate-500 dark:text-slate-400">Loading resume preview…</p>
    <div className="flex gap-3">
      <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        <ExternalLink size={15} /> Open PDF
      </a>
      <a href={profile.resume} download={fileName} className="btn-primary">
        <Download size={15} /> Download
      </a>
    </div>
  </div>
);

const Resume = () => {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <Section id="resume" index={6} eyebrow="Resume" heading="A closer look.">
      <div ref={ref}>
        {near ? (
          <Suspense fallback={<Placeholder />}>
            <ResumeViewer src={profile.resume} fileName={fileName} />
          </Suspense>
        ) : (
          <Placeholder />
        )}
      </div>
    </Section>
  );
};

export default Resume;
