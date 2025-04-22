import React from 'react'
import {
  SiJavascript, SiReact, SiShopify, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiTailwindcss, SiGit
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const AboutMe = () => {

  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'Shopify', icon: SiShopify, color: '#95bf47' },
    { name: 'HTML5', icon: SiHtml5, color: '#e44d26' },
    { name: 'CSS3', icon: SiCss3, color: '#264de4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#4db33d' },
    { name: 'My SQL', icon: SiMysql, color: '#00758f' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
    { name: 'Git', icon: SiGit, color: '#f1502f' },
    { name: 'Java', icon: FaJava, color: '#00758f' },
    // { name: 'Java', icon: SiJava, color: '#007396' },
  ];


  return (
    <div className='flex flex-col items-start justify-center w-full h-full p-4 space-y-4'>
      <div>
        <h2 className="relative w-fit text-base db:text-lg font-semibold after:content-[''] after:block after:w-1/2 after:border-b-4 after:mt-1 after:rounded-full">
          About Me
        </h2>
        <p className='db:text-sm text-xs mt-2 text-gray-800 dark:text-gray-300'>
          Results-driven Software Developer with 2 years of experience in building full-stack web apps using React, JavaScript, and Shopify. 
          I specialize in custom e-commerce solutions, scalable backend services, and clean UI/UX. 
          Currently upskilling in Java and backend technologies to transition into a Full-Stack Developer role.
        </p>
      </div>

      <div className="w-full mt-6">
        <h2 className="relative w-fit text-base db:text-lg font-semibold after:content-[''] after:block after:w-1/2 after:border-b-4 after:mt-1 after:rounded-full">My Learnings & Skills</h2>
        <div className="grid grid-cols-3 tb:grid-cols-4 db:grid-cols-6 gap-6 mt-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <span className='p-4 bg-white dark:bg-gray-600 shadow-sm rounded '>
                  <Icon size={35} color={skill.color} />
                </span>
                <span className="text-xs mt-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
