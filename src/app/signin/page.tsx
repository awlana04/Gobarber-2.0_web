'use client';

import { useRouter } from 'next/navigation';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import Logo from '@/components/Logo';
import ImageContainer from '@/components/ImageContainer';
import LinkToBack from '@/components/LinkToBack';
import { Form } from '@/components/Form/index';
import Button from '@/components/Button';

import image from '@public/gobarber_image003.svg';

import { FormHandler } from '@/lib/FormHandler';

import useHandleAvatarHook from '@hooks/useHandleAvatarHook';
import useHandleUserHook from '@/hooks/useHandleUserHook';

import { SigninFormSchema, SigninFormType } from '../../validations/SigninForm';
import { SigninFormHandler } from '../../functions/SigninFormHandler';

export default function Signin() {
  const Router = useRouter();

  const { register, handleSubmit, errors } = FormHandler(SigninFormSchema);

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isBarberSelected, setIsBarberSelected } = useHandleUserHook();

  const submitHandler = async (data: SigninFormType) => {
    await SigninFormHandler({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      file: file,
    });

    isBarberSelected === true
      ? Router.push('../dashboard/client')
      : Router.push('./signin/barber');
  };

  return (
    <main className='flex'>
      <ImageContainer src={image} alt='Foto da barbearia' />

      <section className='flex w-screen flex-col items-center justify-center'>
        <Logo />

        <Form.Root onSubmit={handleSubmit(submitHandler)}>
          <Form.Avatar
            file={file}
            fileUrl={fileUrl}
            handleChange={handleChange}
            handleRemove={handleRemove}
          />

          <Form.Radio
            isBarberSelected={isBarberSelected}
            setIsBarberSelected={setIsBarberSelected}
          />

          <Form.Input
            {...register('name')}
            iconName={FiUser}
            type='text'
            placeholder='Nome'
          />

          <Form.Input
            {...register('email')}
            iconName={FiMail}
            type='email'
            placeholder='E-mail'
          />

          <Form.Input
            {...register('password')}
            iconName={FiLock}
            type='password'
            placeholder='Senha'
          />

          <Form.Input
            {...register('confirmPassword')}
            iconName={FiLock}
            type='password'
            placeholder='Confirmar senha'
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
