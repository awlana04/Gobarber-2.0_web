import { render } from '@testing-library/react';

import '../../../../app/globals.css';

import Button from './index';

describe('<Button> component', () => {
  it('should be able to render the button component', () => {
    const { getByText, getByRole } = render(
      <Button type='button'>Button</Button>
    );

    const buttonElement = getByRole('button');
    const buttonTextElement = getByText('Button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });

  it('should render the button with the background color orange', () => {
    const { getByRole } = render(<Button type='button'>Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toHaveClass('bg-orange');
  });
});
