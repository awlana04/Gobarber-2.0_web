import { FiLock } from 'react-icons/fi';

import { ConfirmPasswordInputPropsMappedType } from '@/presentation/types/input-props-mapped-types';

import { Form } from '@/molecules/form';

import translate from '@/shared/utils/translate';

export default function ConfirmPasswordInputFragment(
  props: ConfirmPasswordInputPropsMappedType
) {
  return (
    <Form.Input
      ref={props.confirmPasswordRef}
      iconName={FiLock}
      type='password'
      name='confirmPassword'
      placeholder={translate('Confirm password')}
      errored={props.confirmPasswordErrored}
      filled={props.confirmPasswordFilled}
      handleFilled={props.handleConfirmPasswordFilled}
    />
  );
}
