import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import ContentWrapper from '@components/atoms/content-wrapper';
import ContentContainer from '@components/atoms/content-container';
import AsideImage from '@components/atoms/aside-image';
import Logo from '@components/atoms/logo';
import Toast from '@components/atoms/toast';
import BackToLogon from '@components/atoms/back-to-logon';
import Button from '@components/atoms/button';

import { Form } from '@components/molecules/form';

import { AvatarType } from '@interfaces/avatar-type';
import { RadioType } from '@interfaces/radio-type';
import { ToastType } from '@interfaces/toast-type';
import { InputType } from '@interfaces/input-type';

import image from '@public/gobarber_image003.svg';

type SigninProps = {
  submitHandler(data: any): void;
  avatar: AvatarType;
  radio: RadioType;
  nameInput: InputType;
  nameToast?: ToastType;
  emailInput: InputType;
  emailToast?: ToastType;
  passwordInput: InputType;
  passwordToast?: ToastType;
  confirmPasswordInput: InputType;
  confirmPasswordToast?: ToastType;
};

export default function SigninScreen({
  submitHandler,
  avatar,
  radio,
  nameInput,
  nameToast,
  emailInput,
  emailToast,
  passwordInput,
  passwordToast,
  confirmPasswordInput,
  confirmPasswordToast,
}: SigninProps) {
  return (
    <ContentWrapper>
      <AsideImage src={image} alt='Foto da barbearia' />

      <ContentContainer>
        <Logo />

        <Form.Root onSubmit={submitHandler}>
          <Form.Avatar
            file={avatar.file}
            fileUrl={avatar.fileUrl}
            handleChange={avatar.handleChange}
            handleRemove={avatar.handleRemove}
          />

          <Form.Radio
            isBarberSelected={radio.isBarberSelected}
            setIsBarberSelected={radio.setIsBarberSelected}
          />

          <Form.Input
            {...nameInput.submitField}
            iconName={FiUser}
            type='text'
            placeholder='Nome'
            errored={nameInput.errored}
          />

          {nameToast?.conditional && (
            <Toast
              id={nameToast.id!}
              title='Nome invalido'
              description={nameToast.description!}
            />
          )}

          <Form.Input
            {...emailInput.submitField}
            iconName={FiMail}
            type='email'
            placeholder='E-mail'
            errored={emailInput.errored}
          />

          {emailToast?.conditional && (
            <Toast
              id={emailToast.id!}
              title='E-mail invalido'
              description={emailToast.description!}
            />
          )}

          <Form.Input
            {...passwordInput.submitField}
            iconName={FiLock}
            type='password'
            placeholder='Senha'
            errored={passwordInput.errored}
          />

          {passwordToast?.conditional && (
            <Toast
              id={passwordToast.id!}
              title='Senha invalido'
              description={passwordToast.description!}
            />
          )}

          <Form.Input
            {...confirmPasswordInput.submitField}
            iconName={FiLock}
            type='password'
            placeholder='Confirmar senha'
            errored={confirmPasswordInput.errored}
          />

          {confirmPasswordToast?.conditional && (
            <Toast
              id={confirmPasswordToast.id!}
              title='Senha não combina'
              description={confirmPasswordToast.description!}
            />
          )}

          <Button type='submit'>Cadastrar</Button>
        </Form.Root>

        <BackToLogon />
      </ContentContainer>
    </ContentWrapper>
  );
}
