import Image from 'next/image';

import GoBarberLogo from '@public/gobarber_logo001.svg';

export default function Logo() {
  return (
    <Image
      src={GoBarberLogo}
      alt='Foto de barbearia'
      className='m-auto max-sm:w-48'
    />
  );
}
