import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Title from './title';

describe('<Title> component', () => {
  beforeEach(() => {
    render(<Title>Title</Title>);
  });

  it('should be able to render the title component', () => {
    const titleComponent = screen.getByRole('heading', { name: /title/i });

    expect(titleComponent).toBeInTheDocument();
  });

  it('should be able to render the title component', () => {
    const titleComponent = screen.queryByText('Wrong title');

    expect(titleComponent).not.toBeInTheDocument();
  });
});
