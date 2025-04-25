import { describe, it, expect } from 'vitest';
import { render, act, fireEvent } from '@testing-library/react';
import LogonWindow from './logon-window';
import userEvent from '@testing-library/user-event';

describe('<LogonWindow /> window in infra layer', () => {
  it('should be able to render the logon window and authenticate the user', () => {
    const { getByRole, getByPlaceholderText } = render(<LogonWindow />);

    const emailInput = getByRole('textbox');
    const passwordInput = getByPlaceholderText(/password/i);
    const submitButton = getByRole('button');

    act(() => fireEvent.input(emailInput, 'john@doe.com'));
    act(() => fireEvent.input(passwordInput, '12345678'));
    act(() => fireEvent.click(submitButton));

    expect(emailInput).toBeInTheDocument();
  });
});
