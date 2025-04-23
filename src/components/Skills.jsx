import React from 'react'
import { motion } from 'framer-motion'
import {
  SiJavascript, SiReact, SiShopify, SiHtml5, SiCss3,
  SiNodedotjs, SiMysql, SiTailwindcss, SiGit, SiPostman, SiFigma
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Java', icon: FaJava, color: '#00758f' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
  { name: 'My SQL', icon: SiMysql, color: '#00758f' },
  { name: 'CSS3', icon: SiCss3, color: '#264de4' },
  { name: 'Git', icon: SiGit, color: '#f1502f' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
  { name: 'Shopify', icon: SiShopify, color: '#95bf47' },
  { name: 'HTML5', icon: SiHtml5, color: '#e44d26' },
  { name: 'Figma', icon: SiFigma, color: '#a259ff' },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full mt-6"
    >
      <h2 className="relative w-fit text-xl lg:text-2xl font-medium after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full">
        My Learnings & Skills
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 rounded-2xl shadow-lg backdrop-blur-md bg-stone-100/30 dark:bg-stone-100/10 hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <span className="p-3 sm:p-4 rounded-xl bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 shadow-inner">
                <Icon size={25} className="sm:size-7 md:size-8" color={skill.color} />
              </span>
              <span className="text-xs sm:text-sm mt-2 font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
