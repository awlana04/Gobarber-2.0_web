import { FiLock } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type ConfirmPasswordInputFragmentType = {
  errored: boolean;
};

export default function ConfirmPasswordInputFragment({
  errored,
}: ConfirmPasswordInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={FiLock}
        type='password'
        name='confirmPassword'
        placeholder='Confirmar senha'
        errored={errored}
      />
    </>
  );
}
