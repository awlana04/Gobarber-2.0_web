import { render, screen } from '@testing-library/react';

import Toast from './index';

describe('<Toast> component', () => {
  it('should be able to render the toast component', () => {
    render(<Toast id='1' title='title' description='description' />);

    const toastElement = screen.getByText('title');

    expect(toastElement).toBeInTheDocument();
  });
});
