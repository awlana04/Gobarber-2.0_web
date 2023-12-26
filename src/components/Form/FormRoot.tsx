import { FormHTMLAttributes, ReactNode } from 'react';

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export default function FormRoot({ children, ...rest }: FormRootProps) {
  return (
    <form {...rest} className='flex flex-col'>
      {children}
    </form>
  );
}
