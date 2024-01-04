import Link from 'next/link';

import AsideImage from '@/components/atoms/aside-image';
import Button from '@/components/atoms/button';
import ContentContainer from '@/components/atoms/content-container';
import ContentWrapper from '@/components/atoms/content-wrapper';
import CreateAccount from '@/components/atoms/create-account';
import Logo from '@/components/atoms/logo';

import image from '@public/gobarber_image001.svg';

export default function LandingPage() {
  return (
    <ContentWrapper>
      <AsideImage src={image} alt='Foto da barbearia' />

      <ContentContainer>
        <Logo />

        <p className='my-10 w-[55%] pb-4 text-xl max-lg:w-[80%] max-sm:my-2'>
          O <strong>GoBarber</strong> é uma aplicação voltada para barbeiros(a)
          e homens à procura de um ótimo profissional para cuidar da sua beleza
          masculina.
          <br />
          <br />
          Aqui você pode começar criando a sua conta como{' '}
          <strong>usuário</strong> e fazer o seu primeiro agendamento, ou
          iniciar como um <strong>barbeiro</strong> e ir acompanhando as
          demandas.
        </p>

        <Link href='./logon'>
          <Button type='button'>Fazer logon</Button>
        </Link>

        <CreateAccount />
      </ContentContainer>
    </ContentWrapper>
  );
}
