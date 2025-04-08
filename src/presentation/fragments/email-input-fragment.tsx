import { FiMail } from 'react-icons/fi';

import { EmailInputPropsType } from '@/presentation/types/email-input-props-type';

import { Form } from '@/molecules/form';

export default function EmailInputFragment(props: EmailInputPropsType) {
  return (
    <Form.Input
      value={props.emailValue}
      iconName={FiMail}
      type='email'
      ref={props.emailRef}
      placeholder='E-mail'
      name='email'
      errored={props.emailErrored}
      filled={props.emailFilled}
      handleFilled={props.handleEmailFilled}
    />
  );
}
