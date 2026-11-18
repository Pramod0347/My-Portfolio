import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check, Copy } from 'lucide-react';

import Section from './Section';
import { profile } from '../data';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz5KbBt8mzxnlP427am5Ft626wXkoGvL0XueD85P5JXZBycFqrI7bzrxOA2SVgnIZ8O/exec';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const copyEmail = () => {
    navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data) => {
    const body = new FormData();
    Object.entries(data).forEach(([k, v]) => body.append(k, v));
    try {
      // no-cors: the Apps Script accepts the post but the response is opaque
      await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body });
    } catch (error) {
      console.error('Contact form failed:', error);
    }
    setSent(true);
    reset();
  };

  return (
    <Section id="contact" index={7} eyebrow="Contact" heading="Let's build something together.">
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03] md:grid-cols-2">
        {/* `dark` forces light-on-dark styling over the photo in both themes */}
        <div className="dark relative isolate p-8 text-slate-100 sm:p-10">
          <img
            src="/assets/developer-workspace.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-slate-950/40" />
          <h3 className="text-2xl font-semibold tracking-tight">Get in touch</h3>
          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
            I'm looking for AI engineering roles, remote or in Bengaluru. I reply within a day.
          </p>

          <div className="mt-6 flex items-center gap-2">
            <a href={`mailto:${profile.email}`} className="link font-medium">
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email"
              className="rounded-md p-1.5 text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{profile.phone}</p>

          <div className="mt-6 flex gap-4 text-sm">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
              GitHub
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link">
              Resume
            </a>
          </div>
        </div>

        {sent ? (
          <div className="flex flex-col items-start justify-center p-8 sm:p-10">
            <p className="font-medium">Thanks, message sent.</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">I'll get back to you soon.</p>
            <button type="button" onClick={() => setSent(false)} className="link mt-4 text-sm">
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-8 sm:p-10" noValidate>
            <div>
              <input
                className="input"
                placeholder="Name"
                aria-label="Name"
                {...register('name', { required: 'Please add your name' })}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <input
                className="input"
                type="email"
                placeholder="Email"
                aria-label="Email"
                {...register('email', {
                  required: 'Please add your email',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'That email looks off' },
                })}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                className="input resize-none"
                rows={4}
                placeholder="Message"
                aria-label="Message"
                {...register('message', { required: 'Please write a message' })}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};

export default Contact;
