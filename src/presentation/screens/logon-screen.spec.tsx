import '@testing-library/jest-dom';

import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LogonScreen from './logon-screen';

describe('LogonScreen', () => {
  beforeEach(() => {
    render(
      <LogonScreen
        submitHandler={() => {}}
        emailErrored={false}
        passwordErrored={false}
      />
    );
  });

  it('should be able to render the logon screen', () => {
    // render(<LogonScreen />);

    const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
    const passwordInput = screen.getByRole('textbox', { name: 'Senha' });
    const submitButton = screen.getByRole('button');

    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(submitButton).toBeVisible();
  });

  it('should not be able to render the logon screen when fields are blank', async () => {
    // render(<LogonScreen submitHandler={() => {}} />);

    const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
    const submitButton = screen.getByRole('button');

    act(() => {
      userEvent.type(emailInput, 'john@doe.com');
      userEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText('Erro no email')).toBeVisible();
    });
  });
});
