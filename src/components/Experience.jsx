import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        title: "Software Developer, Kushals Fashion Jewellery",
        duration: "Nov 2024 – Present, Bengaluru",
        bullets: [
            "Improved website performance by optimizing image rendering, reducing load time by ~30%.",
            "Implemented ‘Book My Appointment’ feature, increasing offline conversions by ~20%.",
            "Developed Bundling logic for combo deals, boosting AOV by ~15%.",
            "Built Close Matched Products for upselling, with ~10% user engagement lift.",
            "Enhanced Store Inventory Management, reducing stock issues by ~25%.",
        ],
    },
    {
        title: "SDE-II, Marmeto Enabling E-Commerce",
        duration: "Jan 2023 – Nov 2024, Bengaluru",
        bullets: [
            "Led Shopify custom build for Levi’s; improved load time by 49%, conversions by 15%.",
            "Built product filters; boosted discovery and engagement.",
            "Enhanced Levi’s SEO; drove 25% organic traffic and 30% sales growth.",
            "Migrated Bewakoof’s platform; reduced bounce rate by 18%.",
            "Optimized Nobero site; raised engagement by 12%, AOV by 10%.",
            "Integrated 3rd-party apps; improved CSAT by 15%.",
            "Brands: Levi’s, Bewakoof, Nobero, Urbano, Moksh, Jewelagance.",
        ],
    },
];

const Experience = () => {
    return (
        <div className="db:pl-6 db:mt-10">
            {experiences.map((exp, idx) => (
                <div key={idx} className="mb-10">
                    <div className='flex items-center gap-2 mb-2 flex-wrap'>
                        <span className="bg-yellow-500 w-5 h-5 rounded-full flex items-center justify-center text-white shadow-md">
                            <Briefcase size={14} />
                        </span>
                        <h3 className="font-bold text-gray-900 dark:text-white db:text-base text-sm">{exp.title}, </h3>
                        <p className="text-gray-600 dark:text-gray-400 db:text-sm text-xs">{exp.duration}</p>
                    </div>
                    <ul className="list-disc pl-5 db:text-sm text-xs space-y-1 text-gray-800 dark:text-gray-300 ">
                        {exp.bullets.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
