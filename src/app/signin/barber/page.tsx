'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiPlus } from 'react-icons/fi';

import ImageContainer from '@/components/ImageContainer';
import Logo from '@components/Logo';
import LinkToBack from '@/components/LinkToBack';

import api from '../../../services/api';

import image from '@public/gobarber_image004.svg';

const SigninBarberSchema = z.object({
  name: z.string().min(3),
  location: z.string().min(8),
  description: z.string().min(16),
});

type SigninBarberType = z.infer<typeof SigninBarberSchema>;

export default function SigninBarber() {
  const Router = useRouter();

  const [isOpenAtNightSelected, setIsOpenAtNightSelected] = useState(false);
  const [isOpenOnWeekendsSelected, setIsOpenOnWeekendsSelected] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninBarberType>({
    resolver: zodResolver(SigninBarberSchema),
  });

  const submitHandler = (data: SigninBarberType) => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = JSON.parse(localStorage.getItem('@GoBarber:user')!);

    api.defaults.headers.authorization = `Bearer ${token}`;

    api
      .post(`/barbers/${user.id}`, {
        name: data.name,
        location: data.location,
        description: data.description,
        openAtNight: isOpenAtNightSelected,
        openOnWeekends: isOpenOnWeekendsSelected,
        userId: user.id,
      })
      .then((response) => {
        const { barber } = response.data.value;

        localStorage.setItem('@GoBarber:barber', barber);

        Router.push('../../dashboard/barber');
      });
  };

  return (
    <main>
      <div className='flex'>
        <ImageContainer src={image} alt='Foto de barbeiro' />

        <section className='grid w-screen py-8'>
          <Logo />

          <form
            onSubmit={handleSubmit(submitHandler)}
            className='m-auto flex flex-col py-4'
          >
            <textarea
              {...register('location')}
              placeholder='Selecione o lugar no mapa'
              className='mb-2 h-48 w-full resize-none rounded-xl bg-input px-10 py-4 outline-none placeholder:text-inputText'
            />

            <input
              {...register('name')}
              placeholder='Nome da barbearia'
              className='mb-2 px-10 outline-none placeholder:text-inputText'
            />

            <textarea
              {...register('description')}
              placeholder='Descrição'
              className='mb-2 h-48 w-full resize-none rounded-xl bg-input px-10 py-4 outline-none placeholder:text-inputText'
            />

            <h3 className='mt-4'>Fotos</h3>

            <div>
              <input type='file' id='images' className='file hidden' />

              <label
                htmlFor='images'
                className='my-4 flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl bg-input hover:bg-orange hover:text-buttonText'
              >
                <FiPlus size={24} className='text-inputText' />
              </label>
            </div>

            <h3 className='mt-4'>Sua barbearia é aberta à noite?</h3>

            <div className='m-auto flex place-items-center p-4 pt-8'>
              <div className='mr-24'>
                <input
                  type='radio'
                  id='openAtNightYes'
                  checked={isOpenAtNightSelected === true}
                  onChange={() => setIsOpenAtNightSelected(true)}
                  className='peer hidden'
                />

                <label
                  htmlFor='openAtNightYes'
                  className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Sim
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  id='openAtNightNo'
                  checked={isOpenAtNightSelected === false}
                  onChange={() => setIsOpenAtNightSelected(false)}
                  className='peer hidden'
                />

                <label
                  htmlFor='openAtNightNo'
                  className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Não
                </label>
              </div>
            </div>

            <h3 className='mt-4'>Sua barbearia atende aos sábados?</h3>

            <div className='m-auto flex place-items-center p-4 pt-8'>
              <div className='mr-24'>
                <input
                  type='radio'
                  id='openOnWeekendsYes'
                  checked={isOpenOnWeekendsSelected === true}
                  onChange={() => setIsOpenOnWeekendsSelected(true)}
                  className='peer hidden'
                />

                <label
                  htmlFor='openOnWeekendsYes'
                  className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Sim
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  id='openOnWeekendsNo'
                  checked={isOpenOnWeekendsSelected === false}
                  onChange={() => setIsOpenOnWeekendsSelected(false)}
                  className='peer hidden'
                />
                <label
                  htmlFor='openOnWeekendsNo'
                  className='cursor-pointer justify-center rounded-lg p-3 px-6 text-center hover:bg-input peer-checked:bg-orange peer-checked:text-buttonText'
                >
                  Não
                </label>
              </div>
            </div>

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
