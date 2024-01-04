import Link from 'next/link';
import { FiMail, FiLock } from 'react-icons/fi';

import ContentWrapper from '@components/atoms/content-wrapper';
import ContentContainer from '@components/atoms/content-container';
import Logo from '@components/atoms/logo';
import CreateAccount from '@components/atoms/create-account';
import AsideImage from '@components/atoms/aside-image';
import Button from '@components/atoms/button';
import Toast from '@components/atoms/toast';

import { Form } from '@components/molecules/form';

import image from '@public/gobarber_image002.svg';

type InputType = {
  submitField: any;

  errored: boolean;
};

type ToastType = {
  conditional?: {} | any;
  id?: string;
  description?: string;
};

type LogonScreenType = {
  submitHandler(data: any): void;
  emailInput: InputType;
  emailToast?: ToastType;
  passwordInput: InputType;
  passwordToast?: ToastType;
};

export default function LogonScreen({
  submitHandler,
  emailInput,
  emailToast,
  passwordInput,
  passwordToast,
}: LogonScreenType) {
  return (
    <ContentWrapper>
      <ContentContainer>
        <Logo />

        <h1 className='my-6 mt-10 text-2xl font-medium max-sm:mt-4'>
          Faça seu Logon
        </h1>

        <Form.Root onSubmit={submitHandler}>
          <Form.Input
            {...emailInput.submitField}
            iconName={FiMail}
            type='email'
            placeholder='Email'
            errored={emailInput.errored}
          />

          {emailToast?.conditional && (
            <Toast
              id={emailToast.id!}
              title='E-mail invalido'
              description={emailToast.description!}
            />
          )}

          <Form.Input
            {...passwordInput.submitField}
            iconName={FiLock}
            type='password'
            placeholder='Senha'
            errored={passwordInput.errored}
          />

          {passwordToast?.conditional && (
            <Toast
              id={passwordToast.id!}
              title='Senha invalida'
              description={passwordToast.description!}
            />
          )}

          <Button type='submit'>Entrar</Button>
        </Form.Root>

        <Link href='./forgot-password' className='my-4 mb-4 hover:underline'>
          Esqueci minha senha
        </Link>

        <CreateAccount />
      </ContentContainer>

      <AsideImage src={image} alt='Imagem da barbearia' />
    </ContentWrapper>
  );
}
