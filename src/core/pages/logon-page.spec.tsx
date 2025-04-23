import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LogonPage from './logon-page';

describe('<LogonPage /> page in core layer', () => {
  it('should be able to render the Logon page', () => {
    const { getByRole, getByPlaceholderText } = render(
      <LogonPage
        emailRef={() => {}}
        emailValue=''
        passwordRef={() => {}}
        submitHandler={() => {}}
      />
    );

    // const emailInput = getByPlaceholderText(/email/i);
    const passwordInput = getByPlaceholderText(/senha/i);
    const button = getByRole('button');

    // expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
