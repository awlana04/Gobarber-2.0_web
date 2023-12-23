import { ReactNode } from 'react';

interface FormTitleProps {
  children: ReactNode;
}

export default function FormTitle({ children }: FormTitleProps) {
  return <h3 className='mt-4'>{children}</h3>;
}
