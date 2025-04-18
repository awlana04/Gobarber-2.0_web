import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormAvatarButton from './form-avatar-button';

describe('<FormAvatarButton /> molecule form component', () => {
  beforeEach(() => {
    render(
      <FormAvatarButton
        file='../../../../../public/next.svg'
        fileUrl='../../../../../public/next.svg'
        handleChange={() => {}}
        handleRemove={() => {}}
      />
    );
  });

  it('should be able to render the form avatar molecule button component', () => {
    const inputAvatarFormMoleculeComponent = screen.getByRole('img', {
      name: 'Logo do GoBarber',
    });

    const chooseParagraphAppearance = screen.getAllByRole('paragraph');

    expect(inputAvatarFormMoleculeComponent).toBeVisible();
    expect(chooseParagraphAppearance).toBeDefined();
  });

  it('should NOT be able to render the form avatar molecule button component', () => {
    const wrongInputAvatarFormMoleculeComponent =
      screen.queryByTestId('wrong-input-avatar');

    expect(wrongInputAvatarFormMoleculeComponent).toBeNull();
  });
});
