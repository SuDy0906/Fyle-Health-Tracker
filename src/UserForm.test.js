import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserForm from './components/UserForm';
import '../index.css';

test('renders UserForm and adds a new user', () => {
  render(<UserForm addUser={() => {}} />);
  fireEvent.change(screen.getByPlaceholderText('User Name'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByPlaceholderText('Workout Type'), { target: { value: 'Running' } });
  fireEvent.change(screen.getByPlaceholderText('Workout Minutes'), { target: { value: '30' } });
  fireEvent.click(screen.getByText('Add Workout'));
  expect(screen.getByPlaceholderText('User Name').value).toBe('');
});
