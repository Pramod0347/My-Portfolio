import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import { Mail, Phone, MapPin, Calendar, Github, Linkedin } from 'lucide-react';



const Sidebar = () => {
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
        setShowContent((prev) => !prev);
    };

    return (
        <div className='w-full'>
            <div className={`lg:text-center flex lg:flex-col gap-2 items-center ${showContent ? 'border-b-2 border-stone-300 dark:border-gray-800 mb-4 pb-4' : ''}`}>
                <span className='bg-stone-300 dark:bg-gray-800 rounded-3xl flex justify-center items-center w-20 h-20 lg:w-32 lg:h-32'>
                    <img src="https://debeshpanda555.github.io/assets/images/my-avatar.png" alt="Profile" />
                </span>
                <div className='flex flex-col gap-1 lg:gap-2'>
                    <p className='lg:text-2xl text-lg font-gray-700'>Pramod G</p>
                    <p className='text-sm lg:text-base bg-stone-300 dark:bg-gray-800 rounded py-1 px-2 lg:px-3 lg:py-2 w-fit'>Software Engineer</p>
                </div>
                <div>
                <div onClick={toggleContent} className='cursor-pointer transition-transform duration-300 ease-in-out lg:hidden'>
                    <ChevronDown 
                        className={`w-5 h-5 text-gray-700 dark:text-gray-300 transform ${showContent ? 'rotate-180' : ''}`}
                    />
                </div>
                </div>
            </div>
            {showContent && (
                <div className='contents-container flex flex-col gap-4'>
                    <div className='flex gap-3 w-fit items-center'>
                        <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                            <Mail className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                        </span>
                        <div className='flex flex-col'>
                            <p className='text-sm lg:text-base uppercase font-bold opacity-50'>Gmail</p>
                            <p className='text-sm lg:text-base'>pgoudar347@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-3 w-fit items-center'>
                        <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                            <Phone className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                        </span>
                        <div className='flex flex-col'>
                            <p className='text-sm lg:text-base uppercase font-bold opacity-50'>Phone</p>
                            <p className='text-sm lg:text-base'>+918296090286</p>
                        </div>
                    </div>
                    <div className='flex gap-3 w-fit items-center'>
                        <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                            <MapPin className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                        </span>
                        <div className='flex flex-col'>
                            <p className='text-sm lg:text-base uppercase font-bold opacity-50'>Location</p>
                            <p className='text-sm lg:text-base'>Bangalore, India</p>
                        </div>
                    </div>
                    <div className='flex gap-3 w-fit items-center'>
                        <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                            <Calendar className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                        </span>
                        <div className='flex flex-col'>
                            <p className='text-sm lg:text-base uppercase font-bold opacity-50'>Birthday</p>
                            <p className='text-sm lg:text-base'>July 17, 2000</p>
                        </div>
                    </div>
                    <div className='flex gap-3 w-fit items-center'>
                        <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                            <Github className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                        </span>
                        <div className='flex flex-col'>
                            <p className='text-sm lg:text-base uppercase font-bold opacity-50'>Github</p>
                            <p className='text-sm lg:text-base'>github.com/pramod347</p>
                        </div>
                    </div>
                    <div className='flex gap-3 w-fit items-center'>
                        <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                            <Linkedin className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                        </span>
                        <div className='flex flex-col'>
                            <p className='text-sm lg:text-base uppercase font-bold opacity-50'>LinkedIn</p>
                            <p className='text-sm lg:text-base'>linkedin.com/in/pramod-347</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar
