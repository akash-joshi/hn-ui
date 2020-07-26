import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import Header from './components/Header';
import Main from "./components/Main"
import Footer from "./components/Footer"

test('renders header', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/comments/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders main and calls api', async () => {
  const { getAllByText } = render(<Main page={1} />);
  await waitForElement(() => getAllByText(/hide/i));
  const linkElement = getAllByText(/hide/i)
  expect(linkElement);
});

test('renders footer', async () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Display Graph/i)
  expect(linkElement);
});
