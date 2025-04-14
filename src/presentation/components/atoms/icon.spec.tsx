import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FiLock } from 'react-icons/fi';

import Icon from './icon';

describe('<Icon> component', () => {
  beforeEach(() => {
    render(<Icon icon={FiLock} filled={false} errored={false} />);
  });

  it('should be able to render the icon component', () => {
    // const iconElement = getByRole('');
    const iconElement = screen.getByTestId('iconElement');

    expect(iconElement).toHaveClass('text-input-text');
    expect(iconElement).toBeInTheDocument();
  });

  // it('should be able to change the text color of the icon when filled', () => {
  //   const { getByRole, getByTestId } = render(
  //     <Icon
  //       icon={FiLock}
  //       filled={true}
  //       // errored={false}
  //     />
  //   );

  //   // const iconElement = getByRole('generic');
  //   const iconElement = getByTestId('iconElement');

  //   expect(iconElement).toHaveClass(
  //     'data-[filled=true]:data-[errored=false]:text-orange'
  //   );
  // });

  // it('should be able to change the text color of the icon when errored', () => {
  //   const { getByTestId } = render(
  //     <Icon icon={FiLock} filled={false} errored={true} />
  //   );

  //   const iconElement = getByTestId('iconElement');

  //   expect(iconElement).toHaveClass('data-[errored=true]:text-red');
  // });

  it('should not be able to render the icon component', () => {
    const iconElement = screen.queryByTestId('wrongIconElement');

    expect(iconElement).not.toBeInTheDocument();
  });
});
