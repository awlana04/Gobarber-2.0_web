import { FiLock } from 'react-icons/fi';

import { ConfirmPasswordInputPropsType } from '@/presentation/types/confirm-password-input-props-type';

import { Form } from '@/molecules/form';

export default function ConfirmPasswordInputFragment(
  props: ConfirmPasswordInputPropsType
) {
  return (
    <Form.Input
      iconName={FiLock}
      type='password'
      name='confirmPassword'
      placeholder='Confirmar senha'
      errored={props.confirmPasswordErrored}
      filled={props.confirmPasswordFilled}
      ref={props.confirmPasswordRef}
      handleFilled={props.handleConfirmPasswordFilled}
    />
  );
}
