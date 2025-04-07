import { FiUser, FiScissors } from 'react-icons/fi';

import { NameInputPropsType } from '../types/name-input-props-type';

import { Form } from '@/molecules/form';

type NameInputFragmentType = NameInputPropsType & {
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
