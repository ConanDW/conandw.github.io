import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { screen } from '@testing-library/react';
import { resolve } from 'path';

test('files in data', () => {
  const assets = [
    'src/data/me.jpg',
    'src/data/camdayresume.pdf',
    'src/data/bg.jpg'
  ]

  assets.forEach((asset) => {
    const file = resolve(__dirname, '..', asset);
    expect(() => readFileSync(file)).not.toThrow();
  });
});

//makes sure the header is rendered, meaning app probably will
test('renders the header and app', () => {
  render(<App />);
  const header = screen.getByRole('header');
  expect(header).toBeInTheDocument();
});