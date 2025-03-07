import Image from 'next/image';
import Link from 'next/link';

import image from '@public/gobarber_image001.svg';

export function WelcomeToApplicationMail() {
  return (
    <div className='bg-background h-screen w-screen'>
      {/* <Image
        src={image}
        alt='Foto de barbearia'
        width={0}
        height={0}
        className='mx-auto justify-center self-center max-sm:my-4 max-sm:w-48'
      /> */}

      <h1 className='text-orange text-4xl'>
        <strong>Bem vindo ao GoBarber-2.0!</strong>
      </h1>

      <p className='text-3xl text-white'>
        Estamos muito felizes que você tenha ingressado em nossa aplicação e
        esperamos que você sinta-se acolhido e contemplado com as possibilidades
        e conteúdo!
      </p>
      <br />
      <p className='text-3xl text-white'>
        Você pode começar fazendo um agendamento por aqui.
        {/* <Link href='http://localhost:3000/dashboard/client' /> */}
      </p>
    </div>
  );
}

export default WelcomeToApplicationMail;
