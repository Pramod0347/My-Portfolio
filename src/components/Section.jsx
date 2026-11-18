import React from 'react';
import { motion } from 'framer-motion';

const isTest = process.env.NODE_ENV === 'test';

const Section = ({ id, index, eyebrow, heading, children }) => (
  <motion.section
    id={id}
    className="container-page scroll-mt-20 py-20"
    initial={isTest ? false : { opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
      {String(index).padStart(2, '0')} / {eyebrow}
    </p>
    <h2 className="mb-10 mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
    {children}
  </motion.section>
);

export default Section;
