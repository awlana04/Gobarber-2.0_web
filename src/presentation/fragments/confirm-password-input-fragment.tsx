import { FiLock } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

export default function ConfirmPasswordInputFragment() {
  return (
    <>
      <Form.Input
        iconName={FiLock}
        type='password'
        name='confirmPassword'
        placeholder='Confirmar senha'
        // errored={confirmPasswordInput.errored}
      />
    </>
  );
}
