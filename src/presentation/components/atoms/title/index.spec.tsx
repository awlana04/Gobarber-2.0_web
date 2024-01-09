import { render } from '@testing-library/react';

import Title from './index';

describe('<Title> component', () => {
  it('should be able to render the title component', () => {
    const { getByText } = render(<Title>Title</Title>);

    const titleComponent = getByText('Title');

    expect(titleComponent).toBeInTheDocument();
  });

  it('should be able to render the title component', () => {
    const { queryByText } = render(<Title>Title</Title>);

    const titleComponent = queryByText('Wrong title');

    expect(titleComponent).not.toBeInTheDocument();
  });
});
