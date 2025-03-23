import { FiLock } from 'react-icons/fi';

import { Form } from '@/molecules/form';

type PasswordInputFragmentType = {
  passwordErrored: boolean;
};

export default function PasswordInputFragment({
  passwordErrored,
}: PasswordInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={FiLock}
        type='password'
        name='password'
        placeholder='Senha'
        errored={passwordErrored}
      />
    </>
  );
}
