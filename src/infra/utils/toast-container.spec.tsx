import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ToastContainer from './toast-container';

describe('<ToastContainer> component', () => {
  beforeEach(() => {
    render(
      <ToastContainer
        messages={[
          {
            id: '12345678',
            type: 'success',
            title: 'Hello World!',
            description: 'Everything alright!',
          },
        ]}
      />
    );
  });

  it('should be able to render the toast container component', () => {
    const titleToastContainerElement = screen.getByRole('paragraph');
    const descriptionToastContainerElement = screen.getByText(
      'Everything alright!'
    );

    expect(titleToastContainerElement).toBeVisible();
    expect(descriptionToastContainerElement).toBeVisible();
  });

  it('should not be able to render the toast container component', () => {
    const wrongTitleToastContainerElement = screen.queryByText('wrong title!');

    expect(wrongTitleToastContainerElement).toBeNull();
  });
});
