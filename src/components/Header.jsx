import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Code, Mail } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/experience', icon: Briefcase, label: 'Experience' },
  { to: '/projects', icon: Code, label: 'Projects' },
  { to: '/contact', icon: Mail, label: 'Contact' },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-around w-full">
      {navItems.map(({ to, icon: Icon, label }) => {
        const isActive = pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center text-xs ${isActive ? 'text-blue-500 font-semibold' : 'text-gray-500 dark:text-gray-300'} transition-colors duration-200`}
          >
            <Icon size={30} />
            <span className="mt-1 font-semibold text-sm db:text-base">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Header;
