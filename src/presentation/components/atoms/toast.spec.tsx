import { render, screen } from '@testing-library/react';

import Toast from './toast';

describe('<Toast /> Component', () => {
  beforeEach(() => {
    render(
      <Toast
        message={{
          id: '12345678',
          type: 'success',
          title: 'Hello World!',
          description: 'Everything alright!',
        }}
      />
    );
  });

  it('should be able to render the toast component', () => {
    const titleToastElement = screen.getByText('Hello World!');
    const descriptionToastElement = screen.getByText('Everything alright!');

    expect(titleToastElement).toBeVisible();
    expect(descriptionToastElement).toBeVisible();
  });

  it('should not be able to render the toast component', () => {
    const wrongTitleToastElement = screen.queryByText('wrong title!');

    expect(wrongTitleToastElement).toBeNull();
  });
});
