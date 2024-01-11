import { FiLock } from 'react-icons/fi';

import { InputType } from '../interfaces/input-type';
import { ToastType } from '../interfaces/toast-type';

import Toast from '@components/atoms/toast';

import { Form } from '@components/molecules/form';

export type PasswordInputFragmentType = {
  passwordInput: InputType;
  passwordToast?: ToastType;
};

export default function PasswordInputFragment({
  passwordInput,
  passwordToast,
}: PasswordInputFragmentType) {
  return (
    <>
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
          title='Senha invalida'
          description={passwordToast.description!}
        />
      )}
    </>
  );
}
