import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: 'submit' | 'button';
  isDisabled: boolean;
  children: ReactNode;
};

export default function Button({ type, isDisabled, children }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className='bg-orange text-button-text hover:not-disable:bg-button-hover mt-6 mb-6 h-14 w-96 cursor-pointer rounded-2xl disabled:opacity-50 max-lg:w-80 max-sm:w-72'
    >
      {children}
    </button>
  );
}
