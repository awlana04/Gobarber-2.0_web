import { render, screen } from '@testing-library/react';

import NameInputFragment from './name-input-fragment';

describe('Name Input Fragment', () => {
  beforeEach(() => {
    render(<NameInputFragment icon='user' />);
  });

  it('should be able to render the name input fragment', () => {
    const nameInputElement = screen.getByPlaceholderText('Nome');

    expect(nameInputElement).toBeVisible();
  });

  it('should not be able to render the name input fragment', () => {
    const wrongNameInputElement = screen.queryByPlaceholderText(
      'Wrong name input element'
    );

    expect(wrongNameInputElement).toBeNull();
  });
});
