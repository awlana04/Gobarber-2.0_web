'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock } from 'react-icons/fi';

import Logo from '@/components/Logo';
import CreateAccount from '@/components/CreateAccount';
import ImageContainer from '@/components/ImageContainer';
import { Form } from '@/components/Form';
import Button from '@/components/Button';

import image from '@public/gobarber_image002.svg';

import { AuthenticateFormHandler } from '../../functions/AuthenticateFormHandler';

import { FormHandler } from '../../lib/FormHandler';
import {
  AuthenticateFormSchema,
  AuthenticateFormType,
} from '../../validations/AuthenticateForm';

export default function Logon() {
  const { register, handleSubmit, errors } = FormHandler(
    AuthenticateFormSchema
  );

  const Router = useRouter();

  const submitHandler = async (data: AuthenticateFormType) => {
    const result = await AuthenticateFormHandler({
      email: data.email,
      password: data.password,
    });

    const { response } = result;

    const { barber } = response;

    if (barber) {
      Router.push('../dashboard/barber');
    } else {
      Router.push('../dashboard/client');
    }
  };

  return (
    <main className='flex'>
      <section className='flex w-screen flex-col items-center justify-center'>
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
          />

          {errors.email && <span>{errors.email.message}</span>}

          <Form.Input
            {...register('password')}
            iconName={FiLock}
            type='password'
            placeholder='Senha'
          />

          <Button type='submit' href='#'>
            Entrar
          </Button>
        </Form.Root>

        <Link href='./forgot-password' className='my-4 mb-4 hover:underline'>
          Esqueci minha senha
        </Link>

        <CreateAccount />
      </section>

      <ImageContainer src={image} alt='Imagem da barbearia' />
    </main>
  );
}
