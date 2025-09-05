import { IoHomeOutline, IoBriefcaseOutline, IoCodeSlashOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { GraduationCap } from "lucide-react";
import ThemeToggle from './ThemeToggle';

const navItems = [
  { key: 'home', icon: IoHomeOutline, label: 'Home' },
  { key: 'experience', icon: IoBriefcaseOutline, label: 'Experience' },
  { key: 'projects', icon: IoCodeSlashOutline, label: 'Projects' },
  { key: 'education', icon: GraduationCap, label: 'Education' },
  { key: 'contact', icon: RiContactsBook3Line, label: 'Contact' },
];

const Header = ({ sectionRefs, activeSection }) => {
  const handleScroll = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="md:flex justify-between items-center md:px-8 md:py-2 w-full md:bg-white/90 dark:md:bg-gray-800/90 md:rounded-bl-2xl md:rounded-br-2xl md:shadow-2xl backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60">
      <div className="flex justify-around items-center w-full md:gap-2">
        {navItems.map(({ key, icon: Icon, label }) => {
          const isActive = activeSection === key;
          return (
            <button
              key={key}
              onClick={() => handleScroll(key)}
              className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 text-base font-semibold transition-all duration-300 rounded-xl md:rounded-lg relative group flex-1 md:flex-none
                ${isActive
                  ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 shadow-lg border border-blue-200 dark:border-blue-700/50'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 hover:shadow-md'
                }`}
            >
              <Icon 
                size={18} 
                className={`transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} 
              />
              <p className="text-xs md:text-sm font-medium">{label}</p>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>

      <div className="pr-2 absolute bottom-[75px] right-0 md:static md:pl-6">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
