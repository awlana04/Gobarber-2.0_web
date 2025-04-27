import { FiLock } from 'react-icons/fi';

import { PasswordInputPropsType } from '@/presentation/types/password-input-props-type';

import { Form } from '@/molecules/form';

import translate from '@/shared/utils/translate';

export default function PasswordInputFragment(props: PasswordInputPropsType) {
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
