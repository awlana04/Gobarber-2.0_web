import Link from 'next/link';

import ContentTemplate from '../templates/content-template';

import Button from '@/components/atoms/button';
import CreateAccount from '@/components/atoms/create-account';

import image from '@/public/gobarber_image001.svg';

export default function LandingScreen() {
  return (
    <ContentTemplate position='left' src={image} alt='Imagem da barbearia'>
      <p className='my-10 w-[55%] pb-4 text-xl max-lg:w-[80%] max-sm:my-2'>
        O <strong>GoBarber</strong> é uma aplicação voltada para barbeiros(a) e
        homens à procura de um ótimo profissional para cuidar da sua beleza
        masculina.
        <br />
        <br />
        Aqui você pode começar criando a sua conta como <strong>
          usuário
        </strong>{' '}
        e fazer o seu primeiro agendamento, ou iniciar como um{' '}
        <strong>barbeiro</strong> e ir acompanhando as demandas.
      </p>

      <Link href='./logon'>
        <Button type='button'>Fazer logon</Button>
      </Link>

      <CreateAccount />
    </ContentTemplate>
  );
}
