import { IoHomeOutline, IoBriefcaseOutline, IoCodeSlashOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { GraduationCap } from "lucide-react";

import ThemeToggle from './ThemeToggle';

const navItems = [
  { key: 'home', icon: IoHomeOutline, label: 'Home' },
  { key: 'experience', icon: IoBriefcaseOutline, label: 'Experience' },
  { key: 'architecture', icon: IoCodeSlashOutline, label: 'Systems' },
  { key: 'projects', icon: IoCodeSlashOutline, label: 'Projects' },
  { key: 'education', icon: GraduationCap, label: 'Education' },
  { key: 'contact', icon: RiContactsBook3Line, label: 'Contact' },
];

const Header = ({ sectionRefs, activeSection }) => {
  const handleScroll = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-full rounded-[28px] border border-slate-200/80 bg-white/95 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/85">
      <div className="hidden items-center gap-6 md:flex">
        <div className="flex flex-1 items-center justify-center gap-1 lg:gap-2">
          {navItems.map(({ key, icon: Icon, label }) => {
            const isActive = activeSection === key;
            return (
              <button
                key={key}
                onClick={() => handleScroll(key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 lg:px-5 ${
                  isActive
                    ? 'bg-slate-100 text-slate-950 ring-1 ring-slate-300 dark:bg-slate-800 dark:text-white dark:ring-slate-600'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                <Icon size={17} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>

      <div className="md:hidden">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Navigate
            </p>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Explore sections
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="no-scrollbar -mx-1 overflow-x-auto">
          <div className="flex min-w-max gap-2 px-1">
            {navItems.map(({ key, icon: Icon, label }) => {
              const isActive = activeSection === key;
              return (
                <button
                  key={key}
                  onClick={() => handleScroll(key)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'border-slate-300 bg-slate-100 text-slate-950 dark:border-slate-600 dark:bg-slate-800 dark:text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200'
                  }`}
                >
                  <Icon size={15} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
