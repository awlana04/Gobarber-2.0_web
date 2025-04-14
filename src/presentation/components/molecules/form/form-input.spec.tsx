import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiLock } from 'react-icons/fi';

import FormInput from './form-input';

describe('<FormInput> component', () => {
  it('should be able to render the form input component', () => {
    render(
      <FormInput
        iconName={FiLock}
        placeholder='input'
        type='text'
        name='name'
        errored={false}
        filled={true}
        handleFilled={() => {}}
        ref={() => {}}
      />
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
  });

  // it('should be able to change the text color of the input when focus on it', () => {
  //   render(
  //     <FormInput
  //       iconName={FiLock}
  //       placeholder='input'
  //       type='text'
  //       name='name'
  //       // errored={false}
  //     />
  //   );

  //   const inputElement = screen.getByPlaceholderText('input');

  //   userEvent.click(inputElement);

  //   expect(inputElement).toHaveClass('focus:placeholder:text-orange');
  // });

  // it('should be able to change the placeholder color of the input when filled', () => {
  //   render(
  //     <FormInput
  //       iconName={FiLock}
  //       placeholder='input'
  //       type='text'
  //       name='name'
  //       // errored={false}
  //     />
  //   );

  //   const inputElement = screen.getByPlaceholderText('input');

  //   fireEvent.change(inputElement, { target: { value: 'John Doe' } });

  //   expect(inputElement).toHaveClass(
  //     'data-[filled=true]:data-[errored=false]:ring-orange'
  //   );
  // });

  // it('should not be able to change the text color of the input when filled', () => {
  //   render(
  //     <FormInput
  //       iconName={FiLock}
  //       placeholder='input'
  //       type='text'
  //       errored={false}
  //     />
  //   );

  //   const inputElement = screen.getByPlaceholderText('input');

  //   const inputOnChangeValue = fireEvent.change(inputElement, {
  //     target: { value: 'John Doe' },
  //   });

  //   expect(inputOnChangeValue).not.toHaveClass('data-[errored=true]:text-red');
  // });

  // it('should be able to change the text color of the input when errored', () => {
  //   render(
  //     <FormInput
  //       iconName={FiLock}
  //       placeholder='input'
  //       type='text'
  //       errored={true}
  //     />
  //   );

  //   const inputElement = screen.getByPlaceholderText('input');

  //   expect(inputElement).toHaveClass('data-[errored=true]:text-red');
  // });

  // it('should not be able to render the form input component', () => {
  //   render(
  //     <FormInput
  //       iconName={FiLock}
  //       placeholder='input'
  //       type='text'
  //       name='name'
  //       errored={false}
  //       filled={true}
  //       handleFilled={() => {}}
  //       ref={() => {}}
  //     />
  //   );

  //   const inputElement = screen.queryByPlaceholderText('Wrong input');

  //   expect(inputElement).not.toBeInTheDocument();
  // });
});
