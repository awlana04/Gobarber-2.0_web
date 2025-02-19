import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormAvatarButton from './form-avatar-button';

describe('<FormAvatarButton> form component', () => {
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

  it('should be able to render the form avatar button', () => {
    const inputAvatarComponent = screen.getByRole('img', {
      name: 'Logo do GoBarber',
    });

    // act(() => {
    //   userEvent.hover(inputAvatarComponent);
    // });

    // const chooseParagraphAppearance = screen.getByRole('paragraph', {
    //   name: 'Escolher',
    // });

    expect(inputAvatarComponent).toBeVisible();
    // expect(chooseParagraphAppearance).toBeVisible();
  });

  it('should not be able to render the form avatar button', () => {
    const wrongInputAvatarComponent =
      screen.queryByTestId('wrong-input-avatar');

    expect(wrongInputAvatarComponent).toBeNull();
  });
});
