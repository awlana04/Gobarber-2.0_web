import ImageContainer from '@/components/ImageContainer';
import Logo from '@components/Logo';
import Button from '@/components/Button';
import CreateAccount from '@/components/CreateAccount';

import image from '@public/gobarber_image001.svg';

export default function Landing() {
  return (
    <main className='flex items-center justify-center'>
      <ImageContainer src={image} alt='Foto da barbearia' />

      <section className='flex w-screen flex-col items-center justify-center p-2 py-14 max-sm:py-4'>
        <Logo />

        <p className='my-16 w-[50%] text-xl max-sm:my-4 max-sm:w-[80%]'>
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

        <Button type='button' href='./logon'>
          Fazer logon
        </Button>

        <CreateAccount />
      </section>
    </main>
  );
}
