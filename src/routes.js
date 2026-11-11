export const routes = [
  { key: 'home', path: '/', label: 'Home' },
  { key: 'skills', path: '/skills', label: 'Skills' },
  { key: 'experience', path: '/experience', label: 'Experience' },
  { key: 'projects', path: '/projects', label: 'Projects' },
  { key: 'systems', path: '/systems', label: 'Systems' },
  { key: 'certifications', path: '/certifications', label: 'Certifications' },
  { key: 'education', path: '/education', label: 'Education' },
  { key: 'contact', path: '/contact', label: 'Contact' },
];

export const getRouteForPath = (pathname) =>
  routes.find((route) => route.path === pathname.replace(/\/+$/, '') || route.path === pathname)
  ?? routes[0];
