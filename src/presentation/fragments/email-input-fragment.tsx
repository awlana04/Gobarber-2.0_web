import { FiMail } from 'react-icons/fi';

import { Form } from '@/molecules/form';

type EmailInputFragmentType = {
  emailErrored: boolean;
  value: string;
};

export default function EmailInputFragment({
  emailErrored,
  value,
}: EmailInputFragmentType) {
  return (
    <>
      <Form.Input
        value={value}
        iconName={FiMail}
        type='email'
        placeholder='E-mail'
        name='email'
        errored={emailErrored}
      />
    </>
  );
}
