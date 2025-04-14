import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import DescriptionInputFragment from './description-input-fragment';

describe('Description Input Fragment', () => {
  beforeEach(() => {
    render(
      <DescriptionInputFragment
        descriptionErrored={false}
        descriptionFilled={true}
        descriptionRef={() => {}}
        descriptionValue=''
        handleDescriptionFilled={() => {}}
      />
    );
  });

  it('should be able to render the description input fragment', () => {
    const descriptionInputElement = screen.getByRole('textbox');

    expect(descriptionInputElement).toBeVisible();
  });

  it('should not be able to render the description input fragment', () => {
    const wrongDescriptionInputElement = screen.queryByPlaceholderText(
      'wrong placeholder text'
    );

    expect(wrongDescriptionInputElement).toBeNull();
  });
});
