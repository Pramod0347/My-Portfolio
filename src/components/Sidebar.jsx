import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Calendar, Github, Linkedin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const contactItems = [
    { icon: Mail, label: 'Gmail', value: 'pramodgoudar.fullstack@gmail.com', link: 'mailto:pramodgoudar.fullstack@gmail.com'},
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Header with Avatar and Basic Info */}
            <motion.div 
                className={`lg:text-center flex lg:flex-col gap-2 items-center ${showContent ? 'border-b-2 border-gray-200 dark:border-gray-700 mb-4 pb-4' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.span 
                    className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-3xl flex justify-center items-center w-20 h-20 lg:w-32 lg:h-32 overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.img
                        src="https://debeshpanda555.github.io/assets/images/my-avatar.png"
                        alt="Profile"
                        className="object-cover w-full h-full"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    />
                </motion.span>
                <motion.div 
                    className="flex flex-col gap-1 lg:gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.p 
                        className="text-xl lg:text-2xl text-gray-800 dark:text-white font-semibold drop-shadow-sm"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        Pramod G
                    </motion.p>
                    <motion.p 
                        className="text-sm lg:text-base bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 rounded-full py-1 px-3 lg:px-4 lg:py-2 w-fit font-medium shadow-sm border border-blue-200 dark:border-blue-700"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                        transition={{ duration: 0.3 }}
                    >
                        Software Engineer
                    </motion.p>
                </motion.div>
                {/* Toggle Button (Visible only on mobile) */}
                <motion.div 
                    onClick={toggleContent} 
                    className="cursor-pointer transition-transform duration-300 ease-in-out lg:hidden ml-auto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div
                        animate={{ rotate: showContent ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Animated Contact Info */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden flex flex-col gap-4"
                    >
                        {contactItems.map(({ icon: Icon, label, value, link }, index) => (
                            <motion.div 
                                key={label} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex gap-3 w-fit items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                            >
                                <motion.span 
                                    className="p-2 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm border border-gray-300 dark:border-gray-600"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                </motion.span>
                                <div className="flex flex-col">
                                    <motion.p 
                                        className="text-xs lg:text-sm uppercase font-bold text-gray-600 dark:text-gray-400"
                                        whileHover={{ color: "rgb(59, 130, 246)" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {label}
                                    </motion.p>
                                    {link ? (
                                        <motion.a 
                                            href={link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-sm lg:text-base break-all text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {value}
                                        </motion.a>
                                    ) : (
                                        <span className="text-sm lg:text-base break-all text-gray-800 dark:text-gray-200">{value}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Sidebar;
