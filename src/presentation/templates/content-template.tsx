import Image from 'next/image';
import { ReactNode } from 'react';

import AsideImage from './components/aside-image';

import GoBarberLogo from '@public/gobarber_logo001.svg';

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
        <Image
          src={GoBarberLogo}
          alt='Foto de barbearia'
          width={0}
          height={0}
          className='mx-auto max-sm:my-4 max-sm:w-48'
        />

        {children}
      </section>

      {position === 'right' && <AsideImage src={src} alt={alt} />}
    </main>
  );
}
