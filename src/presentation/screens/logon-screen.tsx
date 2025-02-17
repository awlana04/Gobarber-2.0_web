import Link from 'next/link';

import ContentTemplate from '../templates/content-template';

import EmailInputFragment from '../fragments/email-input-fragment';
import PasswordInputFragment from '../fragments/password-input-fragment';

import Button from '@components/atoms/button';

import { Form } from '@components/molecules/form';

import image from '@public/gobarber_image002.svg';

type LogonScreenProps = {
  submitHandler: (data: any) => void;
};

export default function LogonScreen({ submitHandler }: LogonScreenProps) {
  return (
    <ContentTemplate position='right' src={image} alt='Imagem da barbearia'>
      <h1 className='my-6 mt-10 text-2xl font-medium max-sm:mt-4'>
        Faça seu Logon
      </h1>

      <Form.Root submitHandler={submitHandler}>
        <EmailInputFragment />
        <PasswordInputFragment />

        <Button type='submit'>Entrar</Button>
      </Form.Root>

      <Link href='./forgot-password' className='my-4 mb-4 hover:underline'>
        Esqueci minha senha
      </Link>
    </ContentTemplate>
  );
}
