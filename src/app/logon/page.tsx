'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiX } from 'react-icons/fi';

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
            errored={!!errors.email}
          />

          {errors.email && (
            <div className='absolute right-0 top-0 z-10 m-4 w-80 items-end justify-end rounded-lg bg-red p-4'>
              <div className='flex flex-row justify-between'>
                <p className='mb-2 text-xl font-bold'>Erro!</p>

                <FiX className='cursor-pointer text-xl hover:text-buttonText' />
              </div>
              <span className='text-lg font-medium'>
                {errors.email.message}
              </span>
            </div>
          )}

          <Form.Input
            {...register('password')}
            iconName={FiLock}
            type='password'
            placeholder='Senha'
            errored={!!errors.password}
          />

          {errors.password && (
            <div className='absolute right-0 top-0 z-10 m-4 mt-32 w-80 items-end justify-end rounded-lg bg-red p-4'>
              <div className='flex flex-row justify-between'>
                <p className='mb-2 text-xl font-bold'>Erro!</p>

                <FiX className='cursor-pointer text-xl hover:text-buttonText' />
              </div>
              <span className='text-lg font-medium'>
                {errors.password.message}
              </span>
            </div>
          )}

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
