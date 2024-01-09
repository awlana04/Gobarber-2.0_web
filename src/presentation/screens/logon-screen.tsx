import Link from 'next/link';
import { FiMail, FiLock } from 'react-icons/fi';

import ContentTemplate from '../templates/content-template';

import Button from '@components/atoms/button';
import Toast from '@components/atoms/toast';

import { Form } from '@components/molecules/form';

import { ToastType } from '@interfaces/toast-type';
import { InputType } from '@interfaces/input-type';

import image from '@public/gobarber_image002.svg';

type LogonScreenProps = {
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
}: LogonScreenProps) {
  return (
    <ContentTemplate position='right' src={image} alt='Imagem da barbearia'>
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
    </ContentTemplate>
  );
}
