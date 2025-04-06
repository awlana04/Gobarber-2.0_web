import { FiMail } from 'react-icons/fi';

import { EmailInputPropsType } from '@/presentation/types/email-input-props-type';

import { Form } from '@/molecules/form';

export default function EmailInputFragment({
  emailErrored,
  emailRef,
  emailValue,
}: EmailInputPropsType) {
  return (
    <Form.Input
      value={emailValue}
      iconName={FiMail}
      type='email'
      ref={emailRef}
      placeholder='E-mail'
      name='email'
      errored={emailErrored}
    />
  );
}
