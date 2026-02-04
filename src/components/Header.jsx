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
    <nav 
      className="md:flex justify-between items-center md:px-6 md:py-2 w-full glass-card rounded-[24px] border border-white/70 dark:border-slate-700/60"
    >
      <div className="flex justify-around items-center w-full md:gap-2">
        {navItems.map(({ key, icon: Icon, label }, index) => {
          const isActive = activeSection === key;
          return (
            <button
              key={key}
              onClick={() => handleScroll(key)}
              className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 text-base font-semibold transition-all duration-500 ease-out rounded-xl md:rounded-full relative group flex-1 md:flex-none
                ${isActive
                  ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-900/40 shadow-soft border border-emerald-200/60 dark:border-emerald-700/50'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60 hover:shadow-soft'
                }`}
            >
                <Icon 
                  size={18} 
                  className="transition-all duration-300 group-hover:scale-105" 
                />
              <p 
                className="text-[11px] md:text-xs font-semibold tracking-wide"
              >
                {label}
              </p>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-300 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      <div 
        className="pr-2 absolute bottom-[75px] right-0 md:static md:pl-4"
      >
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
