import { FiUser, FiScissors } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type NameInputFragmentType = {
  icon: 'user' | 'barber';
  errored: boolean;
};

export default function NameInputFragment({
  icon,
  errored,
}: NameInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={icon === 'user' ? FiUser : FiScissors}
        type='text'
        name='name'
        placeholder='Nome'
        errored={errored}
      />
    </>
  );
}
