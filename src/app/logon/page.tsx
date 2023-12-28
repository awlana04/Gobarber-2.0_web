'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiMail, FiLock } from 'react-icons/fi';

import Logo from '@/components/Logo';
import CreateAccount from '@/components/CreateAccount';
import ImageContainer from '@/components/ImageContainer';
import { Form } from '@/components/Form';
import Button from '@/components/Button';

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
