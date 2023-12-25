import { FormHTMLAttributes, ReactNode } from 'react';

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export default function FormRoot({ children, ...rest }: FormRootProps) {
  return (
    <form {...rest} className='m-auto flex flex-col'>
      {children}
    </form>
  );
}
