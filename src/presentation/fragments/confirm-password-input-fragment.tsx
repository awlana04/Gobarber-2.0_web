import { FiLock } from 'react-icons/fi';

import { InputType } from '../interfaces/input-type';
import { ToastType } from '../interfaces/toast-type';

import Toast from '@components/atoms/toast';

import { Form } from '@components/molecules/form';

type ConfirmPasswordInputFragmentType = {
  confirmPasswordInput: InputType;
  confirmPasswordToast?: ToastType;
};

export default function ConfirmPasswordInputFragment({
  confirmPasswordInput,
  confirmPasswordToast,
}: ConfirmPasswordInputFragmentType) {
  return (
    <>
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
    </>
  );
}
