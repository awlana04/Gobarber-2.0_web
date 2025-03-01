import { FiUser, FiScissors } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type NameInputFragmentType = {
  icon: 'user' | 'barber';
  nameErrored: boolean;
  value: string;
};

export default function NameInputFragment({
  icon,
  nameErrored,
  value,
}: NameInputFragmentType) {
  return (
    <>
      <Form.Input
        value={value}
        iconName={icon === 'user' ? FiUser : FiScissors}
        type='text'
        name='name'
        placeholder='Nome'
        errored={nameErrored}
      />
    </>
  );
}
