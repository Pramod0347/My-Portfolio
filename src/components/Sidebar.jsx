import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Calendar, Github, Linkedin } from 'lucide-react';
 

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
        <div
            className="w-full"
        >
            {/* Header with Avatar and Basic Info */}
            <div 
                className={`lg:text-center flex lg:flex-col gap-2 items-center ${showContent ? 'border-b-2 border-gray-200 dark:border-gray-700 mb-4 pb-4' : ''}`}
            >
                <span 
                    className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-3xl flex justify-center items-center w-20 h-20 lg:w-32 lg:h-32 overflow-hidden shadow-lg border border-gray-300 dark:border-gray-600"
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
                        className="text-xl lg:text-2xl text-gray-800 dark:text-white font-semibold drop-shadow-sm"
                    >
                        Pramod G
                    </p>
                    <p 
                        className="text-sm lg:text-base bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 rounded-full py-1 px-3 lg:px-4 lg:py-2 w-fit font-medium shadow-sm border border-blue-200 dark:border-blue-700"
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
                        <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                </div>
            </div>

            {/* Animated Contact Info */}
            {showContent && (
                    <div
                        className="overflow-hidden flex flex-col gap-4"
                    >
                        {contactItems.map(({ icon: Icon, label, value, link }, index) => (
                            <div 
                                key={label} 
                                className="flex gap-3 w-fit items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                            >
                                <span 
                                    className="p-2 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm border border-gray-300 dark:border-gray-600"
                                >
                                    <Icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                </span>
                                <div className="flex flex-col">
                                    <p 
                                        className="text-xs lg:text-sm uppercase font-bold text-gray-600 dark:text-gray-400"
                                    >
                                        {label}
                                    </p>
                                    {link ? (
                                        <a 
                                            href={link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-sm lg:text-base break-all text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <span className="text-sm lg:text-base break-all text-gray-800 dark:text-gray-200">{value}</span>
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
