import { render } from '@testing-library/react';

import Label from './index';

describe('<Label> component', () => {
  it('should be able to render the label component', () => {
    const { getByText } = render(<Label htmlFor='#'>Label</Label>);

    const labelComponent = getByText('Label');

    expect(labelComponent).toBeInTheDocument();
  });

  it('should not be able to render the label component', () => {
    const { queryByText } = render(<Label htmlFor='#'>Label</Label>);

    const labelComponent = queryByText('Wrong label');

    expect(labelComponent).not.toBeInTheDocument();
  });
});
