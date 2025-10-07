import React from 'react';
import { Briefcase } from 'lucide-react';
 

const experiences = [
    {
        title: "Software Developer, Kushals Fashion Jewellery",
        duration: "Nov 2024 – Present, Bengaluru",
        bullets: [
            "Designed and deployed an inventory sync structure using Node.js, MongoDB, and AWS-hosted pipelines, ensuring real-time stock updates across online and offline channels, cutting fulfillment delays by 25%.",
            "Implemented OTP-based login & authentication workflows with Express.js + JWT, enhancing account security and reducing cart abandonment rates.",
            "Built personalized product recommendations & gifting features using MongoDB aggregation + session-based filters, improving AOV and customer retention.",
            "Migrated backend services to AWS EC2 & S3, improving scalability and cutting hosting costs by ~15%.",
            "Optimized site performance with lazy loading, image compression, and rendering optimizations, cutting load time by 30% and improving Core Web Vitals.",
        ],
    },
    {
        title: "SDE-II, Marmeto Enabling E-Commerce",
        duration: "Jan 2023 – Nov 2024, Bengaluru",
        bullets: [
            "Engineered a backend return-flow system using Node.js + MongoDB, enabling seamless refunds/exchanges and reducing support tickets by ~20% for Levi's.",
            "Built custom coupon & discount logic with Express.js + MongoDB, supporting campaign rules & personalized offers, driving a 10% lift in repeat purchases for Nobero and Levi's.",
            "Integrated third-party APIs for payments and delivery tracking streamlining operations and improving CSAT by ~15%.",
            "Led Bewakoof's migration platform from Salesforce to a scalable component-driven architecture, enhancing responsiveness and reducing bounce rates.",
            "Partnered with cross-functional teams to deliver end-to-end e-commerce solutions for major retail brands, ensuring reliable backend infrastructure and performant UI.",
        ],
    },
];

const Experience = () => {
    return (
        <div
            className=""
        >
            <h2 
                className="relative w-fit text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full drop-shadow-sm"
            >
                Work Experience
            </h2>

            {experiences.map((exp, idx) => (
                <div 
                    key={idx} 
                    className="my-8 p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                    <div 
                        className="flex items-start gap-3 mb-4"
                    >
                        <span 
                            className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md mt-1"
                        >
                            <Briefcase size={16} />
                        </span>
                        <div>
                            <h3 
                                className="font-bold text-gray-900 dark:text-gray-100 text-base lg:text-lg leading-snug"
                            >
                                {exp.title}
                            </h3>
                            <p 
                                className="text-gray-600 dark:text-gray-400 text-sm lg:text-base font-medium"
                            >
                                {exp.duration}
                            </p>
                        </div>
                    </div>

                    <ul 
                        className="list-disc pl-6 text-sm lg:text-base space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                        {exp.bullets.map((point, i) => (
                            <li 
                                key={i} 
                                className="hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 cursor-pointer"
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