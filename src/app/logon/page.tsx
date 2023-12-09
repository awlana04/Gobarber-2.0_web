import Link from 'next/link';

import Logo from '@/components/Logo';
import Button from '@/components/Button';
import CreateAccount from '@/components/CreateAccount';
import ImageContainer from '@/components/ImageContainer';

import image from '@public/gobarber_image002.svg';

export default function Logon() {
  return (
    <body>
      <div className='flex'>
        <main className='grid w-screen p-2'>
          <Logo />
          <h1 className='m-auto'>Logon</h1>

          <Button href='./client/home' />

          <Link href='./forgot-password' className='m-auto'>
            Esqueci minha senha
          </Link>

          <CreateAccount />
        </main>

        <ImageContainer src={image} alt='Imagem da barbearia' />
      </div>
    </body>
  );
}
