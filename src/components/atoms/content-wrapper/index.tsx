import { ReactNode } from 'react';

type ContentWrapperProps = {
  children: ReactNode;
};

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return <main className='flex'>{children}</main>;
}
