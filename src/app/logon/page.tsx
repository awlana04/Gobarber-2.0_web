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

import toast, { Toaster } from 'react-hot-toast';

export default function Logon() {
  const Router = useRouter();

  const { register, handleSubmit, errors } = FormHandler(
    AuthenticateFormSchema
  );

  {
    errors.email &&
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } w-80 rounded-lg bg-red px-6 py-4`}
          >
            <div className='flex flex-row justify-between'>
              <p className='mb-4 text-xl font-bold'>E-mail invalido</p>

              <FiX
                className='cursor-pointer text-xl hover:text-buttonText'
                onClick={() => toast.dismiss(t.id)}
              />
            </div>
            <span className='text-lg font-medium'>
              {errors.email!.message!}
            </span>
          </div>
        ),
        { id: errors.email.message }
      );
  }

  {
    errors.password &&
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } w-80 rounded-lg bg-red p-4`}
          >
            <div className='flex flex-row justify-between'>
              <p className='mb-2 text-xl font-bold'>Senha invalido</p>

              <FiX
                className='cursor-pointer text-xl hover:text-buttonText'
                onClick={() => toast.dismiss(t.id)}
              />
            </div>
            <span className='text-lg font-medium'>
              {errors.password!.message!}
            </span>
          </div>
        ),
        { id: errors.password.message }
      );
  }

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
      <Toaster position='top-right' />

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

          <Form.Input
            {...register('password')}
            iconName={FiLock}
            type='password'
            placeholder='Senha'
            errored={!!errors.password}
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
