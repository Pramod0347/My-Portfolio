import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Calendar, Github, Linkedin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const contactItems = [
    { icon: Mail, label: 'Gmail', value: 'pgoudar347@gmail.com', link: 'mailto:pgoudar347@gmail.com'},
    { icon: Phone, label: 'Phone', value: '+918296090286', link: 'tel:+918296090286' },
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
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Header with Avatar and Basic Info */}
            <div className={`lg:text-center flex lg:flex-col gap-2 items-center ${showContent ? 'border-b-2 border-stone-300 dark:border-gray-800 mb-4 pb-4' : ''}`}>
                <span className="bg-stone-300 dark:bg-gray-800 rounded-3xl flex justify-center items-center w-20 h-20 lg:w-32 lg:h-32 overflow-hidden">
                    <img
                        src="https://debeshpanda555.github.io/assets/images/my-avatar.png"
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                </span>
                <div className="flex flex-col gap-1 lg:gap-2">
                    <p className="text-xl lg:text-2xl text-gray-800 dark:text-white font-semibold">Pramod G</p>
                    <p className="text-sm lg:text-base bg-stone-300 dark:bg-gray-800 rounded py-1 px-2 lg:px-3 lg:py-2 w-fit">
                        Software Engineer
                    </p>
                </div>
                {/* Toggle Button (Visible only on mobile) */}
                <div onClick={toggleContent} className="cursor-pointer transition-transform duration-300 ease-in-out lg:hidden ml-auto">
                    <ChevronDown
                        className={`w-5 h-5 text-gray-700 dark:text-gray-300 transform transition-transform duration-300 ${showContent ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            {/* Animated Contact Info */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden flex flex-col gap-4"
                    >
                        {contactItems.map(({ icon: Icon, label, value, link }) => (
                            <div key={label} className="flex gap-3 w-fit items-center">
                                <span className="p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
                                </span>
                                <div className="flex flex-col">
                                    <p className="text-xs lg:text-sm uppercase font-bold opacity-70">{label}</p>
                                    {link ? (
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm lg:text-base break-all">{value}</a>
                                    ) : (
                                        <span className="text-sm lg:text-base break-all">{value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Sidebar;
