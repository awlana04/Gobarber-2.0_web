import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import NameInputFragment from './name-input-fragment';

describe('Name Input Fragment', () => {
  beforeEach(() => {
    render(
      <NameInputFragment
        icon='user'
        handleNameFilled={() => {}}
        nameErrored={false}
        nameFilled={true}
        nameRef={() => {}}
        nameValue=''
        placeholder='Nome'
      />
    );
  });

  it('should be able to render the name input fragment', () => {
    const nameInputElement = screen.getByRole('textbox');

    expect(nameInputElement).toBeVisible();
  });

  it('should not be able to render the name input fragment', () => {
    const wrongNameInputElement = screen.queryByPlaceholderText(
      'Wrong name input element'
    );

    expect(wrongNameInputElement).toBeNull();
  });
});
