import React from 'react';
import { Briefcase } from 'lucide-react';
 

const experiences = [
    {
        title: "Kushals Retail Pvt. Ltd. | Software Engineer",
        duration: "Nov 2024 – Present, Bengaluru",
        bullets: [
            <>Building a <span className="keyword">B2B SaaS-based AI Display Optimization System</span> for <span className="keyword-badge">110+ jewellery stores</span> that analyzes store-level sales data to recommend product showcase replacements and reduce dead stock.</>,
            <>Architected a <span className="keyword-accent">distributed inventory synchronization system</span> using <span className="keyword">Node.js</span>, <span className="keyword">PostgreSQL</span>, and <span className="keyword-accent">AWS Event Pipelines</span>, enabling real-time stock updates across stores and online channels.</>,
            <>Designed <span className="keyword">scalable REST APIs</span> with <span className="keyword-accent">JWT authentication</span>, <span className="keyword">rate limiting</span>, and <span className="keyword">Redis session management</span>, improving login reliability and reducing cart drop-off.</>,
            <>Optimized <span className="keyword">PostgreSQL queries</span> with <span className="keyword-accent">strategic indexing</span>, reducing API response time from <span className="keyword-badge">~400 ms</span> to <span className="keyword-badge">under 150 ms</span> under load.</>,
            <>Migrated <span className="keyword">monolithic backend</span> to <span className="keyword-accent">microservices</span> on <span className="keyword">AWS EC2</span> with <span className="keyword">Docker</span> and <span className="keyword">Redis</span>, improving service isolation and reducing hosting costs.</>,
        ],
    },
    {
        title: "Marmeto | Software Development Engineer II",
        duration: "Jan 2023 – Nov 2024, Bengaluru",
        bullets: [
            <>Led <span className="keyword">backend development</span> for Levi&apos;s India by building a <span className="keyword-accent">Node.js + MongoDB</span> return/exchange workflow with <span className="keyword">idempotent APIs</span> and automated refund processing, reducing support tickets.</>,
            <>Designed a <span className="keyword">dynamic coupon engine</span> supporting <span className="keyword-accent">multi-tier campaign rules</span> across brands.</>,
            <>Integrated third-party APIs such as <span className="keyword">Razorpay</span> and <span className="keyword">Shiprocket</span> with <span className="keyword-accent">webhook handling</span> and <span className="keyword">retry logic</span>, improving payment reliability and shipment tracking.</>,
            <>Directed migration of Bewakoof.com from Salesforce Commerce Cloud to a <span className="keyword">component-driven React architecture</span>, improving performance and reducing bounce rates.</>,
            <>Applied <span className="keyword">database query optimization</span> and <span className="keyword-accent">connection pooling</span>, supporting <span className="keyword-badge">10K+ concurrent requests</span> with <span className="keyword-badge">99.9% uptime</span>.</>,
        ],
    },
];

const Experience = () => {
    return (
        <div className="animate-fade-up">
            <p className="section-kicker">Timeline</p>
            <h2 
                className="section-title"
            >
                Work Experience
            </h2>

            {experiences.map((exp, idx) => (
                <div 
                    key={idx} 
                    className="my-8 p-6 rounded-2xl glass-card hover:shadow-lift transition-all duration-500"
                >
                    <div 
                        className="flex items-start gap-3 mb-4"
                    >
                        <span 
                            className="bg-gradient-to-br from-sky-500 to-slate-900 w-9 h-9 rounded-2xl flex items-center justify-center text-white shadow-md mt-1"
                        >
                            <Briefcase size={16} />
                        </span>
                        <div>
                            <h3 
                                className="font-bold text-slate-900 dark:text-slate-100 text-base lg:text-lg leading-snug"
                            >
                                {exp.title}
                            </h3>
                            <p 
                                className="text-slate-600 dark:text-slate-400 text-sm lg:text-base font-medium"
                            >
                                {exp.duration}
                            </p>
                        </div>
                    </div>

                    <ul 
                        className="list-disc pl-6 text-sm lg:text-base space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                        {exp.bullets.map((point, i) => (
                            <li 
                                key={i} 
                                className="hover:text-slate-900 dark:hover:text-white transition-all duration-300"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
