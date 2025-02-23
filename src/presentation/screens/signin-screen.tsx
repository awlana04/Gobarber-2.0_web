import ContentTemplate from '../templates/content-template';

import { AvatarType } from '@interfaces/avatar-type';
import { RadioType } from '@interfaces/radio-type';

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
  isErrored: boolean;
};

export default function SigninScreen({
  submitHandler,
  avatar,
  radio,
  isErrored,
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

        <NameInputFragment icon='user' errored={isErrored} />
        <EmailInputFragment errored={isErrored} />
        <PasswordInputFragment errored={isErrored} />
        <ConfirmPasswordInputFragment errored={isErrored} />

        <Button type='submit'>Cadastrar</Button>
      </Form.Root>

      <BackToLogon />
    </ContentTemplate>
  );
}
