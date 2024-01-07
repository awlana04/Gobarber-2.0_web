import { render } from '@testing-library/react';
import Button from './index';

describe('<Button> component', () => {
  it('should be able to render the button component', () => {
    const { getByText } = render(<Button type='button'>Button</Button>);

    expect(getByText('Button')).toBeInTheDocument();
  });
});
