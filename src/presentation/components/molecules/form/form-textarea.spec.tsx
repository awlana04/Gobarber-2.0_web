import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormTextarea from './form-textarea';
import { FiLock } from 'react-icons/fi';

describe('<FormTextarea> component', () => {
  it('should be able to render the form textarea', () => {
    render(
      <FormTextarea
        iconName={FiLock}
        placeholder='textarea'
        name='textarea'
        handleTextareaFilled={() => {}}
        textareaErrored={false}
        textareaFilled={true}
        textareaRef={() => {}}
        textareaValue=''
      />
    );

    const formTextareaElement = screen.getByRole('textbox');

    expect(formTextareaElement).toBeInTheDocument();
  });

  it('should not be able to render the form textarea component', () => {
    render(
      <FormTextarea
        iconName={FiLock}
        placeholder='textarea'
        name='textarea'
        handleTextareaFilled={() => {}}
        textareaErrored={false}
        textareaFilled={true}
        textareaRef={() => {}}
        textareaValue=''
      />
    );

    const formTextareaElement = screen.queryByPlaceholderText('Wrong textarea');

    expect(formTextareaElement).not.toBeInTheDocument();
  });
});
