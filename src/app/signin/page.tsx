import LinkToBack from '@/components/LinkToBack';
import Logo from '@/components/Logo';
import ImageContainer from '@/components/ImageContainer';

import image from '@public/gobarber_image003.svg';

export default function Signin() {
  return (
    <body>
      <div className='flex'>
        <ImageContainer src={image} alt='Foto da barbearia' />

        <main className='grid w-screen'>
          <Logo />
        </main>
      </div>
    </body>
  );
}
