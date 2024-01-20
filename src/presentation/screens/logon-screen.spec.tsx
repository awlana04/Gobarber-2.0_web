import { render, screen } from '@testing-library/react';

import LogonScreen from './logon-screen';

describe('LogonScreen', () => {
  it('should be able to render the logon screen', () => {
    render(
      <LogonScreen
        submitHandler={() => {}}
        emailInput={{
          submitField: 'email',
          errored: false,
        }}
        passwordInput={{
          submitField: 'password',
          errored: false,
        }}
      />
    );

    const logonScreenElement = screen.getByRole('textbox', {
      name: 'E-mail',
    });

    expect(logonScreenElement).toBeVisible();
  });
});
