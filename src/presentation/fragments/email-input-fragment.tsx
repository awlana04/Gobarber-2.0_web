import { FiMail } from 'react-icons/fi';

import { Form } from '@/molecules/form';
import { Ref } from 'react';

type EmailInputFragmentType = {
  emailErrored: boolean;
  emailRef: Ref<HTMLInputElement>;
  value: string;
};

export default function EmailInputFragment({
  emailErrored,
  emailRef,
  value,
}: EmailInputFragmentType) {
  return (
    <>
      <Form.Input
        value={value}
        iconName={FiMail}
        type='email'
        ref={emailRef}
        placeholder='E-mail'
        name='email'
        errored={emailErrored}
      />
    </>
  );
}
