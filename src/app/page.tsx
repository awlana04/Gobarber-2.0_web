import Image from 'next/image';

import gobarberImage001 from '../../public/gobarber_image001.svg';
import gobarberLogo001 from '../../public/gobarber_logo001.svg';

export default function Home() {
  return (
    <body>
      <Image
        src={gobarberImage001}
        alt='Foto de barbearia'
        className='h-screen w-min'
      />

      <main className='grid w-screen'>
        <Image
          src={gobarberLogo001}
          alt='Logo do Gobarber'
          className='m-auto mt-16'
        />

        <p className='m-auto w-[45%]'>
          O GoBarber é uma aplicação voltada para barbeiros(a) e homens à
          procura de um ótimo profissional para cuidar da sua beleza masculina.
          <br />
          <br />
          Aqui você pode começar criando a sua conta como usuário e fazer o seu
          primeiro agendamento, ou iniciar como um barbeiro e ir acompanhanto as
          demandas.
        </p>

        <button className='m-auto mt-4'>Fazer logon</button>

        <span className='m-auto'>Criar conta</span>
      </main>
    </body>
  );
}
