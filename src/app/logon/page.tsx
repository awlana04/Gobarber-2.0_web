import Logo from '@/components/Logo';
import ImageContainer from '@/components/ImageContainer';
import CreateAccount from '@/components/CreateAccount';

import image from '@public/gobarber_image002.svg';

export default function Logon() {
  return (
    <body>
      <div className='flex'>
        <main className='grid w-screen p-2'>
          <Logo />
          <h1 className='m-auto'>Logon</h1>

          <CreateAccount />
        </main>

        <ImageContainer src={image} alt='Imagem da barbearia' />
      </div>
    </body>
  );
}
