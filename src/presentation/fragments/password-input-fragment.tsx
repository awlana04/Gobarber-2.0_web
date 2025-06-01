import { FiLock } from 'react-icons/fi';

import { PasswordInputPropsMappedType } from '@/presentation/types/input-props-mapped-type';

import { Form } from '@/molecules/form';

import translate from '@/shared/utils/translate';

export default function PasswordInputFragment(
  props: PasswordInputPropsMappedType
) {
  return (
    <Form.Input
      iconName={FiLock}
      type='password'
      name='password'
      ref={props.passwordRef}
      placeholder={translate('Password')}
      errored={props.passwordErrored}
      filled={props.passwordFilled}
      handleFilled={props.handlePasswordFilled}
    />
  );
}
