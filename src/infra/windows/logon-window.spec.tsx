// import { describe, it, expect } from 'vitest';
import { render, act, fireEvent } from '@testing-library/react';
import LogonWindow from './logon-window';
import userEvent from '@testing-library/user-event';

// const mockGetItem = jest.fn();
// const mockSetItem = jest.fn();
// const mockRemoveItem = jest.fn();
// Object.defineProperty(window, 'localStorage', {
//   value: {
//     getItem: (...args: string[]) => mockGetItem(...args),
//     setItem: (...args: string[]) => mockSetItem(...args),
//     removeItem: (...args: string[]) => mockRemoveItem(...args),
//   },
// });

describe('<LogonWindow /> window in infra layer', () => {
  // beforeEach(() => {
  //   mockSetItem.mockClear();
  // });

  it('should be able to render the logon window and authenticate the user', async () => {
    const { getByRole, getByPlaceholderText } = render(<LogonWindow />);

    const emailInput = getByRole('textbox');
    const passwordInput = getByPlaceholderText(/senha/i);
    const submitButton = getByRole('button');

    await userEvent.type(emailInput, 'john@doe.com');
    await userEvent.type(passwordInput, '12345678');
    await userEvent.click(submitButton);

    // expect(emailInput).toBeInTheDocument();
    // expect(mockSetItem).toHaveBeenCalledTimes(2);
    // expect(mockSetItem).toHaveBeenCalledWith('@GoBarber-2.0:user', {
    //   id: '78c3',
    //   name: 'John Doe',
    //   email: 'john@doe.com',
    //   password: '12345678',
    //   location: 'Somewhere Over the Rainbow',
    // });
  });
});
