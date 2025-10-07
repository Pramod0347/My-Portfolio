import React from 'react'
 
import {
  SiJavascript, SiReact, SiShopify, SiHtml5, SiCss3,
  SiNodedotjs, SiMysql, SiTailwindcss, SiGit, SiPostman,
  SiRedux, SiWebpack, SiExpress, SiGraphql, SiMongodb, SiPostgresql,
  SiJest, SiDocker, SiGithub, SiAmazonwebservices
} from 'react-icons/si';

const skills = [
  // Frontend
  { name: 'React', icon: SiReact, color: '#61dafb', category: 'Frontend' },
  { name: 'Redux', icon: SiRedux, color: '#764abc', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8', category: 'Frontend' },
  { name: 'HTML5', icon: SiHtml5, color: '#e44d26', category: 'Frontend' },
  { name: 'CSS3', icon: SiCss3, color: '#264de4', category: 'Frontend' },
  { name: 'Webpack', icon: SiWebpack, color: '#8dd6f9', category: 'Frontend' },
  
  // Backend & APIs
  { name: 'Node.js', icon: SiNodedotjs, color: '#68a063', category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Backend' },
  { name: 'REST APIs', icon: SiPostman, color: '#ff6c37', category: 'Backend' },
  { name: 'GraphQL', icon: SiGraphql, color: '#e10098', category: 'Backend' },
  
  // Databases
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248', category: 'Database' },
  { name: 'MySQL', icon: SiMysql, color: '#00758f', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Database' },
  
  // Testing
  { name: 'Jest', icon: SiJest, color: '#c21325', category: 'Testing' },
  { name: 'React Testing Library', icon: SiReact, color: '#61dafb', category: 'Testing' },
  
  // E-commerce
  { name: 'Shopify 2.0', icon: SiShopify, color: '#95bf47', category: 'E-commerce' },
  
  // Cloud & Tools
  { name: 'AWS', icon: SiAmazonwebservices, color: '#ff9900', category: 'Cloud' },
  { name: 'Git', icon: SiGit, color: '#f1502f', category: 'Tools' },
  { name: 'GitHub', icon: SiGithub, color: '#181717', category: 'Tools' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed', category: 'Cloud' },
  { name: 'CI/CD', icon: SiGit, color: '#f1502f', category: 'Tools' },
];

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryColors = {
    'Frontend': 'from-blue-500 to-cyan-500',
    'Backend': 'from-green-500 to-emerald-500',
    'Database': 'from-purple-500 to-violet-500',
    'Testing': 'from-red-500 to-pink-500',
    'E-commerce': 'from-yellow-500 to-orange-500',
    'Cloud': 'from-indigo-500 to-blue-500',
    'Tools': 'from-gray-500 to-slate-500'
  };

  return (
    <div
      className="w-full mt-6"
    >
      <h2 
        className="relative w-fit text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full drop-shadow-sm"
      >
        My Learnings & Skills
      </h2>

      <div className="space-y-8 mt-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <div 
            key={category} 
            className="space-y-4"
          >
            <h3 
              className={`text-lg font-semibold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent drop-shadow-sm`}
            >
              {category}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categorySkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-3 rounded-2xl shadow-lg backdrop-blur-md bg-stone-100/30 dark:bg-gray-800/50 hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-200/20 dark:border-gray-700/50 hover:border-gray-300/30 dark:hover:border-gray-600/50"
                  >
                    <span 
                      className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-inner border border-gray-200/30 dark:border-gray-600/30"
                    >
                      <div>
                        <Icon 
                          size={25} 
                          className="sm:size-7 md:size-8 drop-shadow-sm" 
                          color={skill.color}
                          style={{
                            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                            ...(skill.name === 'Express.js' && { color: '#ffffff' })
                          }}
                        />
                      </div>
                    </span>
                    <span 
                      className="text-xs sm:text-sm mt-2 font-medium text-gray-700 dark:text-gray-200"
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
