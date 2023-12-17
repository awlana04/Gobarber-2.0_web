'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { FiCamera } from 'react-icons/fi';

import Logo from '@/components/Logo';
import ImageContainer from '@/components/ImageContainer';
import LinkToBack from '@/components/LinkToBack';

import api from '../../services/api';

import image from '@public/gobarber_image003.svg';
import logo from '@public/gobarber_logo.svg';

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
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
  const [isSelected, setIsSelected] = useState('client');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormType>({
    resolver: zodResolver(SigninFormSchema),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setFile(file);

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const url = URL.createObjectURL(file);

      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  };

  const handleRemove = () => {
    setFileUrl(undefined);
    setFile(undefined);
  };

  const submitHandler = (data: SigninFormType) => {
    api
      .post(
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
      )
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(user));

        isSelected === 'client'
          ? Router.push('../dashboard/client')
          : Router.push('./barber');
      });
  };

  return (
    <main>
      <div className='flex'>
        <ImageContainer src={image} alt='Foto da barbearia' />

        <section className='grid w-screen'>
          <Logo />

          <form
            onSubmit={handleSubmit(submitHandler)}
            className='flex flex-col'
          >
            <div className='group m-auto flex h-28 w-28 cursor-pointer rounded-full bg-white text-white hover:bg-inputText'>
              <input
                type='file'
                id='avatar'
                onChange={handleChange}
                className='file hidden'
              />

              <label htmlFor='avatar' className='m-auto'>
                <Image
                  src={logo}
                  alt='Logo do GoBarber'
                  className='absolute -mt-10 ml-3 cursor-pointer'
                />

                <p className='group-hover:opacity-1 absolute m-3 mt-10 opacity-0'>
                  Escolher
                </p>
              </label>

              {file && fileUrl && (
                <div
                  onClick={handleRemove}
                  className='group absolute m-auto cursor-pointer'
                >
                  <Image
                    src={fileUrl}
                    alt={file.name}
                    className='h-28 w-28 rounded-full'
                    width={112}
                    height={112}
                  />

                  <p className='group-hover:opacity-1 absolute m-3 mt-10 opacity-0'>
                    Remover
                  </p>
                </div>
              )}

              <div className='z-10 m-20 flex h-12 w-12 rounded-full bg-orange p-2 group-hover:bg-buttonHover'>
                <FiCamera className='m-auto text-black' size={28} />
              </div>
            </div>

            <div className='m-auto flex place-items-center p-4 pt-8'>
              <div className='mr-24'>
                <input
                  type='radio'
                  id='client'
                  value='client'
                  name='user'
                  checked={isSelected === 'client'}
                  onChange={(e) => setIsSelected(e.target.value)}
                  className='peer hidden'
                />
                <label
                  htmlFor='client'
                  className='cursor-pointer justify-center rounded-lg p-3 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Sou cliente
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  id='barber'
                  value='barber'
                  name='user'
                  checked={isSelected === 'barber'}
                  onChange={(e) => setIsSelected(e.target.value)}
                  className='peer hidden'
                />
                <label
                  htmlFor='barber'
                  className='cursor-pointer justify-center rounded-lg p-3 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Sou barbeiro
                </label>
              </div>
            </div>

            <input
              {...register('name')}
              type='text'
              placeholder='Nome'
              className='m-auto mb-2 flex-row px-10 outline-none placeholder:text-inputText'
            />

            {errors.name && <span>{errors.name.message}</span>}

            <input
              {...register('email')}
              type='email'
              placeholder='E-mail'
              className='m-auto mb-2 flex-row px-10 outline-none placeholder:text-inputText'
            />

            {errors.email && <span>{errors.email.message}</span>}

            <input
              {...register('password')}
              type='password'
              placeholder='Senha'
              className='m-auto mb-2 flex-row px-10 outline-none placeholder:text-inputText'
            />

            {errors.password && <span>{errors.password.message}</span>}

            <input
              {...register('confirmPassword')}
              type='password'
              placeholder='Confirmar senha'
              className='m-auto mb-2 flex-row px-10 outline-none placeholder:text-inputText'
            />

            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}

            <button
              type='submit'
              className='m-auto mb-4 mt-6 bg-orange max-sm:my-4'
            >
              Cadastrar
            </button>
          </form>

          <LinkToBack />
        </section>
      </div>
    </main>
  );
}
