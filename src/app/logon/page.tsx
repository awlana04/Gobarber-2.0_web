'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiMail, FiLock } from 'react-icons/fi';

import Logo from '@/components/Logo';
import Button from '@/components/Button';
import CreateAccount from '@/components/CreateAccount';
import ImageContainer from '@/components/ImageContainer';

import image from '@public/gobarber_image002.svg';

import api from '../../services/api';

const AuthenticateFormSchema = z.object({
  email: z
    .string()
    .email('Necessita ser um email válido')
    .min(6, 'Necessita ter no mínimo 6 caracteres'),
  password: z.string().min(8, 'Necessita ter no mínimo 8 caracteres'),
});

type AuthenticateFormType = z.infer<typeof AuthenticateFormSchema>;

export default function Logon() {
  const Router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateFormType>({
    resolver: zodResolver(AuthenticateFormSchema),
  });

  const submitHandler = (data: AuthenticateFormType) => {
    api
      .post('/users/session', {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response);

        const { token, user, barber } = response.data;

        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(user));

        if (barber !== null) {
          localStorage.setItem('@GoBarber:barber', JSON.stringify(barber));

          Router.push('../dashboard/barber');
        } else {
          Router.push('../dashboard/client');
        }
      });
  };

  return (
    <div>
      <div className='flex items-center justify-center'>
        <main className='grid w-screen p-12'>
          <Logo />
          <h1 className='m-auto mt-14'>Faça seu Logon</h1>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className='flex flex-col items-center'
          >
            <div className='py-4'>
              <FiMail className='absolute mx-4 mt-5 text-inputText' />
              <input
                {...register('email')}
                type='email'
                placeholder='Email'
                className='m-auto flex-row px-10 text-orange outline-none placeholder:text-inputText hover:outline-orange hover:placeholder:text-orange focus:outline-orange focus:placeholder:text-orange'
              />
              {errors.email && (
                <span className='mt-2 flex flex-col'>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className='flex-row'>
              <FiLock className='absolute mx-4 mt-5 text-inputText ' />
              <input
                {...register('password')}
                type='password'
                placeholder='Senha'
                className='m-auto flex-row px-10 text-orange outline-none placeholder:text-inputText hover:outline-orange hover:placeholder:text-orange focus:outline-orange focus:placeholder:text-orange'
              />
              {errors.password && (
                <span className='mt-2 flex flex-col'>
                  {errors.password.message}
                </span>
              )}
            </div>

            <button type='submit' className='my-6 bg-orange max-sm:my-4'>
              Entrar
            </button>
          </form>

          <Link href='./forgot-password' className='m-auto my-2'>
            Esqueci minha senha
          </Link>

          <CreateAccount />
        </main>

        <ImageContainer src={image} alt='Imagem da barbearia' />
      </div>
    </div>
  );
}
