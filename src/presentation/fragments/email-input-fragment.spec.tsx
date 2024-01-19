import { render, screen } from '@testing-library/react';

import EmailInputFragment from './email-input-fragment';

describe('Email input fragment', () => {
  it('should be able to render the email input fragment', () => {
    render(
      <EmailInputFragment
        emailInput={{
          submitField: 'email',
          errored: false,
        }}
      />
    );

    const inputElement = screen.getByRole('textbox', { name: 'E-mail' });

    expect(inputElement).toBeVisible();
  });
});
