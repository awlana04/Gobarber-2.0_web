import { FiLock } from 'react-icons/fi';

import { Form } from '@/molecules/form';
import { Ref } from 'react';

type PasswordInputFragmentType = {
  passwordErrored: boolean;
  passwordRef: Ref<HTMLInputElement>;
};

export default function PasswordInputFragment({
  passwordErrored,
  passwordRef,
}: PasswordInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={FiLock}
        type='password'
        name='password'
        ref={passwordRef}
        placeholder='Senha'
        errored={passwordErrored}
      />
    </>
  );
}
