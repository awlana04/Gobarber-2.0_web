import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormRadioButton from './form-radio-button';

describe('<FormRadioButton /> Form component', () => {
  beforeEach(() => {
    render(
      <FormRadioButton
        isBarber={false}
        isBarberSelected={true}
        setIsBarberSelected={() => {}}
      />
    );
  });

  it('should be able to render the form radio button component', () => {
    const peerButton = screen.getByRole('radio', { name: 'Sou Cliente' });

    expect(peerButton).toBeVisible();
  });

  it('should not be able to render the radio button component', () => {
    const wrongRadioButton = screen.queryByRole('radio', { name: 'radio' });

    expect(wrongRadioButton).toBeNull();
  });
});
