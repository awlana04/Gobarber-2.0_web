import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import BackToLogon from './back-to-logon';

describe('<BackToLogon /> atom component', () => {
  beforeEach(() => {
    render(<BackToLogon />);
  });

  it('should be able to render the back to logon atom component', () => {
    const backToLogonAtomComponent = screen.getByRole('link', {
      name: /voltar para o logon/i,
    });

    expect(backToLogonAtomComponent).toHaveClass('hover:underline');
    expect(backToLogonAtomComponent).toBeInTheDocument();
  });

  it('should NOT be able to render the back to logon atom component', () => {
    const wrongBackToLogonAtomComponent = screen.queryByText(/wrong text/i);

    expect(wrongBackToLogonAtomComponent).not.toBeInTheDocument();
  });
});
