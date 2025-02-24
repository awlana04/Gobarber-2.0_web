import { FiUser, FiScissors } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type NameInputFragmentType = {
  icon: 'user' | 'barber';
  nameErrored: boolean;
};

export default function NameInputFragment({
  icon,
  nameErrored,
}: NameInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={icon === 'user' ? FiUser : FiScissors}
        type='text'
        name='name'
        placeholder='Nome'
        errored={nameErrored}
      />
    </>
  );
}
