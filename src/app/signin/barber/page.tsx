'use client';

import { useRouter } from 'next/navigation';
import { FiScissors, FiMessageSquare, FiMapPin } from 'react-icons/fi';

import AsideImage from '@/components/atoms/aside-image';
import Logo from '@components/atoms/logo';
import BackToLogon from '@/components/atoms/back-to-logon';
import Button from '@/components/atoms/button';

import { Form } from '@/components/molecules/form';

import image from '@public/gobarber_image004.svg';

import useHandleImagesHook from '@/hooks/use-handle-images-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import { FormHandler } from '@libs/form-handler';

import {
  SigninBarberSchema,
  SigninBarberType,
} from '@validations/signin-barber-form';

import { SigninBarberFormHandler } from '@handlers/signin-barber-form-handler';

export default function SigninBarber() {
  const Router = useRouter();

  const {
    isOpenAtNight,
    setIsOpenAtNight,
    isOpenOnWeekends,
    setIsOpenOnWeekends,
  } = useHandleUserHook();

  const { file, setFile, fileUrl, setFileUrl, handleChange } =
    useHandleImagesHook();

  const { register, handleSubmit, errors } = FormHandler(SigninBarberSchema);

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
      <AsideImage src={image} alt='Foto de barbeiro' />

      <section className='grid w-screen items-center justify-center py-8'>
        <Logo />

        <Form.Root onSubmit={handleSubmit(submitHandler)}>
          <Form.Textarea
            {...register('location')}
            placeholder='Selecione o lugar no mapa'
            iconName={FiMapPin}
            errored={!!errors.location}
          />

          <Form.Input
            {...register('name')}
            iconName={FiScissors}
            type='text'
            placeholder='Nome da barbearia'
            errored={!!errors.name}
          />

          <Form.Textarea
            {...register('description')}
            placeholder='Descrição'
            iconName={FiMessageSquare}
            errored={!!errors.description}
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

          <Button type='submit'>Cadastrar</Button>
        </Form.Root>

        <BackToLogon />
      </section>
    </main>
  );
}
