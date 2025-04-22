import React, { Suspense } from 'react'
import Header from './Header'
import { Routes, Route } from 'react-router-dom';
import SkeletonCard from './Skeleton';

const AboutMe = React.lazy(() => import('./AboutMe'));
const Experience = React.lazy(() => import('./Experience'));
const Projects = React.lazy(() => import('./Projects'));
const Contact = React.lazy(() => import('./Contact'));

const MainContents = () => {
  return (
    <div>
        <div className='fixed bottom-0 left-0 w-full db:static db:w-auto border-t-2 db:border-2 text-black dark:text-white border-gray-300 dark:border-gray-600 db:rounded-3xl p-1 db:p-4 flex justify-around db:justify-center bg-white dark:bg-black z-50 shadow-lg'>
            <Header />
        </div>
        {/* Lazy loading fallback */}
        <div className='db:mt-20'>
            <Suspense fallback={<p className="text-center"><SkeletonCard /></p>}>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </Suspense>
        </div>
    </div>
  )
}

export default MainContents
