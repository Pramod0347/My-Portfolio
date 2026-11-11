import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('renders portfolio hero content', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headingElement = screen.getByText(/Pramod G/i);
  expect(headingElement).toBeInTheDocument();
});

test('header navigation changes the page and displays project content', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  fireEvent.click(screen.getAllByRole('link', { name: /projects/i })[0]);

  expect(window.location.pathname).toBe('/projects');
  expect(screen.getByRole('heading', { name: /ai systems, built for real workflows/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Wealth Pilot' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'NewsRAG' })).toBeInTheDocument();
  expect(screen.getByText('Pramod Goudar')).toBeInTheDocument();
  screen.getAllByRole('link', { name: /projects/i }).forEach((link) => {
    expect(link).toHaveAttribute('aria-current', 'page');
  });
});

test('experience route highlights the AI engineering work and outcomes', () => {
  window.history.pushState({}, '', '/experience');

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/LangGraph copilots/i)).toBeInTheDocument();
  expect(screen.getByText(/retrieval precision from 71% to 87%/i)).toBeInTheDocument();
  expect(screen.getAllByText(/10×/i).length).toBeGreaterThan(0);

  window.history.pushState({}, '', '/');
});

test('skills can be opened directly by its route', () => {
  window.history.pushState({}, '', '/skills');

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole('heading', { name: /skills for production ai/i })).toBeInTheDocument();
  screen.getAllByRole('link', { name: /skills/i }).forEach((link) => {
    expect(link).toHaveAttribute('aria-current', 'page');
  });

  window.history.pushState({}, '', '/');
});

test('all pages are reachable from the responsive navigation', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  fireEvent.click(screen.getByRole('link', { name: /systems/i }));

  expect(window.location.pathname).toBe('/systems');
  expect(screen.getByRole('heading', { name: /ai systems in production/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /systems/i })).toHaveAttribute('aria-current', 'page');
});
