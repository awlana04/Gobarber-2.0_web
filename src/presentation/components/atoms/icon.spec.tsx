import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FiLock } from 'react-icons/fi';

import Icon from './icon';

describe('<Icon /> atom component', () => {
  beforeEach(() => {
    render(<Icon icon={FiLock} filled={false} errored={false} />);
  });

  it('should be able to render the icon atom component', () => {
    const iconAtomComponent = screen.getByTestId('iconElement');

    expect(iconAtomComponent).toHaveClass(
      'text-input-text data-[errored=true]:text-red data-[filled=true]:data-[errored=false]:text-orange group-focus-within:data-[errored=false]:text-orange'
    );
    expect(iconAtomComponent).toBeInTheDocument();
  });

  it('should NOT be able to render the icon atom component', () => {
    const wrongIconAtomComponent = screen.queryByTestId('wrongIconElement');

    expect(wrongIconAtomComponent).not.toBeInTheDocument();
  });
});
