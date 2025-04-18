import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Label from './label';

describe('<Label /> atom component', () => {
  beforeEach(() => {
    render(<Label htmlFor='#'>Label</Label>);
  });

  it('should be able to render the label atom component', () => {
    const labelAtomComponent = screen.getByText(/label/i);

    expect(labelAtomComponent).toHaveClass(
      'hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText cursor-pointer'
    );
    expect(labelAtomComponent).toBeInTheDocument();
  });

  it('should NOT be able to render the label atom component', () => {
    const wrongLabelAtomComponent = screen.queryByText('Wrong label');

    expect(wrongLabelAtomComponent).not.toBeInTheDocument();
  });
});
