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
    <main className='flex items-center justify-center'>
      <section className='grid w-screen p-12'>
        <Logo />
        <h1 className='m-auto mb-4 mt-14 text-2xl font-medium'>
          Faça seu Logon
        </h1>

        <Form.Root onSubmit={handleSubmit(submitHandler)}>
          <Form.Input iconName={FiMail} type='email' placeholder='Email' />

          {errors.email && <span>{errors.email.message}</span>}

          <Form.Input iconName={FiLock} type='password' placeholder='Senha' />

          <Button type='submit' href='#'>
            Entrar
          </Button>
        </Form.Root>

        <Link href='./forgot-password' className='m-auto my-2 hover:underline'>
          Esqueci minha senha
        </Link>

        <CreateAccount />
      </section>

      <ImageContainer src={image} alt='Imagem da barbearia' />
    </main>
  );
}
