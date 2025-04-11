import ContentTemplate from '@/templates/content-template';

import BackToLogon from '@/atoms/back-to-logon';
import Button from '@/atoms/button';

import { Form } from '@/molecules/form';

import NameInputFragment from '@/fragments/name-input-fragment';
import EmailInputFragment from '@/fragments/email-input-fragment';
import PasswordInputFragment from '@/fragments/password-input-fragment';
import ConfirmPasswordInputFragment from '@/fragments/confirm-password-input-fragment';

import { AvatarInputPropsType } from '@/presentation/types/avatar-input-props-type';
import { RadioButtonPropsType } from '@/presentation/types/radio-button-props-type';
import { NameInputPropsType } from '@/presentation/types/name-input-props-type';
import { EmailInputPropsType } from '@/presentation/types/email-input-props-type';
import { PasswordInputPropsType } from '@/presentation/types/password-input-props-type';
import { ConfirmPasswordInputPropsType } from '@/presentation/types/confirm-password-input-props-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import image from '@/public/gobarber_image003.svg';

type SigninPropsType = AvatarInputPropsType &
  RadioButtonPropsType &
  NameInputPropsType &
  EmailInputPropsType &
  PasswordInputPropsType &
  ConfirmPasswordInputPropsType &
  SubmitHandlerType;

export default function SigninScreen(props: SigninPropsType) {
  return (
    <ContentTemplate position='left' src={image} alt='Foto da barbearia'>
      <Form.Root submitHandler={props.submitHandler}>
        <Form.Avatar
          file={props.file}
          fileUrl={props.fileUrl}
          handleChange={props.handleChange}
          handleRemove={props.handleRemove}
        />

        <Form.Radio
          isBarber={false}
          isBarberSelected={props.isBarberSelected}
          setIsBarberSelected={props.setIsBarberSelected}
        />

        <NameInputFragment
          icon='user'
          placeholder='Nome'
          nameRef={props.nameRef}
          nameValue={props.nameValue}
          nameErrored={props.nameErrored}
          nameFilled={props.nameFilled}
          handleNameFilled={props.handleNameFilled}
        />
        <EmailInputFragment
          emailRef={props.emailRef}
          emailValue={props.emailValue}
          emailErrored={props.emailErrored}
          emailFilled={props.emailFilled}
          handleEmailFilled={props.handleEmailFilled}
        />
        <PasswordInputFragment
          passwordRef={props.passwordRef}
          passwordErrored={props.passwordErrored}
          passwordFilled={props.passwordFilled}
          handlePasswordFilled={props.handlePasswordFilled}
        />
        <ConfirmPasswordInputFragment
          confirmPasswordRef={props.confirmPasswordRef}
          confirmPasswordErrored={props.confirmPasswordErrored}
          confirmPasswordFilled={props.confirmPasswordFilled}
          handleConfirmPasswordFilled={props.handleConfirmPasswordFilled}
        />

        <Button type='submit' isDisabled={false}>
          Cadastrar
        </Button>
      </Form.Root>

      <BackToLogon language='pt-br' />
    </ContentTemplate>
  );
}
