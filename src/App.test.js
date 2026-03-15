import { render, screen } from '@testing-library/react';
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
