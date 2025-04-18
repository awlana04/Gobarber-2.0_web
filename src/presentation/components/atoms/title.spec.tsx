import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Title from './title';

describe('<Title /> atom component', () => {
  beforeEach(() => {
    render(<Title>Title</Title>);
  });

  it('should be able to render the title atom component', () => {
    const titleAtomComponent = screen.getByRole('heading', { name: /title/i });

    expect(titleAtomComponent).toBeInTheDocument();
  });

  it('should NOT be able to render the title atom component', () => {
    const wrongTitleAtomComponent = screen.queryByText('Wrong title');

    expect(wrongTitleAtomComponent).not.toBeInTheDocument();
  });
});
