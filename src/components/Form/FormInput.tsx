import { ElementType, InputHTMLAttributes, forwardRef } from 'react';

import useHandleFilledHook from '@/hooks/useHandleFilledHook';

import Icon from '../atoms/Icon';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconName: ElementType;
  type: 'email' | 'password' | 'text';
  placeholder: string;
  errored: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ iconName, type, placeholder, errored, ...rest }, ref) => {
    const { isFilled, handleFilled } = useHandleFilledHook();

    return (
      <div
        className='group relative flex flex-col items-center py-2'
        onChange={handleFilled}
      >
        <Icon icon={iconName} filled={isFilled} errored={errored} />

        <input
          type={type}
          ref={ref}
          {...rest}
          placeholder={placeholder}
          data-filled={isFilled}
          data-errored={errored}
          className='h-14 w-96 flex-row rounded-2xl bg-input px-12 text-orange outline-none placeholder:text-inputText focus:ring-2 focus:ring-orange focus:placeholder:text-orange data-[errored=true]:text-red data-[errored=true]:ring-2 data-[filled=true]:ring-2 data-[errored=true]:ring-red data-[filled=true]:ring-orange data-[errored=true]:placeholder:text-red max-lg:w-80 max-sm:w-72 max-sm:px-10'
        />

        {/* {errors.email && (
        <div className='mt-4'>
          <div className='absolute -z-10 -mt-2 ml-48 h-4 w-4 rotate-45 bg-red' />
          <div className='rounded-xl bg-red p-2'>
            <span className=''>{errors.email.message}</span>
          </div>
        </div>
      )} */}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
