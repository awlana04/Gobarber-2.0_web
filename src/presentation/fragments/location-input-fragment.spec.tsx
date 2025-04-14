import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import LocationInputFragment from './location-input-fragment';

describe('Location Input Fragment', () => {
  beforeEach(() => {
    render(
      <LocationInputFragment
        descriptionErrored={false}
        descriptionFilled={true}
        descriptionRef={() => {}}
        descriptionValue=''
        handleDescriptionFilled={() => {}}
      />
    );
  });

  it('should be able to render the location input fragment', () => {
    const locationInputElement = screen.getByRole('textbox');

    expect(locationInputElement).toBeVisible();
  });

  it('should not be able to render the location input fragment', () => {
    const wrongLocationInputElement = screen.queryByPlaceholderText(
      'Wrong location input element'
    );

    expect(wrongLocationInputElement).toBeNull();
  });
});
