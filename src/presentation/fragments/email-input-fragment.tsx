import { FiMail } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

export default function EmailInputFragment() {
  return (
    <>
      <Form.Input
        iconName={FiMail}
        type='email'
        placeholder='E-mail'
        name='email'
      />
    </>
  );
}
