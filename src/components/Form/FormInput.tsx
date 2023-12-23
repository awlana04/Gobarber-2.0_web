'use client';

import { useState, ElementType, InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ElementType;
  type: 'email' | 'password' | 'text';
  placeholder: string;
}

export default function FormInput({
  icon: Icon,
  type,
  placeholder,
  ...rest
}: FormInputProps) {
  const [isFilled, setIsFilled] = useState(false);

  const handleFilled = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsFilled(true);
    }
  };

  return (
    <div
      className='group relative flex flex-col items-center py-2'
      onChange={handleFilled}
    >
      {isFilled ? (
        <Icon className='absolute mx-8 -ml-64 mt-5 text-orange' />
      ) : (
        <Icon className='absolute mx-8 -ml-64 mt-5 text-inputText group-focus-within:text-orange' />
      )}

      {isFilled ? (
        <input
          type={type}
          {...rest}
          className='m-auto flex-row px-10 text-orange outline-none ring-2 ring-orange placeholder:text-inputText focus:placeholder:text-orange'
        />
      ) : (
        <input
          {...rest}
          placeholder={placeholder}
          className='m-auto flex-row px-10 text-orange outline-none placeholder:text-inputText focus:ring-2 focus:ring-orange focus:placeholder:text-orange'
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
