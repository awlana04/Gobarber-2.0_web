import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import EmailInputFragment from './email-input-fragment';

describe('Email input fragment', () => {
  beforeEach(() => {
    render(
      <EmailInputFragment
        emailErrored={false}
        emailFilled={true}
        emailRef={() => {}}
        emailValue=''
        handleEmailFilled={() => {}}
      />
    );
  });

  it('should be able to render the email input fragment', () => {
    const emailInputElement = screen.getByRole('textbox');

    expect(emailInputElement).toBeVisible();
  });

  it('should not be able to render the email input fragment', () => {
    const wrongEmailInputElement = screen.queryByPlaceholderText(
      'wrong email input element'
    );

    expect(wrongEmailInputElement).toBeNull();
  });
});
