import { render, screen } from '@testing-library/react';

import PasswordInputFragment from './password-input-fragment';

describe('Password Input Fragment', () => {
  beforeEach(() => {
    render(<PasswordInputFragment />);
  });

  it('should be able to render the password input fragment', () => {
    const passwordInputElement = screen.getByPlaceholderText('Senha');

    expect(passwordInputElement).toBeVisible();
  });

  it('should not be able to render the password input fragment', () => {
    const wrongPasswordInputElement = screen.queryByPlaceholderText(
      'Wrong password input element'
    );

    expect(wrongPasswordInputElement).toBeNull();
  });
});
