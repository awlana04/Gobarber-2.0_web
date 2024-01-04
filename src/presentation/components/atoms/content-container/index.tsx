import { ReactNode } from 'react';

type ContentContainerProps = {
  children: ReactNode;
};

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <section className='flex w-screen flex-col items-center justify-center'>
      {children}
    </section>
  );
}
