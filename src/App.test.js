import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders all four task tabs', () => {
  render(<App />);
  // Scope to the tab bar — the active task also renders its own heading.
  const tabs = within(screen.getByRole('navigation'));
  expect(tabs.getByText(/Task 1 — Feedback Form/i)).toBeInTheDocument();
  expect(tabs.getByText(/Task 2 — GitHub Search/i)).toBeInTheDocument();
  expect(tabs.getByText(/Task 3 — Expense Tracker/i)).toBeInTheDocument();
  expect(tabs.getByText(/Task 4 — Product Catalog/i)).toBeInTheDocument();
});
