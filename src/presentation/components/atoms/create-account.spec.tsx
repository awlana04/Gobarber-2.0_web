import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import CreateAccount from './create-account';

describe('<CreateAccount /> atom component', () => {
  beforeEach(() => {
    render(<CreateAccount />);
  });

  it('should be able to render the create account atom component', () => {
    const createAccountAtomComponent = screen.getByRole('link', {
      name: /criar conta/i,
    });
    const createAccountSVGIcon = screen.getByTestId('iconElement');

    expect(createAccountAtomComponent).toHaveClass(
      'text-orange hover:text-orange hover:underline'
    );
    expect(createAccountSVGIcon).toBeInTheDocument();
    expect(createAccountAtomComponent).toBeInTheDocument();
  });

  it('should not be able to render the create account component', () => {
    const wrongCreateAccountAtomComponent = screen.queryByText('Wrong text');

    expect(wrongCreateAccountAtomComponent).not.toBeInTheDocument();
  });
});
