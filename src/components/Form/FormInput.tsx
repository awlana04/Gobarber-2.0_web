import { ElementType, InputHTMLAttributes } from 'react';

import { Icon } from '../atoms/Icon';
import useHandleFilledHook from '@/hooks/useHandleFilledHook';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconName: ElementType;
  type: 'email' | 'password' | 'text';
  placeholder: string;
}

export default function FormInput({
  iconName,
  type,
  placeholder,
  ...rest
}: FormInputProps) {
  const { isFilled, handleFilled } = useHandleFilledHook();

  return (
    <div
      className='group relative flex flex-col items-center py-2'
      onChange={handleFilled}
    >
      {isFilled ? (
        <Icon.IconFilled icon={iconName} />
      ) : (
        <Icon.Icon icon={iconName} />
      )}

      {isFilled ? (
        <input
          type={type}
          {...rest}
          className='h-14 w-96 flex-row rounded-2xl bg-input px-12 text-orange outline-none ring-2 ring-orange placeholder:text-inputText focus:placeholder:text-orange max-lg:w-80 max-sm:w-72 max-sm:px-10'
        />
      ) : (
        <input
          {...rest}
          placeholder={placeholder}
          className='h-14 w-96 flex-row rounded-2xl bg-input px-12 text-orange outline-none placeholder:text-inputText focus:ring-2 focus:ring-orange focus:placeholder:text-orange max-lg:w-80 max-sm:w-72 max-sm:px-10'
        />
      )}

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
