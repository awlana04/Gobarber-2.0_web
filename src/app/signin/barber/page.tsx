'use client';

import { useRouter } from 'next/navigation';
import { FiScissors, FiMessageSquare, FiMapPin } from 'react-icons/fi';

import ImageContainer from '@/components/ImageContainer';
import Logo from '@components/Logo';
import LinkToBack from '@/components/LinkToBack';
import { Form } from '@/components/Form';
import Button from '@/components/Button';

import image from '@public/gobarber_image004.svg';

import { FormHandler } from '../../../lib/FormHandler';

import useHandleUserHook from '@/hooks/useHandleUserHook';
import useHandleImagesHook from '@/hooks/useHandleImagesHook';
import {
  SigninBarberSchema,
  SigninBarberType,
} from '../../../validations/SigninBarberForm';
import { SigninBarberFormHandler } from '../../../functions/SigninBarberFormHandler';

export default function SigninBarber() {
  const Router = useRouter();

  const { register, handleSubmit, errors } = FormHandler(SigninBarberSchema);

  const {
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { file, setFile, fileUrl, setFileUrl, handleChange } =
    useHandleImagesHook();

  const submitHandler = async (data: SigninBarberType) => {
    await SigninBarberFormHandler({
      name: data.name,
      location: data.location,
      description: data.description,
      isOpenAtNight: isOpenAtNight,
      isOpenOnWeekends: isOpenOnWeekends,
      file: file,
    });

    Router.push('../../dashboard/barber');
  };

  return (
    <main className='flex'>
      <ImageContainer src={image} alt='Foto de barbeiro' />

      <section className='grid w-screen items-center justify-center py-8'>
        <Logo />

        <Form.Root onSubmit={handleSubmit(submitHandler)}>
          <Form.Textarea
            {...register('location')}
            placeholder='Selecione o lugar no mapa'
            iconName={FiMapPin}
          />

          <Form.Input
            {...register('name')}
            iconName={FiScissors}
            type='text'
            placeholder='Nome da barbearia'
          />

          <Form.Textarea
            {...register('description')}
            placeholder='Descrição'
            iconName={FiMessageSquare}
          />

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
