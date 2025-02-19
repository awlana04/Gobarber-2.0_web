import { render, screen } from '@testing-library/react';

import Button from './button';

describe('<Button> component', () => {
  beforeEach(() => {
    render(<Button type='button'>Button</Button>);
  });

  it('should be able to render the button component', () => {
    const buttonElement = screen.getByRole('button');
    const buttonTextElement = screen.getByText('Button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });

  it('should render the button with the background color orange', () => {
    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveClass('bg-orange');
  });

  it('should not be able to render the button', () => {
    const buttonElement = screen.queryByText('Wrong button');

    expect(buttonElement).not.toBeInTheDocument();
  });
});
