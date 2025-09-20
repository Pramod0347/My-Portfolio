import { IoHomeOutline, IoBriefcaseOutline, IoCodeSlashOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="md:flex justify-between items-center md:px-8 md:py-2 w-full md:bg-white/90 dark:md:bg-gray-800/90 md:rounded-bl-2xl md:rounded-br-2xl md:shadow-2xl backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="flex justify-around items-center w-full md:gap-2">
        {navItems.map(({ key, icon: Icon, label }, index) => {
          const isActive = activeSection === key;
          return (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScroll(key)}
              className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 text-base font-semibold transition-all duration-500 ease-out rounded-xl md:rounded-lg relative group flex-1 md:flex-none
                ${isActive
                  ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 shadow-lg border border-blue-200 dark:border-blue-700/50'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 hover:shadow-md'
                }`}
            >
              <motion.div
                animate={{ 
                  scale: isActive ? 1.1 : 1,
                  rotate: isActive ? [0, -5, 5, 0] : 0
                }}
                transition={{ 
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.6, ease: "easeInOut" }
                }}
              >
                <Icon 
                  size={18} 
                  className="transition-all duration-300 group-hover:scale-105" 
                />
              </motion.div>
              <motion.p 
                className="text-xs md:text-sm font-medium"
                animate={{ 
                  fontWeight: isActive ? 600 : 500 
                }}
                transition={{ duration: 0.3 }}
              >
                {label}
              </motion.p>
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"
                  />
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pr-2 absolute bottom-[75px] right-0 md:static md:pl-6"
      >
        <ThemeToggle />
      </motion.div>
    </motion.nav>
  );
};

export default Header;
