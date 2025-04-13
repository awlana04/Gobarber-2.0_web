import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LogonScreen from './logon-screen';

describe('LogonScreen', () => {
  jest.mock('next/router', () => ({
    useRouter() {
      return {
        route: '/',
        pathname: '',
        query: {},
        asPath: '',
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null),
      };
    },
  }));

  beforeEach(() => {
    render(
      <LogonScreen
        submitHandler={jest.fn()}
        emailErrored={false}
        passwordErrored={false}
        emailFilled={true}
        passwordFilled={true}
        emailRef={jest.fn()}
        emailValue='john@doe.com'
        handleEmailFilled={jest.fn()}
        handlePasswordFilled={jest.fn()}
        passwordRef={jest.fn()}
        buttonDisabled={false}
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
