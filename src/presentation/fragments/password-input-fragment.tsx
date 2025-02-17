import { FiLock } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

export default function PasswordInputFragment() {
  return (
    <>
      <Form.Input
        iconName={FiLock}
        type='password'
        name='password'
        placeholder='Senha'
      />
    </>
  );
}
