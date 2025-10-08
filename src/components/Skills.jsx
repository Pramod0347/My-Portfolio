import React from 'react'
 
import {
  SiJavascript, SiReact, SiShopify, SiHtml5, SiCss3,
  SiNodedotjs, SiMysql, SiTailwindcss, SiGit, SiPostman,
  SiRedux, SiWebpack, SiExpress, SiGraphql, SiMongodb, SiPostgresql,
  SiJest, SiDocker, SiGithub, SiAmazonwebservices
} from 'react-icons/si';

const skills = [
  // Frontend
  { name: 'React', icon: SiReact, color: '#61dafb', category: 'Frontend', level: 'Advanced', years: 3, usedAt: ['Portfolio', 'TaskFlow'] },
  { name: 'Redux', icon: SiRedux, color: '#764abc', category: 'Frontend', level: 'Advanced', years: 3, usedAt: ['TaskFlow', 'YouTube Clone'] },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', category: 'Frontend', level: 'Advanced', years: 4, usedAt: ['Kushals', 'TaskFlow', 'Spotify UI'] },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8', category: 'Frontend', level: 'Advanced', years: 3, usedAt: ['Portfolio', 'TaskFlow'] },
  { name: 'HTML5', icon: SiHtml5, color: '#e44d26', category: 'Frontend', level: 'Advanced', years: 5, usedAt: ['Spotify UI', "Levi's", 'Nobero'] },
  { name: 'CSS3', icon: SiCss3, color: '#264de4', category: 'Frontend', level: 'Advanced', years: 5, usedAt: ['Spotify UI', 'Portfolio'] },
  { name: 'Webpack', icon: SiWebpack, color: '#8dd6f9', category: 'Frontend', level: 'Intermediate', years: 2, usedAt: ['Kushals'] },

  // Backend & APIs
  { name: 'Node.js', icon: SiNodedotjs, color: '#68a063', category: 'Backend', level: 'Advanced', years: 3, usedAt: ['Kushals', 'TaskFlow'] },
  { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Backend', level: 'Advanced', years: 3, usedAt: ['Kushals', 'TaskFlow'] },
  { name: 'REST APIs', icon: SiPostman, color: '#ff6c37', category: 'Backend', level: 'Advanced', years: 4, usedAt: ['Kushals', 'TaskFlow', 'Swiggy Clone'] },
  { name: 'GraphQL', icon: SiGraphql, color: '#e10098', category: 'Backend', level: 'Beginner', years: 1, usedAt: ['Personal'] },

  // Databases
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248', category: 'Database', level: 'Advanced', years: 3, usedAt: ['Kushals', 'TaskFlow'] },
  { name: 'MySQL', icon: SiMysql, color: '#00758f', category: 'Database', level: 'Intermediate', years: 2, usedAt: ['Kushals'] },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Database', level: 'Beginner', years: 1, usedAt: ['Personal'] },

  // Testing
  { name: 'Jest', icon: SiJest, color: '#c21325', category: 'Testing', level: 'Intermediate', years: 1, usedAt: ['Personal'] },
  { name: 'React Testing Library', icon: SiReact, color: '#61dafb', category: 'Testing', level: 'Intermediate', years: 1, usedAt: ['Personal'] },

  // E-commerce
  { name: 'Shopify 2.0', icon: SiShopify, color: '#95bf47', category: 'E-commerce', level: 'Advanced', years: 2, usedAt: ["Levi's", 'Nobero'] },

  // Cloud & Tools
  { name: 'AWS', icon: SiAmazonwebservices, color: '#ff9900', category: 'Cloud', level: 'Intermediate', years: 2, usedAt: ['Kushals'] },
  { name: 'Git', icon: SiGit, color: '#f1502f', category: 'Tools', level: 'Advanced', years: 5, usedAt: ['All Projects'] },
  { name: 'GitHub', icon: SiGithub, color: '#181717', category: 'Tools', level: 'Advanced', years: 5, usedAt: ['All Projects'] },
  { name: 'Docker', icon: SiDocker, color: '#2496ed', category: 'Cloud', level: 'Intermediate', years: 1, usedAt: ['TaskFlow'] },
  { name: 'CI/CD', icon: SiGit, color: '#f1502f', category: 'Tools', level: 'Intermediate', years: 2, usedAt: ['Portfolio', 'TaskFlow'] },
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

  // v2 UI does not use filters/search; present grouped sections with good mobile UX

  const formatYears = (yrs) => {
    if (typeof yrs !== 'number') return '—'
    const y = Math.max(yrs, 2)
    if (y >= 3) return '3+\u00A0yrs'
    return `${y}\u00A0yrs`
  }

  return (
    <div className="w-full mt-6">
      <h2 className="relative w-fit text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100 after:content-[''] after:block after:w-2/3 after:border-b-2 after:border-yellow-500 after:rounded-full">
        My Learnings & Skills
      </h2>
      <div className="mt-6 space-y-8">
        {Object.entries(skillsByCategory).map(([category, items]) => (
          <section key={category}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-base font-semibold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>{category}</h3>
            </div>

            {/* Mobile: horizontal scroll pills */}
            <div className="md:hidden -mx-1 overflow-x-auto pb-1">
              <div className="px-1 inline-flex gap-3 snap-x snap-mandatory">
                {items.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="snap-start shrink-0 w-[240px] p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl p-3 border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                          <Icon size={20} color={skill.color} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{skill.name}</p>
                          <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-300">
                            <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">{skill.level}</span>
                            <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 whitespace-nowrap">{formatYears(skill.years)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {skill.usedAt.slice(0, 3).map((proj) => (
                          <span key={`${skill.name}-${proj}`} className="px-2 py-0.5 text-[11px] rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200">{proj}</span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Desktop: grid cards */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {items.map((skill) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name} className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl p-3 border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                        <Icon size={20} color={skill.color} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{skill.name}</p>
                        <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-300">
                          <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">{skill.level}</span>
                          <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 whitespace-nowrap">{formatYears(skill.years)}</span>
                          <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${categoryColors[skill.category]} text-white border border-white/10`}>{skill.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {skill.usedAt.slice(0, 4).map((proj) => (
                        <span key={`${skill.name}-${proj}`} className="px-2 py-0.5 text-[11px] rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200">{proj}</span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
};

export default Skills;
