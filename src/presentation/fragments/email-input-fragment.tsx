import { FiMail } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type EmailInputFragmentType = {
  emailErrored: boolean;
};

export default function EmailInputFragment({
  emailErrored,
}: EmailInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={FiMail}
        type='email'
        placeholder='E-mail'
        name='email'
        errored={emailErrored}
      />
    </>
  );
}
