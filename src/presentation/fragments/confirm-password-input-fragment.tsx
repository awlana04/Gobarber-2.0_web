import { FiLock } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type ConfirmPasswordInputFragmentType = {
  errored: boolean;
  value: string;
};

export default function ConfirmPasswordInputFragment({
  errored,
  value,
}: ConfirmPasswordInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={FiLock}
        value={value}
        type='password'
        name='confirmPassword'
        placeholder='Confirmar senha'
        errored={errored}
      />
    </>
  );
}
