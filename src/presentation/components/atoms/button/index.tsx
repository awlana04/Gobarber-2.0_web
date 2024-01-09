import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: 'submit' | 'button';
  children: ReactNode;
};

export default function Button({ type, children }: ButtonProps) {
  return (
    <button
      type={type}
      className='my-6 h-14 w-96 rounded-2xl bg-orange text-buttonText hover:bg-buttonHover max-lg:w-80 max-sm:w-72'
    >
      {children}
    </button>
  );
}
