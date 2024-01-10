import { render, screen } from '@testing-library/react';

import CreateAccount from './';

describe('<CreateAccount> component', () => {
  it('should be able to render the create account component', () => {
    render(<CreateAccount />);

    const createAccountElement = screen.getByText('Criar conta');

    expect(createAccountElement).toBeInTheDocument();
  });

  it('should not be able to render the create account component', () => {
    render(<CreateAccount />);

    const createAccountElement = screen.queryByText('Não criar conta');

    expect(createAccountElement).not.toBeInTheDocument();
  });
});
