import '@testing-library/jest-dom';
import App from '../src/App';
import { render, screen } from './test-utils';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(<App />);
  const RussianSwitchLang = screen.getByText('Russian');
  const EnhlishSwitchLang = screen.getByText('English');
  expect(RussianSwitchLang).toBeInTheDocument();
  expect(EnhlishSwitchLang).toBeInTheDocument();
});
