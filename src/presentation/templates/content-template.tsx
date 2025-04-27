import Image from 'next/image';

import AsideImage from './components/aside-image';

import GoBarberLogo from '@/public/gobarber_logo001.svg';

import translate from '@/shared/utils/translate';

type ContentTemplateType = {
  children: React.ReactNode;
  position: 'left' | 'right';
  src: string;
  alt: string;
};

export default function ContentTemplate({
  children,
  ...props
}: ContentTemplateType) {
  return (
    <main className='flex'>
      {props.position === 'left' && (
        <AsideImage src={props.src} alt={props.alt} />
      )}

      <section className='flex w-screen flex-col items-center justify-center'>
        <Image
          src={GoBarberLogo}
          alt={translate('Barber shop image')}
          width={0}
          height={0}
          className='mx-auto max-sm:my-4 max-sm:w-48'
        />

        {children}
      </section>

      {props.position === 'right' && (
        <AsideImage src={props.src} alt={props.alt} />
      )}
    </main>
  );
}
