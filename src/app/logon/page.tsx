'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock } from 'react-icons/fi';

import ContentWrapper from '@/components/atoms/content-wrapper';
import ContentContainer from '@/components/atoms/content-container';
import Logo from '@/components/atoms/logo';
import CreateAccount from '@/components/atoms/create-account';
import AsideImage from '@/components/atoms/aside-image';
import Button from '@/components/atoms/button';
import Toast from '@/components/atoms/toast';

import { Form } from '@/components/molecules/form';

import image from '@public/gobarber_image002.svg';

import { FormHandler } from '@libs/form-handler';

import {
  AuthenticateFormSchema,
  AuthenticateFormType,
} from '@validations/authenticate-form';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

export default function Logon() {
  const Router = useRouter();

  const { register, handleSubmit, errors } = FormHandler(
    AuthenticateFormSchema
  );

  const submitHandler = async (data: AuthenticateFormType) => {
    const result = await AuthenticateFormHandler({
      email: data.email,
      password: data.password,
    });

    const { response } = result;

    if (response.barber) {
      Router.push('../dashboard/barber');
    } else {
      Router.push('../dashboard/client');
    }
  };

  return (
    <ContentWrapper>
      <ContentContainer>
        <Logo />

        <h1 className='my-6 mt-10 text-2xl font-medium max-sm:mt-4'>
          Faça seu Logon
        </h1>

        <Form.Root onSubmit={handleSubmit(submitHandler)}>
          <Form.Input
            {...register('email')}
            iconName={FiMail}
            type='email'
            placeholder='Email'
            errored={!!errors.email}
          />

          {errors.email && (
            <Toast
              id={errors.email.message!}
              title='E-mail invalido'
              description={errors.email.message!}
            />
          )}

          <Form.Input
            {...register('password')}
            iconName={FiLock}
            type='password'
            placeholder='Senha'
            errored={!!errors.password}
          />

          {errors.password && (
            <Toast
              id={errors.password.message!}
              title='Senha invalida'
              description={errors.password.message!}
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
