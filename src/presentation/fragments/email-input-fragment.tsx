import { FiMail } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type EmailInputFragmentType = {
  errored: boolean;
};

export default function EmailInputFragment({
  errored,
}: EmailInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={FiMail}
        type='email'
        placeholder='E-mail'
        name='email'
        errored={errored}
      />
    </>
  );
}
