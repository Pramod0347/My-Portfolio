export const routes = [
  { key: 'home', path: '/', label: 'Home' },
  { key: 'experience', path: '/experience', label: 'Experience' },
  { key: 'projects', path: '/projects', label: 'Projects' },
  { key: 'activity', path: '/activity', label: 'Activity' },
  { key: 'skills', path: '/skills', label: 'Skills' },
  { key: 'education', path: '/education', label: 'Education' },
  { key: 'resume', path: '/resume', label: 'Resume' },
  { key: 'contact', path: '/contact', label: 'Contact' },
];

export const navRoutes = routes.filter((r) => ['experience', 'projects', 'activity', 'skills', 'resume', 'contact'].includes(r.key));

export const getRouteForPath = (pathname) =>
  routes.find((route) => route.path === (pathname.replace(/\/+$/, '') || '/')) ?? routes[0];
