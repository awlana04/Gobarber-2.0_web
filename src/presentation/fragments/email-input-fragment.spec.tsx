import { render, screen } from '@testing-library/react';

import EmailInputFragment from './email-input-fragment';

describe('Email input fragment', () => {
  it('should be able to render the email input fragment', () => {
    render(<EmailInputFragment />);

    const inputElement = screen.getByRole('textbox', { name: 'email' });

    expect(inputElement).toBeVisible();
  });
});
