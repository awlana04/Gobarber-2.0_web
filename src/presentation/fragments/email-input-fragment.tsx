import { FiMail } from 'react-icons/fi';

import { EmailInputPropsMappedType } from '@/presentation/types/input-props-mapped-types';

import { Form } from '@/molecules/form';

import translate from '@/shared/utils/translate';

export default function EmailInputFragment(props: EmailInputPropsMappedType) {
  return (
    <Form.Input
      value={props.emailValue}
      iconName={FiMail}
      type='email'
      ref={props.emailRef}
      placeholder={translate('E-mail')}
      name='email'
      errored={props.emailErrored}
      filled={props.emailFilled}
      handleFilled={props.handleEmailFilled}
    />
  );
}
