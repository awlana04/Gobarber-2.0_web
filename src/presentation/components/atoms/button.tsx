import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: 'submit' | 'button';
  children: ReactNode;
};

export default function Button({ type, children }: ButtonProps) {
  return (
    <button
      type={type}
      className='bg-orange text-button-text hover:bg-button-hover mb-6 mt-6 h-14 w-96 cursor-pointer rounded-2xl max-lg:w-80 max-sm:w-72'
    >
      {children}
    </button>
  );
}
