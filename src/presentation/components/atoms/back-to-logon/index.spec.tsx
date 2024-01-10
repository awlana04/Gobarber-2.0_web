import { render, screen } from '@testing-library/react';

import BackToLogon from './';

describe('<BackToLogon> component', () => {
  it('should be able to render the back to logon component', () => {
    render(<BackToLogon />);

    const backToLogonElement = screen.getByText('Voltar para o logon');

    expect(backToLogonElement).toBeInTheDocument();
  });

  it('should not be able to render the back to logon component', () => {
    render(<BackToLogon />);

    const backToLogonElement = screen.queryByText('Não voltar para o logon');

    expect(backToLogonElement).not.toBeInTheDocument();
  });
});
