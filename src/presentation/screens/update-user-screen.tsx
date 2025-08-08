'use client';

import DashboardTemplate from '../templates/dashboard-template';

import Button from '@/atoms/button';

import { Form } from '@/molecules/form';

import ButtonDisabledType from '@/presentation/types/button-disabled-type';
import { HeaderPropsType } from '@/presentation/types/header-props-type';
import {
  EmailInputPropsMappedType,
  NameInputPropsMappedType,
  PasswordInputPropsMappedType,
} from '@/presentation/types/input-props-mapped-types';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';
import { BarberDataType } from '@/infra/types/data-type';

import translate from '@/shared/utils/translate';
import NameInputFragment from '../fragments/name-input-fragment';
import EmailInputFragment from '../fragments/email-input-fragment';
import PasswordInputFragment from '../fragments/password-input-fragment';

type EmailValueType = Pick<EmailInputPropsMappedType, 'emailValue'>;
type NameValueType = Pick<NameInputPropsMappedType, 'nameValue'>;

type UpdateBarberScreenPropsType = HeaderPropsType &
  EmailValueType &
  NameValueType &
  PasswordInputPropsMappedType &
  ButtonDisabledType &
  SubmitHandlerType;

export default function UpdateUserScreen(props: UpdateBarberScreenPropsType) {
  return (
    <DashboardTemplate headerType='profile' {...props}>
      <section className='mt-40 flex flex-row items-center justify-center pb-20'>
        <Form.Root submitHandler={props.submitHandler}>
          <h3>Meu perfil</h3>
          <NameInputFragment
            handleNameFilled={() => {}}
            icon='user'
            nameErrored={false}
            nameFilled={false}
            nameRef={null}
            nameValue={props.nameValue}
            placeholder={props.nameValue}
          />
          <EmailInputFragment
            emailErrored={false}
            emailFilled={false}
            emailRef={null}
            emailValue={props.emailValue}
            handleEmailFilled={() => {}}
          />

          <div className='mt-10'>
            <PasswordInputFragment
              handlePasswordFilled={props.handlePasswordFilled}
              passwordErrored={props.passwordErrored}
              passwordFilled={props.passwordFilled}
              passwordRef={props.passwordRef}
              passwordValue={props.passwordValue}
            />

            <PasswordInputFragment
              handlePasswordFilled={props.handlePasswordFilled}
              passwordErrored={props.passwordErrored}
              passwordFilled={props.passwordFilled}
              passwordRef={props.passwordRef}
              passwordValue={props.passwordValue}
            />

            <PasswordInputFragment
              handlePasswordFilled={props.handlePasswordFilled}
              passwordErrored={props.passwordErrored}
              passwordFilled={props.passwordFilled}
              passwordRef={props.passwordRef}
              passwordValue={props.passwordValue}
            />

            <Button type='submit' isButtonDisabled={props.isButtonDisabled}>
              {translate('Register')}
            </Button>
          </div>
        </Form.Root>
      </section>
    </DashboardTemplate>
  );
}
