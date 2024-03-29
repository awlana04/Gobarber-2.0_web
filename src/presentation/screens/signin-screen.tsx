import ContentTemplate from '../templates/content-template';

import { AvatarType } from '@interfaces/avatar-type';
import { RadioType } from '@interfaces/radio-type';
import { ToastType } from '@interfaces/toast-type';
import { InputType } from '@interfaces/input-type';

import NameInputFragment from '../fragments/name-input-fragment';
import EmailInputFragment from '../fragments/email-input-fragment';
import PasswordInputFragment from '../fragments/password-input-fragment';
import ConfirmPasswordInputFragment from '../fragments/confirm-password-input-fragment';

import BackToLogon from '@components/atoms/back-to-logon';
import Button from '@components/atoms/button';

import { Form } from '@components/molecules/form';

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
    <ContentTemplate position='left' src={image} alt='Foto da barbearia'>
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

        <NameInputFragment
          nameInput={nameInput}
          nameToast={nameToast}
          icon='user'
        />
        <EmailInputFragment emailInput={emailInput} emailToast={emailToast} />
        <PasswordInputFragment
          passwordInput={passwordInput}
          passwordToast={passwordToast}
        />
        <ConfirmPasswordInputFragment
          confirmPasswordInput={confirmPasswordInput}
          confirmPasswordToast={confirmPasswordToast}
        />

        <Button type='submit'>Cadastrar</Button>
      </Form.Root>

      <BackToLogon />
    </ContentTemplate>
  );
}
