import {getFullYear, getFooterCopy, getLatestNotification} from './utils.js';

test('Return current year', () => {
  expect(getFullYear()).toBe(2024);
});

test('Return Footer copy if true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('Return Footer copy if false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test ('Return latest notification', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});