import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h3 className='my-4 text-lg'>{children}</h3>;
}
