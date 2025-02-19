import { render, screen } from '@testing-library/react';

import LocationInputFragment from './location-input-fragment';

describe('Location Input Fragment', () => {
  beforeEach(() => {
    render(<LocationInputFragment />);
  });

  it('should be able to render the location input fragment', () => {
    const locationInputElement = screen.getByPlaceholderText(
      'Selecione o lugar no mapa'
    );

    expect(locationInputElement).toBeVisible();
  });

  it('should not be able to render the location input fragment', () => {
    const wrongLocationInputElement = screen.queryByPlaceholderText(
      'Wrong location input element'
    );

    expect(wrongLocationInputElement).toBeNull();
  });
});
