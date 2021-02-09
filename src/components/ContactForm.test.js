import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm without erros', () => {
  render(<ContactForm />);
});

test('user can fill out and submit form', async () => {
  const app = render(<ContactForm />);
  //1. get access to from fields.
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  //2. add text to fields
  fireEvent.change(firstNameInput, {
    target: { value: 'Shane', name: 'firstName' },
  });
  fireEvent.change(lastNameInput, {
    target: { value: 'Slone', name: 'lastName' },
  });
  fireEvent.change(emailInput, {
    target: { value: 'slone.shane@gmail.com', name: 'email' },
  });
  fireEvent.change(messageInput, {
    target: { value: 'Hello World', name: 'message' },
  });
  const button = screen.getByRole('button');
  fireEvent.click(button);

  const displayedMessage = await screen.findByText(/slone.shane@gmail.com/i);

  expect(displayedMessage).toBeTruthy();
  expect(displayedMessage).toBeInTheDocument();

  //3. access and click submit button
});
