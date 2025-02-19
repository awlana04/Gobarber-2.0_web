import { InputHTMLAttributes, ReactNode } from 'react';

type LabelProps = InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string;
  children: ReactNode;
};

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
    >
      {children}
    </label>
  );
}
