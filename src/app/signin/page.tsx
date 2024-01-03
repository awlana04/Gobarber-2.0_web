'use client';

import { useRouter } from 'next/navigation';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import ContentWrapper from '@/components/atoms/content-wrapper';
import ContentContainer from '@/components/atoms/content-container';
import AsideImage from '@/components/atoms/aside-image';
import Logo from '@/components/atoms/logo';
import Toast from '@components/atoms/toast';
import BackToLogon from '@/components/atoms/back-to-logon';
import Button from '@/components/atoms/button';

import { Form } from '@/components/molecules/form';

import image from '@public/gobarber_image003.svg';

import useHandleAvatarHook from '@hooks/use-handle-avatar-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import { FormHandler } from '@libs/form-handler';

import { SigninFormSchema, SigninFormType } from '@validations/signin-form';

import { SigninFormHandler } from '@handlers/signin-form-handler';

export default function Signin() {
  const Router = useRouter();

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isBarberSelected, setIsBarberSelected } = useHandleUserHook();

  const { register, handleSubmit, errors } = FormHandler(SigninFormSchema);

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
    <ContentWrapper>
      <AsideImage src={image} alt='Foto da barbearia' />

      <ContentContainer>
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
            errored={!!errors.name}
          />

          {errors.name && (
            <Toast
              id={errors.name.message!}
              title='Nome invalido'
              description={errors.name.message!}
            />
          )}

          <Form.Input
            {...register('email')}
            iconName={FiMail}
            type='email'
            placeholder='E-mail'
            errored={!!errors.email}
          />

          {errors.email && (
            <Toast
              id={errors.email.message!}
              title='E-mail invalido'
              description={errors.email.message!}
            />
          )}

          <Form.Input
            {...register('password')}
            iconName={FiLock}
            type='password'
            placeholder='Senha'
            errored={!!errors.password}
          />

          {errors.password && (
            <Toast
              id={errors.password.message!}
              title='Senha invalido'
              description={errors.password.message!}
            />
          )}

          <Form.Input
            {...register('confirmPassword')}
            iconName={FiLock}
            type='password'
            placeholder='Confirmar senha'
            errored={!!errors.confirmPassword}
          />

          {errors.confirmPassword && (
            <Toast
              id={errors.confirmPassword.message!}
              title='Senha não combina'
              description={errors.confirmPassword.message!}
            />
          )}

          <Button type='submit'>Cadastrar</Button>
        </Form.Root>

        <BackToLogon />
      </ContentContainer>
    </ContentWrapper>
  );
}
