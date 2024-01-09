import { ReactNode } from 'react';

import Logo from '../components/atoms/logo';
import AsideImage from './components/aside-image';

type ContentTemplateType = {
  children: ReactNode;
  position: 'left' | 'right';
  src: string;
  alt: string;
};

export default function ContentTemplate({
  children,
  position,
  src,
  alt,
}: ContentTemplateType) {
  return (
    <main className='flex'>
      {position === 'left' && <AsideImage src={src} alt={alt} />}

      <section className='flex w-screen flex-col items-center justify-center'>
        <Logo />

        {children}
      </section>

      {position === 'right' && <AsideImage src={src} alt={alt} />}
    </main>
  );
}
