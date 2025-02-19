import { render, screen } from '@testing-library/react';

import Label from './label';

describe('<Label> component', () => {
  beforeEach(() => {
    render(<Label htmlFor='#'>Label</Label>);
  });

  it('should be able to render the label component', () => {
    const labelComponent = screen.getByText('Label');

    expect(labelComponent).toBeInTheDocument();
  });

  it('should not be able to render the label component', () => {
    const labelComponent = screen.queryByText('Wrong label');

    expect(labelComponent).not.toBeInTheDocument();
  });
});
