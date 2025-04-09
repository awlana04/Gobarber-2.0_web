import Link from 'next/link';

import { EmailInputPropsType } from '@/presentation/types/email-input-props-type';
import { PasswordInputPropsType } from '@/presentation/types/password-input-props-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import ContentTemplate from '@/templates/content-template';

import Button from '@/atoms/button';
import CreateAccount from '@/atoms/create-account';

import { Form } from '@/molecules/form';

import EmailInputFragment from '@/fragments/email-input-fragment';
import PasswordInputFragment from '@/fragments/password-input-fragment';

import image from '@/public/gobarber_image002.svg';

type LogonScreenProps = EmailInputPropsType &
  PasswordInputPropsType &
  SubmitHandlerType & {
    buttonDisabled: boolean;
  };

export default function LogonScreen(props: LogonScreenProps) {
  return (
    <ContentTemplate position='right' src={image} alt='Imagem da barbearia'>
      <h1 className='my-6 mt-10 text-2xl font-medium max-sm:mt-4'>
        Faça seu Logon
      </h1>

      <Form.Root submitHandler={props.submitHandler}>
        <EmailInputFragment
          emailRef={props.emailRef}
          emailValue={props.emailValue}
          emailErrored={props.emailErrored}
          emailFilled={props.emailFilled}
          handleEmailFilled={props.handleEmailFilled}
        />
        <PasswordInputFragment
          passwordRef={props.passwordRef}
          passwordErrored={props.passwordErrored}
          passwordFilled={props.passwordFilled}
          handlePasswordFilled={props.handlePasswordFilled}
        />

        <Button type='submit' isDisabled={props.buttonDisabled}>
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
