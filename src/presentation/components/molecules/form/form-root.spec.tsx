import { render, screen } from '@testing-library/react';

import FormRoot from './form-root';

describe('<FormRoot> component', () => {
  it('should be able to render the form root component', () => {
    render(<FormRoot submitHandler={() => {}}>Root</FormRoot>);

    const formRootElement = screen.getByText('Root');

    expect(formRootElement).toBeInTheDocument();
  });

  it('should not be able to render the form root component', () => {
    render(<FormRoot submitHandler={() => {}}>Root</FormRoot>);

    const formRootElement = screen.queryByText('Wrong root');

    expect(formRootElement).not.toBeInTheDocument();
  });
});
