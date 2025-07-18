import Link from 'next/link';

import {
  EmailInputPropsMappedType,
  PasswordInputPropsMappedType,
} from '@/presentation/types/input-props-mapped-types';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';
import ButtonDisabledType from '@/presentation/types/button-disabled-type';

import ContentTemplate from '@/templates/content-template';

import Button from '@/atoms/button';

import FooterPageLink from '@/molecules/footer-page-link';
import { Form } from '@/molecules/form';

import EmailInputFragment from '@/fragments/email-input-fragment';
import PasswordInputFragment from '@/fragments/password-input-fragment';

import image from '@/public/gobarber_image002.svg';

import translate from '@/shared/utils/translate';

type LogonScreenProps = EmailInputPropsMappedType &
  PasswordInputPropsMappedType &
  SubmitHandlerType &
  ButtonDisabledType;

export default function LogonScreen(props: LogonScreenProps) {
  return (
    <ContentTemplate
      position='right'
      src={image}
      alt={translate('Barber shop image')}
    >
      <h1 className='my-6 mt-10 text-2xl font-medium max-sm:mt-4'>
        {translate('Your Logon')}
      </h1>

      <Form.Root submitHandler={props.submitHandler}>
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

        <Button type='submit' isButtonDisabled={props.isButtonDisabled}>
          {translate('Enter')}
        </Button>
      </Form.Root>

      <Link href='./forgot-password' className='my-4 mb-6 hover:underline'>
        {translate('Forgot my password')}
      </Link>

      <FooterPageLink type='create-account' />
    </ContentTemplate>
  );
}
