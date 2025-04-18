import { describe, it, expect } from 'vitest';
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
        emailFilled={true}
        passwordFilled={true}
        emailRef={() => {}}
        emailValue='john@doe.com'
        handleEmailFilled={() => {}}
        handlePasswordFilled={() => {}}
        passwordRef={() => {}}
        buttonDisabled={false}
      />
    );
  });

  it('should be able to render the logon screen', () => {
    // const emailInput = screen.queryByRole('textbox', { name: /e-mail/i });
    // const passwordInput = screen.getByRole('textbox', { name: /senha/i });
    const submitButton = screen.getByRole('button');

    // expect(emailInput).toBeVisible();
    // expect(passwordInput).toBeVisible();
    expect(submitButton).toBeVisible();
  });

  // it('should not be able to render the logon screen when fields are blank', async () => {
  //   // render(<LogonScreen submitHandler={() => {}} />);

  //   const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
  //   const submitButton = screen.getByRole('button');

  //   act(() => {
  //     userEvent.type(emailInput, 'john@doe.com');
  //     userEvent.click(submitButton);
  //   });

  //   await waitFor(() => {
  //     expect(screen.getByText('Erro no email')).toBeVisible();
  //   });
  // });
});
