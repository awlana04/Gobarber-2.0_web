import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Button from './button';

describe('<Button /> atom component', () => {
  beforeEach(() => {
    render(
      <Button type='button' isDisabled={false}>
        Button
      </Button>
    );
  });

  it('should be able to render the button atom component', () => {
    const buttonAtomComponent = screen.getByRole('button', { name: /button/i });

    expect(buttonAtomComponent).toHaveClass('bg-orange text-button-text');
    expect(buttonAtomComponent).toBeInTheDocument();
  });

  it('should NOT be able to render the button atom component', () => {
    const wrongButtonAtomComponent = screen.queryByRole('button', {
      name: /wrong button/i,
    });

    expect(wrongButtonAtomComponent).not.toBeInTheDocument();
  });
});
