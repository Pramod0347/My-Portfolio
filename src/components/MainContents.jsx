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
        <div className='db:absolute db:top-0 db:right-0 border-b-2 border-l-2 text-black dark:text-white border-gray-300 dark:border-gray-600 db:rounded-bl-3xl db:justify-center p-4'>
            <Header />
        </div>
        {/* Lazy loading fallback */}
        <div className='mt-20'>
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
