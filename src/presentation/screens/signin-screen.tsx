import {
  NameInputPropsMappedType,
  EmailInputPropsMappedType,
  PasswordInputPropsMappedType,
  ConfirmPasswordInputPropsMappedType,
} from '@/presentation/types/input-props-mapped-types';
import { AvatarInputPropsType } from '@/presentation/types/avatar-input-props-type';
import { RadioButtonPropsType } from '@/presentation/types/radio-button-props-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';
import ButtonDisabledType from '@/presentation/types/button-disabled-type';

import ContentTemplate from '@/templates/content-template';

import Button from '@/atoms/button';

import FooterPageLink from '@/molecules/footer-page-link';
import { Form } from '@/molecules/form';

import NameInputFragment from '@/fragments/name-input-fragment';
import EmailInputFragment from '@/fragments/email-input-fragment';
import PasswordInputFragment from '@/fragments/password-input-fragment';
import ConfirmPasswordInputFragment from '@/fragments/confirm-password-input-fragment';

import image from '@/public/gobarber_image003.svg';

import translate from '@/shared/utils/translate';

type SigninPropsType = AvatarInputPropsType &
  RadioButtonPropsType &
  NameInputPropsMappedType &
  EmailInputPropsMappedType &
  PasswordInputPropsMappedType &
  ConfirmPasswordInputPropsMappedType &
  ButtonDisabledType &
  SubmitHandlerType;

export default function SigninScreen(props: SigninPropsType) {
  return (
    <ContentTemplate
      position='left'
      src={image}
      alt={translate('Barber shop image')}
    >
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
          placeholder={translate('Name')}
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

        <Button type='submit' isButtonDisabled={props.isButtonDisabled}>
          {translate('Register')}
        </Button>
      </Form.Root>

      <FooterPageLink type='back-to-logon' />
    </ContentTemplate>
  );
}
