import { render, screen } from '@testing-library/react';

import BackToLogon from './back-to-logon';

describe('<BackToLogon> component', () => {
  beforeEach(() => {
    render(<BackToLogon />);
  });

  it('should be able to render the back to logon component', () => {
    const backToLogonElement = screen.getByText('Voltar para o logon');

    expect(backToLogonElement).toBeInTheDocument();
  });

  it('should not be able to render the back to logon component', () => {
    const backToLogonElement = screen.queryByText('Não voltar para o logon');

    expect(backToLogonElement).not.toBeInTheDocument();
  });
});
