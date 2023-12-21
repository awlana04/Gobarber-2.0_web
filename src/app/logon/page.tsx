'use client';

import { useState } from 'react';
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
  const [isFilled, setIsFilled] = useState(false);

  const Router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateFormType>({
    resolver: zodResolver(AuthenticateFormSchema),
  });

  const handleFilled = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsFilled(true);
    }
  };

  const submitHandler = async (data: AuthenticateFormType) => {
    const response = await api.post('/users/session', {
      email: data.email,
      password: data.password,
    });

    const { token, user, barber } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    if (barber !== null) {
      localStorage.setItem('@GoBarber:barber', JSON.stringify(barber));

      Router.push('../dashboard/barber');
    } else {
      Router.push('../dashboard/client');
    }
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
            <div
              className='group relative flex flex-col items-center py-3'
              onChange={handleFilled}
            >
              {isFilled ? (
                <FiMail className='absolute mx-8 -ml-64 mt-5 text-orange' />
              ) : (
                <FiMail className='absolute mx-8 -ml-64 mt-5 text-inputText group-focus-within:text-orange' />
              )}

              {isFilled ? (
                <input
                  {...register('email')}
                  type='email'
                  placeholder='Email'
                  className='m-auto flex-row px-10 text-orange outline-none ring-2 ring-orange placeholder:text-inputText focus:placeholder:text-orange'
                />
              ) : (
                <input
                  placeholder='Email'
                  className='m-auto flex-row px-10 text-orange outline-none placeholder:text-inputText focus:ring-2 focus:ring-orange focus:placeholder:text-orange'
                />
              )}

              {errors.email && (
                <div className='mt-4'>
                  <div className='absolute -z-10 -mt-2 ml-48 h-4 w-4 rotate-45 bg-red' />
                  <div className='rounded-xl bg-red p-2'>
                    <span className=''>{errors.email.message}</span>
                  </div>
                </div>
              )}
            </div>

            <div className='flex-row'>
              <FiLock className='absolute mx-4 mt-5 text-inputText ' />
              <input
                {...register('password')}
                type='password'
                placeholder='Senha'
                className='m-auto flex-row px-10 outline-none placeholder:text-inputText '
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
