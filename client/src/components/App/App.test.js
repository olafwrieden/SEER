import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("Renders 'Welcome to SEER'", () => {
  const { getByText } = render(<App />);
  const HeroElement = getByText(/Welcome to SEER/i);
  expect(HeroElement).toBeInTheDocument();
});

test("Renders 'The Team'", () => {
  const { getByText } = render(<App />);
  const TeamElement = getByText(/The Team/i);
  expect(TeamElement).toBeInTheDocument();
});