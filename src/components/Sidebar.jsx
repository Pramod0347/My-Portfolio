import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Calendar, Github, Linkedin } from 'lucide-react';
 

const contactItems = [
    { icon: Mail, label: 'Email', value: 'pramodgoudardev2@gmail.com', link: 'mailto:pramodgoudardev2@gmail.com'},
    { icon: Phone, label: 'Phone', value: '+91 8951790286', link: 'tel:+918951790286' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
    { icon: Calendar, label: 'Birthday', value: 'July 17, 2000' },
    { icon: Github, label: 'Github', value: 'github.com/pramod347', link: 'http://github.com/Pramod0347' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pramod-347', link: 'http://linkedin.com/in/pramod-goudar-a35605169' },
];

const Sidebar = () => {
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
        setShowContent(prev => !prev);
    };

    return (
        <div
            className="w-full animate-fade-up"
        >
            {/* Header with Avatar and Basic Info */}
            <div 
                className={`lg:text-center flex lg:flex-col gap-3 items-center ${showContent ? 'border-b border-slate-200/70 dark:border-slate-700/60 mb-4 pb-4' : ''}`}
            >
                <span 
                    className="bg-gradient-to-br from-amber-100 via-amber-200 to-emerald-100 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-[28px] flex justify-center items-center w-20 h-20 lg:w-32 lg:h-32 overflow-hidden shadow-soft border border-white/60 dark:border-slate-700/60"
                >
                    <img
                        src="https://debeshpanda555.github.io/assets/images/my-avatar.png"
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                </span>
                <div 
                    className="flex flex-col gap-1 lg:gap-2"
                >
                    <p 
                        className="text-xl lg:text-3xl text-slate-900 dark:text-white font-display font-semibold tracking-tight"
                    >
                        Pramod G
                    </p>
                    <p 
                        className="text-xs lg:text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full py-1.5 px-3 lg:px-4 w-fit font-semibold tracking-wide"
                    >
                        Software Engineer
                    </p>
                </div>
                {/* Toggle Button (Visible only on mobile) */}
                <div 
                    onClick={toggleContent} 
                    className="cursor-pointer transition-transform duration-300 ease-in-out lg:hidden ml-auto"
                >
                    <div
                        className={showContent ? 'rotate-180 transition-transform duration-300 ease-in-out' : 'transition-transform duration-300 ease-in-out'}
                    >
                        <ChevronDown className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    </div>
                </div>
            </div>

            {/* Contact Info - simple, clean list */}
            {showContent && (
                <div className="overflow-hidden flex flex-col gap-3 pt-2">
                    {contactItems.map(({ icon: Icon, label, value, link }) => (
                        <div 
                            key={label} 
                            className="flex gap-3 items-center p-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 shadow-sm hover:shadow-soft transition-all duration-300 cursor-pointer"
                        >
                            <span 
                                className="p-2 bg-amber-100/80 dark:bg-slate-800 rounded-xl w-9 h-9 flex items-center justify-center shadow-sm border border-amber-200/60 dark:border-slate-700"
                            >
                                <Icon className="w-4 h-4 text-amber-700 dark:text-amber-200" />
                            </span>
                            <div className="flex flex-col">
                                <p 
                                    className="text-[11px] uppercase font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400"
                                >
                                    {label}
                                </p>
                                {link ? (
                                    <a 
                                        href={link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-sm lg:text-base break-all text-slate-900 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200"
                                    >
                                        {value}
                                    </a>
                                ) : (
                                    <span className="text-sm lg:text-base break-all text-slate-900 dark:text-slate-200">{value}</span>
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
