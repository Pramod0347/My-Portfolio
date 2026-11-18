import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

afterEach(() => window.history.pushState({}, '', '/'));

test('renders the hero', () => {
  renderApp();
  expect(screen.getByRole('heading', { level: 1, name: /Pramod Goudar/ })).toBeInTheDocument();
  expect(screen.getByText('Software Engineer', { selector: 'p' })).toBeInTheDocument();
});

test('nav link updates the URL and marks itself active', () => {
  renderApp();
  fireEvent.click(screen.getByRole('link', { name: 'Projects' }));

  expect(window.location.pathname).toBe('/projects');
  expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('heading', { name: 'Wealth Pilot' })).toBeInTheDocument();
});

test('experience lists every role with outcomes', () => {
  renderApp();
  expect(screen.getByText(/1k\+ patients a day/)).toBeInTheDocument();
  ['Meril Life Sciences', 'Kushals Retail', 'Marmeto'].forEach((company) => {
    expect(screen.getByRole('heading', { level: 3, name: new RegExp(company) })).toBeInTheDocument();
  });
});

test('deep link marks the matching nav item active', () => {
  window.history.pushState({}, '', '/skills');
  renderApp();
  expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('aria-current', 'page');
});

test('project carousel moves between slides', async () => {
  renderApp();
  expect(screen.getByRole('group', { name: 'Slide 1 of 3' })).toHaveTextContent('Wealth Pilot');
  expect(screen.getByRole('button', { name: 'Go to Wealth Pilot' })).toHaveAttribute('aria-current', 'true');

  fireEvent.click(screen.getByRole('button', { name: 'Next slide' }));
  expect(await screen.findByRole('img', { name: 'ProcureFlow screenshot' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Go to ProcureFlow' })).toHaveAttribute('aria-current', 'true');

  fireEvent.click(screen.getByRole('button', { name: 'Go to NewsRAG' }));
  expect(await screen.findByRole('group', { name: 'Slide 3 of 3' })).toHaveTextContent('NewsRAG');
});

test('activity section shows GitHub and LeetCode stats', () => {
  renderApp();
  const activity = document.getElementById('activity');
  expect(activity).toHaveTextContent('LeetCode');
  expect(activity).toHaveTextContent('121solved');
  expect(activity).toHaveTextContent('public repos');
  expect(screen.getByRole('link', { name: /@pramod347/ })).toHaveAttribute('href', 'https://leetcode.com/u/pramod347/');
  expect(activity).not.toHaveTextContent(/shopify/i);
});

test('resume section offers the PDF without loading the viewer in tests', () => {
  renderApp();
  const resume = document.getElementById('resume');
  expect(resume).toHaveTextContent('A closer look.');
  expect(screen.getByRole('link', { name: /download/i })).toHaveAttribute('href', '/pramod_goudar.pdf');
});

test('highlighted skills marquee sits under the hero', () => {
  renderApp();
  const strip = screen.getByLabelText('Highlighted skills');
  expect(strip.previousElementSibling).toHaveAttribute('id', 'home');
  expect(strip.querySelectorAll('ul')[0]).toHaveTextContent('FastAPI');
  expect(strip.querySelectorAll('ul')[1]).toHaveAttribute('aria-hidden', 'true');
});
