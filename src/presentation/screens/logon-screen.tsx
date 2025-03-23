import Link from 'next/link';

import Button from '@/atoms/button';
import CreateAccount from '@/atoms/create-account';

import { Form } from '@/molecules/form';

import EmailInputFragment from '@/fragments/email-input-fragment';
import PasswordInputFragment from '@/fragments/password-input-fragment';

import ContentTemplate from '@/templates/content-template';

import image from '@/public/gobarber_image002.svg';

type LogonScreenProps = {
  emailErrored: boolean;
  passwordErrored: boolean;
  emailValue: string;
  isButtonDisabled: boolean;
  submitHandler: (data: any) => void;
};

export default function LogonScreen({
  emailErrored,
  passwordErrored,
  emailValue,
  isButtonDisabled,
  submitHandler,
}: LogonScreenProps) {
  return (
    <ContentTemplate position='right' src={image} alt='Imagem da barbearia'>
      <h1 className='my-6 mt-10 text-2xl font-medium max-sm:mt-4'>
        Faça seu Logon
      </h1>

      <Form.Root submitHandler={submitHandler}>
        <EmailInputFragment emailErrored={emailErrored} value={emailValue} />
        <PasswordInputFragment passwordErrored={passwordErrored} />

        <Button type='submit' isDisabled={isButtonDisabled}>
          Entrar
        </Button>
      </Form.Root>

      <Link href='./forgot-password' className='my-4 mb-4 hover:underline'>
        Esqueci minha senha
      </Link>

      <CreateAccount />
    </ContentTemplate>
  );
}
