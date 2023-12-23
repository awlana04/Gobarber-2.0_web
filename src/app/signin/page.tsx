'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import Logo from '@/components/Logo';
import ImageContainer from '@/components/ImageContainer';
import LinkToBack from '@/components/LinkToBack';
import { Form } from '@/components/Form/index';

import api from '../../services/api';

import image from '@public/gobarber_image003.svg';

const SigninFormSchema = z
  .object({
    name: z.string().min(3, 'Necessita ser um nome válido'),
    email: z
      .string()
      .email('Email é obrigatório')
      .min(6, 'Necessita ter no mínimo 6 caracteres'),
    password: z.string().min(8, 'Necessita ter no mínimo 8 caracteres'),
    confirmPassword: z.string().min(8, 'Necessita confirmar a senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas necessitam combinar',
    path: ['confirmPassword'],
  });

type SigninFormType = z.infer<typeof SigninFormSchema>;

export default function Signin() {
  const Router = useRouter();

  const [file, setFile] = useState<File | undefined>(undefined);
  const [isSelected, setIsSelected] = useState('client');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormType>({
    resolver: zodResolver(SigninFormSchema),
  });

  const submitHandler = async (data: SigninFormType) => {
    const response = await api.post(
      '/users/',
      {
        name: data.name,
        email: data.email,
        password: data.password,
        location: 'Somewhere Over the Rainbow',
        avatar: file,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data;boundary=None',
        },
      }
    );

    const { token, user } = response.data.value;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    isSelected === 'client'
      ? Router.push('../dashboard/client')
      : Router.push('./signin/barber');
  };

  return (
    <main>
      <div className='flex'>
        <ImageContainer src={image} alt='Foto da barbearia' />

        <section className='grid w-screen'>
          <Logo />

          <Form.Root>
            <Form.Avatar />

            <Form.Radio />

            <Form.Input icon={FiUser} type='text' placeholder='Nome' />
            <Form.Input icon={FiMail} type='email' placeholder='E-mail' />
            <Form.Input icon={FiLock} type='password' placeholder='Senha' />
            <Form.Input
              icon={FiLock}
              type='password'
              placeholder='Confirmar senha'
            />

            <button
              type='submit'
              className='m-auto mb-4 mt-6 bg-orange max-sm:my-4'
            >
              Cadastrar
            </button>
          </Form.Root>

          <LinkToBack />
        </section>
      </div>
    </main>
  );
}
