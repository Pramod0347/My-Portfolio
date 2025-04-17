import React from 'react'
import { Mail, Phone, MapPin, Calendar, Github, Linkedin } from 'lucide-react';



const Sidebar = () => {
    return (
        <div>
            <div className='db:text-center mb-4 flex db:flex-col gap-2 items-center border-b-2 pb-4 border-stone-300 dark:border-gray-800'>
                <span className='bg-stone-300 dark:bg-gray-800 rounded-3xl flex justify-center items-center w-20 h-20 db:w-32 db:h-32'>
                    <img src="https://debeshpanda555.github.io/assets/images/my-avatar.png" alt="Profile" />
                </span>
                <div>
                    <p className='db:text-2xl text-lg font-black'>Pramod G</p>
                    <p className='db:text-sm text-xs bg-stone-300 dark:bg-gray-800 rounded px-3 py-2 w-fit'>Software Engineer</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3 w-fit items-center'>
                    <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                        <Mail className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                    </span>
                    <div className='flex flex-col'>
                        <p className='db:text-sm text-xs uppercase font-bold opacity-50'>Gmail</p>
                        <p className='db:text-sm text-xs'>pgoudar347@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-3 w-fit items-center'>
                    <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                        <Phone className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                    </span>
                    <div className='flex flex-col'>
                        <p className='db:text-sm text-xs uppercase font-bold opacity-50'>Phone</p>
                        <p className='db:text-sm text-xs'>+918296090286</p>
                    </div>
                </div>
                <div className='flex gap-3 w-fit items-center'>
                    <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                        <MapPin className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                    </span>
                    <div className='flex flex-col'>
                        <p className='db:text-sm text-xs uppercase font-bold opacity-50'>Location</p>
                        <p className='db:text-sm text-xs'>Bangalore, India</p>
                    </div>
                </div>
                <div className='flex gap-3 w-fit items-center'>
                    <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                        <Calendar className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                    </span>
                    <div className='flex flex-col'>
                        <p className='db:text-sm text-xs uppercase font-bold opacity-50'>Birthday</p>
                        <p className='db:text-sm text-xs'>July 17, 2000</p>
                    </div>
                </div>
                <div className='flex gap-3 w-fit items-center'>
                    <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                        <Github className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                    </span>
                    <div className='flex flex-col'>
                        <p className='db:text-sm text-xs uppercase font-bold opacity-50'>Github</p>
                        <p className='db:text-sm text-xs'>github.com/pramod347</p>
                    </div>
                </div>
                <div className='flex gap-3 w-fit items-center'>
                    <span className='p-2 bg-stone-300 dark:bg-gray-800 rounded w-8 h-8'>
                        <Linkedin className="w-4 h-4 text-gray-800 dark:text-gray-200" />   
                    </span>
                    <div className='flex flex-col'>
                        <p className='db:text-sm text-xs uppercase font-bold opacity-50'>LinkedIn</p>
                        <p className='db:text-sm text-xs'>linkedin.com/in/pramod-347</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
