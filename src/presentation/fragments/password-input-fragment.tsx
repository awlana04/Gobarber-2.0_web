import { FiLock } from 'react-icons/fi';

import { PasswordInputPropsType } from '@/presentation/types/password-input-props-type';

import { Form } from '@/molecules/form';

export default function PasswordInputFragment({
  passwordErrored,
  passwordRef,
}: PasswordInputPropsType) {
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
