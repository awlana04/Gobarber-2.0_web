import { render } from '@testing-library/react';

import Icon from './index';
import { FiLock } from 'react-icons/fi';

describe('<Icon> component', () => {
  it('should be able to render the icon component', () => {
    const { getByTestId } = render(
      <Icon
        icon={FiLock}
        filled={false}
        // errored={false}
      />
    );

    // const iconElement = getByRole('');
    const iconElement = getByTestId('iconElement');

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
    const { queryByTestId } = render(
      <Icon
        icon={FiLock}
        filled={false}
        // errored={false}
      />
    );

    const iconElement = queryByTestId('wrongIconElement');

    expect(iconElement).not.toBeInTheDocument();
  });
});
