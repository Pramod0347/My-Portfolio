import { IoHomeOutline, IoBriefcaseOutline, IoCodeSlashOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import ThemeToggle from './ThemeToggle';

const navItems = [
  { key: 'home', icon: IoHomeOutline, label: 'Home' },
  { key: 'experience', icon: IoBriefcaseOutline, label: 'Experience' },
  { key: 'projects', icon: IoCodeSlashOutline, label: 'Projects' },
  { key: 'contact', icon: RiContactsBook3Line, label: 'Contact' },
];

const Header = ({ sectionRefs, activeSection }) => {
  const handleScroll = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="md:flex justify-between items-center md:px-4 w-full md:w-fit bg-white dark:bg-gray-900 shadow-md md:rounded-t-3xl z-10">
      <div className="flex justify-between items-center w-full md:w-auto">
        {navItems.map(({ key, icon: Icon, label }) => {
          const isActive = activeSection === key;
          return (
            <button
              key={key}
              onClick={() => handleScroll(key)}
              className={`flex items-center gap-2 px-1 py-2 md:px-6 md:py-4 text-base font-semibold transition-colors duration-300 
                ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'
                }`}
            >
              <Icon size={20} />
              {label}
            </button>
          );
        })}
      </div>
      
      <div className="pr-4 absolute bottom-[60px] right-0 md:static">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
