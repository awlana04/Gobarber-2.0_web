import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import BackToLogon from './back-to-logon';

describe('<BackToLogon> component', () => {
  beforeEach(() => {
    render(<BackToLogon />);
  });

  it('should be able to render the back to logon component', () => {
    const backToLogonElement = screen.getByRole('link', {
      name: /voltar para o logon/i,
    });

    expect(backToLogonElement).toBeInTheDocument();
  });

  it('should not be able to render the back to logon component', () => {
    const backToLogonElement = screen.queryByText('Não voltar para o logon');

    expect(backToLogonElement).not.toBeInTheDocument();
  });
});
