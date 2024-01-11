import { FiUser, FiScissors } from 'react-icons/fi';

import { InputType } from '../interfaces/input-type';
import { ToastType } from '../interfaces/toast-type';

import Toast from '@components/atoms/toast';

import { Form } from '@components/molecules/form';

type NameInputFragmentType = {
  nameInput: InputType;
  nameToast?: ToastType;
  icon: 'user' | 'barber';
};

export default function NameInputFragment({
  nameInput,
  nameToast,
  icon,
}: NameInputFragmentType) {
  return (
    <>
      <Form.Input
        {...nameInput.submitField}
        iconName={icon === 'user' ? FiUser : FiScissors}
        type='text'
        placeholder='Nome'
        errored={nameInput.errored}
      />

      {nameToast?.conditional && (
        <Toast
          id={nameToast.id!}
          title='Nome invalido'
          description={nameToast.description!}
        />
      )}
    </>
  );
}
