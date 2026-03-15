import React from 'react';

const designCards = [
  {
    title: 'Real-time Inventory Sync',
    architecture: 'Node.js -> AWS Event Pipelines -> PostgreSQL + Redis',
    summary:
      'An event-driven sync layer to keep inventory accurate across stores, APIs, and downstream consumers without blocking transactional requests.',
    flow: [
      'Inventory event produced by application services',
      'AWS pipeline fans out updates to processing workers',
      'PostgreSQL stores source-of-truth stock state',
      'Redis serves hot reads and absorbs burst traffic',
    ],
  },
  {
    title: 'RAG Pipeline',
    architecture: 'News Source -> Chunking -> Jina Embeddings -> Qdrant -> Redis Cache -> API',
    summary:
      'A retrieval pipeline optimized for semantic search, low-latency follow-up questions, and cached responses for repeated queries.',
    flow: [
      'News sources are normalized and chunked',
      'Jina embeddings convert text into vector representations',
      'Qdrant stores vectors for semantic retrieval',
      'Redis caches session context and repeat lookups',
    ],
  },
  {
    title: 'Microservices Migration',
    architecture: 'Monolith -> Docker containers -> AWS EC2 -> Redis session layer',
    summary:
      'A migration path that separates concerns incrementally while keeping deployment and session consistency manageable.',
    flow: [
      'Core domains split into isolated service containers',
      'Docker standardizes local and production environments',
      'AWS EC2 hosts independently deployable services',
      'Redis externalizes session state across instances',
    ],
  },
];

const SystemDesign = () => {
  return (
    <div className="w-full animate-fade-up">
      <p className="section-kicker">Under the Hood</p>
      <h2 className="section-title">System Design Thinking</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:text-base">
        I like systems that are simple to reason about <span className="keyword">under load</span>. These are the architecture patterns I keep returning to when building <span className="keyword-accent">backend-heavy products</span>.
      </p>

      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {designCards.map((card) => (
          <article key={card.title} className="metric-card flex h-full flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
              {card.title}
            </p>
            <p className="mt-3 font-display text-lg font-semibold text-slate-900 dark:text-slate-50">
              <span className="keyword">{card.architecture}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {card.summary}
            </p>
            <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-950/40">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Flow
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {card.flow.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SystemDesign;
