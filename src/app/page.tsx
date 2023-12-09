import Image from 'next/image';
import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';

import image from '@public/gobarber_image001.svg';
import logo from '@public/gobarber_logo001.svg';

export default function Landing() {
  return (
    <body>
      <div className='flex'>
        <div className='opacity-1 h-screen w-screen  max-sm:h-0 max-sm:w-0 max-sm:opacity-0'>
          <Image src={image} alt='Foto de barbearia' />
        </div>

        <main className='grid w-screen p-2 py-14 max-sm:py-4'>
          <Image
            src={logo}
            alt='Logo do Gobarber'
            className='m-auto max-sm:w-48'
          />

          <p className='m-auto w-[50%] max-sm:my-6 max-sm:w-[80%]'>
            O <strong>GoBarber</strong> é uma aplicação voltada para
            barbeiros(a) e homens à procura de um ótimo profissional para cuidar
            da sua beleza masculina.
            <br />
            <br />
            Aqui você pode começar criando a sua conta como{' '}
            <strong>usuário</strong> e fazer o seu primeiro agendamento, ou
            iniciar como um <strong>barbeiro</strong> e ir acompanhanto as
            demandas.
          </p>

          <button className='m-auto'>Fazer logon</button>

          <Link
            href='./logon'
            className='m-auto flex text-orange hover:text-orange max-sm:mt-4'
          >
            <FiLogIn size={20} className='m-auto mx-4' />
            Criar conta
          </Link>
        </main>
      </div>
    </body>
  );
}
