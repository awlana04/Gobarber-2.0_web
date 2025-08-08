import { FiUser, FiScissors } from 'react-icons/fi';

import { NameInputPropsMappedType } from '@/presentation/types/input-props-mapped-types';

import { Form } from '@/molecules/form';

type NameInputFragmentType = NameInputPropsMappedType & {
  icon: 'user' | 'barber';
  placeholder: string;
};

export default function NameInputFragment(props: NameInputFragmentType) {
  return (
    <Form.Input
      value={props.nameValue}
      iconName={props.icon === 'user' ? FiUser : FiScissors}
      type='text'
      name='name'
      placeholder={props.placeholder}
      errored={props.nameErrored}
      filled={props.nameFilled}
      ref={props.nameRef}
      handleFilled={props.handleNameFilled}
    />
  );
}
