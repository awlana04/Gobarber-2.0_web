'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiScissors, FiMessageSquare, FiMapPin } from 'react-icons/fi';

import ImageContainer from '@/components/ImageContainer';
import Logo from '@components/Logo';
import LinkToBack from '@/components/LinkToBack';
import { Form } from '@/components/Form';
import Button from '@/components/Button';

import api from '../../../services/api';

import image from '@public/gobarber_image004.svg';

import useHandleUserHook from '@/hooks/useHandleUserHook';
import useHandleImagesHook from '@/hooks/useHandleImagesHook';

const SigninBarberSchema = z.object({
  name: z.string().min(3),
  // location: z.string().min(8),
  // description: z.string().min(16),
});

type SigninBarberType = z.infer<typeof SigninBarberSchema>;

export default function SigninBarber() {
  const Router = useRouter();

  // const [isOpenAtNightSelected, setIsOpenAtNightSelected] = useState(false);
  // const [isOpenOnWeekendsSelected, setIsOpenOnWeekendsSelected] =
  //   useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninBarberType>({
    resolver: zodResolver(SigninBarberSchema),
  });

  const {
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { file, setFile, fileUrl, setFileUrl, handleChange } =
    useHandleImagesHook();

  // const submitHandler = async (data: SigninBarberType) => {
  //   const token = localStorage.getItem('@GoBarber:token');
  //   const user = JSON.parse(localStorage.getItem('@GoBarber:user')!);

  //   api.defaults.headers.authorization = `Bearer ${token}`;

  //   const response = await api.post(`/barbers/${user.id}`, {
  //     name: data.name,
  //     location: data.location,
  //     description: data.description,
  //     openAtNight: isOpenAtNight,
  //     openOnWeekends: isOpenOnWeekends,
  //     userId: user.id,
  //   });

  //   const barber = response.data.value;

  //   const formData = new FormData();

  //   file.forEach((image) => {
  //     formData.append('images', image);
  //   });

  //   api.patch(`/barbers/${barber.id}`, formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });

  //   localStorage.setItem('@GoBarber:barber', JSON.stringify(barber));

  //   Router.push('../../dashboard/barber');
  // };

  return (
    <main className='flex'>
      <ImageContainer src={image} alt='Foto de barbeiro' />

      <section className='grid w-screen items-center justify-center py-8'>
        <Logo />

        {/* <Form.Textarea
          {...register('location')}
          placeholder='Selecione o lugar no mapa'
          iconName={FiMapPin}
        /> */}

        <Form.Root
          onSubmit={handleSubmit((data) =>
            console.log(data, file, isOpenAtNight, isOpenOnWeekends)
          )}
        >
          <Form.Input
            {...register('name')}
            iconName={FiScissors}
            type='text'
            placeholder='Nome da barbearia'
          />

          {/* <Form.Textarea
            {...register('description')}
            placeholder='Descrição'
            iconName={FiMessageSquare}
          /> */}

          <Form.Images
            file={file}
            fileUrl={fileUrl}
            setFile={setFile}
            setFileUrl={setFileUrl}
            handleChange={handleChange}
          />

          <Form.TwoRadio
            isOpenAtNight={isOpenAtNight}
            setIsOpenAtNight={setIsOpenAtNight}
            isOpenOnWeekends={isOpenOnWeekends}
            setIsOpenOnWeekends={setIsOpenOnWeekends}
          />

          <Button type='submit' href='#'>
            Cadastrar
          </Button>
        </Form.Root>

        <LinkToBack />
      </section>
    </main>
  );
}
