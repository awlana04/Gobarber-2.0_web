import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ConfirmPasswordInputFragment from './confirm-password-input-fragment';

describe('Confirm Password Fragment', () => {
  beforeEach(() => {
    render(
      <ConfirmPasswordInputFragment
        confirmPasswordErrored={false}
        confirmPasswordFilled={true}
        confirmPasswordRef={() => {}}
        handleConfirmPasswordFilled={() => {}}
        confirmPasswordValue=''
      />
    );
  });

  it('should be able to render the confirm password input', () => {
    const confirmPasswordInputElement =
      screen.getByPlaceholderText('Confirmar senha');

    expect(confirmPasswordInputElement).toBeVisible();
  });

  it('should not be to render the confirm password input', () => {
    const wrongConfirmPasswordInputElement = screen.queryByPlaceholderText(
      'Wrong confirm password input element'
    );

    expect(wrongConfirmPasswordInputElement).toBeNull();
  });
});
