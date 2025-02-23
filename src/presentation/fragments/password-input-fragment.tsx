import { FiLock } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type PasswordInputFragmentType = {
  errored: boolean;
};

export default function PasswordInputFragment({
  errored,
}: PasswordInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={FiLock}
        type='password'
        name='password'
        placeholder='Senha'
        errored={errored}
      />
    </>
  );
}
