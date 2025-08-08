import { render, screen } from '@testing-library/react';
import App from './App';

test('renders iespa church app', () => {
  render(<App />);
  const churchElement = screen.getByText(/iespa church/i);
  expect(churchElement).toBeInTheDocument();
});
