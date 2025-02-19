import { render, screen } from '@testing-library/react';

import FormTwoRadioButtons from './form-two-radio-buttons';

describe('<FormTwoRadioButtons /> Form component', () => {
  beforeEach(() => {
    render(
      <FormTwoRadioButtons
        isOpenAtNight={true}
        isOpenOnWeekends={true}
        setIsOpenAtNight={() => {}}
        setIsOpenOnWeekends={() => {}}
      />
    );
  });

  it('should be able to render the form two radio button component', () => {
    const peerButton = screen.getAllByRole('radio', { name: 'Sim' });

    expect(peerButton).not.toBeNull();
  });

  it('should not be able to render the radio button component', () => {
    const wrongRadioButton = screen.queryByRole('radio', { name: 'radio' });

    expect(wrongRadioButton).toBeNull();
  });
});
