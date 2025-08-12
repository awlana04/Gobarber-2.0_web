'use client';

import DashboardTemplate from '../templates/dashboard-template';

import Button from '@/atoms/button';

import { Form } from '@/molecules/form';

import ButtonDisabledType from '@/presentation/types/button-disabled-type';
import { HeaderPropsType } from '@/presentation/types/header-props-type';
import {
  ActualPasswordInputPropsMappedType,
  ConfirmPasswordInputPropsMappedType,
  PasswordInputPropsMappedType,
} from '@/presentation/types/input-props-mapped-types';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import translate from '@/shared/utils/translate';

import PasswordInputFragment from '../fragments/password-input-fragment';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import ConfirmPasswordInputFragment from '../fragments/confirm-password-input-fragment';
import { AvatarInputPropsType } from '../types/avatar-input-props-type';

type UpdateBarberScreenPropsType = HeaderPropsType &
  PasswordInputPropsMappedType &
  ButtonDisabledType &
  SubmitHandlerType &
  ActualPasswordInputPropsMappedType &
  ConfirmPasswordInputPropsMappedType &
  AvatarInputPropsType & {
    name: string;
    email: string;
  };

export default function UpdateUserScreen(props: UpdateBarberScreenPropsType) {
  return (
    <DashboardTemplate headerType='update' {...props}>
      <section className='mt-40 flex flex-row items-center justify-center pb-20'>
        <Form.Root submitHandler={props.submitHandler}>
          <Form.Avatar {...props} large={true} />

          <h3 className='text-2xl font-medium'>Meu perfil</h3>

          <div className='bg-input mt-4 flex h-14 w-96 flex-row items-center rounded-2xl py-2 text-white'>
            <FiUser className='mr-2 ml-7' />
            <p>{props.name}</p>
          </div>

          <div className='bg-input mt-4 flex h-14 w-96 flex-row items-center rounded-2xl py-2 text-white'>
            <FiMail className='mr-2 ml-7' />
            <p>{props.email}</p>
          </div>

          <div className='mt-10'>
            <Form.Input
              ref={props.actualPasswordRef}
              iconName={FiLock}
              type='password'
              name='actualPassword'
              placeholder='Senha atual'
              errored={props.actualPasswordErrored}
              filled={props.actualPasswordFilled}
              handleFilled={props.handleActualPasswordFilled}
            />

            <PasswordInputFragment {...props} />

            <ConfirmPasswordInputFragment {...props} />

            <Button type='submit' isButtonDisabled={props.isButtonDisabled}>
              {/* {translate('Register')} */}
              Atualizar
            </Button>
          </div>
        </Form.Root>
      </section>
    </DashboardTemplate>
  );
}
