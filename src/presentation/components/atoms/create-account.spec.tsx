import { render, screen } from '@testing-library/react';

import CreateAccount from './create-account';

describe('<CreateAccount> component', () => {
  beforeEach(() => {
    render(<CreateAccount />);
  });

  it('should be able to render the create account component', () => {
    const createAccountElement = screen.getByText('Criar conta');

    expect(createAccountElement).toBeInTheDocument();
  });

  it('should not be able to render the create account component', () => {
    const createAccountElement = screen.queryByText('Não criar conta');

    expect(createAccountElement).not.toBeInTheDocument();
  });
});
