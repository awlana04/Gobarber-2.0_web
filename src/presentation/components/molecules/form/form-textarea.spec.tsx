import { render, screen } from '@testing-library/react';
import FormTextarea from './form-textarea';
import { FiLock } from 'react-icons/fi';

describe('<FormTextarea> component', () => {
  it('should be able to render the form textarea', () => {
    render(
      <FormTextarea iconName={FiLock} placeholder='textarea' errored={false} />
    );

    const formTextareaElement = screen.getByPlaceholderText('textarea');

    expect(formTextareaElement).toBeInTheDocument();
  });

  it('should not be able to render the form textarea component', () => {
    render(
      <FormTextarea iconName={FiLock} placeholder='textarea' errored={false} />
    );

    const formTextareaElement = screen.queryByPlaceholderText('Wrong textarea');

    expect(formTextareaElement).not.toBeInTheDocument();
  });
});
