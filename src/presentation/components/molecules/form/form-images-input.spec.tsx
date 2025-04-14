import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormImagesInput from './form-images-input';

describe('<FormImagesInput /> form component', () => {
  beforeEach(() => {
    render(
      <FormImagesInput
        file='../../../../../public/next.svg'
        fileUrl={['../../../../../public/next.svg']}
        setFile={() => {}}
        setFileUrl={() => {}}
        handleChange={() => {}}
      />
    );
  });

  it('should be able to render the form images input', () => {
    const inputImagesComponent = screen.queryByRole('img');

    expect(inputImagesComponent).toBeVisible();
  });

  // it('should not be able to render the form images input', () => {
  //   const wrongInputImagesComponent = screen.queryByTestId('wrong-images');

  //   expect(wrongInputImagesComponent).toBeNull();
  // });
});
