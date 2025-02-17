import { FiUser, FiScissors } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type NameInputFragmentType = {
  icon: 'user' | 'barber';
};

export default function NameInputFragment({ icon }: NameInputFragmentType) {
  return (
    <>
      <Form.Input
        iconName={icon === 'user' ? FiUser : FiScissors}
        type='text'
        name='name'
        placeholder='Nome'
        // errored={nameInput.errored}
      />
    </>
  );
}
