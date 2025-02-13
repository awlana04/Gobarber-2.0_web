import { FiMail } from 'react-icons/fi';

import { ToastType } from '../interfaces/toast-type';
import { InputType } from '../interfaces/input-type';

import Toast from '@components/atoms/toast';

import { Form } from '@components/molecules/form';

export type EmailInputFragmentType = {
  emailInput: InputType;
  emailToast?: ToastType;
};

export default function EmailInputFragment({
  emailInput,
  emailToast,
}: EmailInputFragmentType) {
  return (
    <>
      <Form.Input
        {...emailInput.submitField}
        onChange={emailInput.submitField}
        iconName={FiMail}
        type='email'
        placeholder='E-mail'
        errored={emailInput.errored}
        // onChange={(data) => console.log(data)}
      />

      {emailToast?.conditional && (
        <Toast
          id={emailToast.id!}
          title='E-mail invalido'
          description={emailToast.description!}
        />
      )}
    </>
  );
}
