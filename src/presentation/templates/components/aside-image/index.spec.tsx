import { render, screen } from '@testing-library/react';

import AsideImage from './index';

describe('<AsideImage> component', () => {
  beforeEach(() => {
    render(<AsideImage src='/image.png' alt='image' />);
  });
  it('should be able to render the AsideImage component', () => {
    const imageComponent = screen.getByRole('img');
    const altText = screen.getByAltText('image');

    expect(altText).toBeInTheDocument();
    expect(imageComponent).toBeInTheDocument();
  });

  it('should not be able to render the AsideImage component', () => {
    const imageComponent = screen.queryByAltText('wrong alt text');

    expect(imageComponent).not.toBeInTheDocument();
  });
});
