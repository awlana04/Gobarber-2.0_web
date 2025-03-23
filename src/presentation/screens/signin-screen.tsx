import ContentTemplate from '@/templates/content-template';

import { AvatarType } from '@/presentation/interfaces/avatar-type';
import { RadioType } from '@/presentation/interfaces/radio-type';

import NameInputFragment from '@/fragments/name-input-fragment';
import EmailInputFragment from '@/fragments/email-input-fragment';
import PasswordInputFragment from '@/fragments/password-input-fragment';
import ConfirmPasswordInputFragment from '@/fragments/confirm-password-input-fragment';

import BackToLogon from '@/atoms/back-to-logon';
import Button from '@/atoms/button';

import { Form } from '@/molecules/form';

import image from '@/public/gobarber_image003.svg';

type SigninProps = {
  submitHandler: (data: any) => void;
  avatar: AvatarType;
  radio: RadioType;
  confirmPasswordErrored: boolean;
  nameErrored: boolean;
  nameValue: string;
  emailErrored: boolean;
  emailValue: string;
  passwordErrored: boolean;
};

export default function SigninScreen({
  submitHandler,
  avatar,
  radio,
  confirmPasswordErrored,
  nameValue,
  emailValue,
  nameErrored,
  emailErrored,
  passwordErrored,
}: SigninProps) {
  return (
    <ContentTemplate position='left' src={image} alt='Foto da barbearia'>
      <Form.Root submitHandler={submitHandler}>
        <Form.Avatar
          file={avatar.file}
          fileUrl={avatar.fileUrl}
          handleChange={avatar.handleChange}
          handleRemove={avatar.handleRemove}
        />

        <Form.Radio
          isBarber={false}
          isBarberSelected={radio.isBarberSelected}
          setIsBarberSelected={radio.setIsBarberSelected}
        />

        <NameInputFragment
          icon='user'
          nameErrored={nameErrored}
          value={nameValue}
        />
        <EmailInputFragment emailErrored={emailErrored} value={emailValue} />
        <PasswordInputFragment passwordErrored={passwordErrored} />
        <ConfirmPasswordInputFragment errored={confirmPasswordErrored} />

        <Button type='submit' isDisabled={false}>
          Cadastrar
        </Button>
      </Form.Root>

      <BackToLogon />
    </ContentTemplate>
  );
}
