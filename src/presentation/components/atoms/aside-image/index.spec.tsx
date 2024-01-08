import { render } from '@testing-library/react';

import AsideImage from './index';

describe('<AsideImage> component', () => {
  it('should be able to render the AsideImage component', () => {
    const { getByAltText, getByRole } = render(
      <AsideImage src='/image.png' alt='image' />
    );

    expect(getByAltText('image')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('should not be able to render the AsideImage component', () => {
    const { queryByAltText } = render(
      <AsideImage src='/image.png' alt='image' />
    );

    const imageComponent = queryByAltText('wrong alt text');

    expect(imageComponent).not.toBeInTheDocument();
  });
});
