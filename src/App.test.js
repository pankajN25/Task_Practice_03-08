import { render, screen } from '@testing-library/react';
import App from './App';

test('renders both task tabs', () => {
  render(<App />);
  expect(screen.getByText(/Task 1 — Feedback Form/i)).toBeInTheDocument();
  expect(screen.getByText(/Task 2 — GitHub Search/i)).toBeInTheDocument();
});
