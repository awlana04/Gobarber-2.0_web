import { useLayoutEffect } from 'react';

import { PasswordInputPropsType } from '@/presentation/types/password-input-props-type';
import { EmailInputPropsType } from '@/presentation/types/email-input-props-type';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import LogonScreen from '@/screens/logon-screen';

type EmailInputRef = Pick<EmailInputPropsType, 'emailRef'>;
type PasswordInputRef = Pick<PasswordInputPropsType, 'passwordRef'>;

type LogonPageType = EmailInputRef &
  PasswordInputRef & {
    submitHandler: (data: any) => void;
  };

export default function LogonPage({
  emailRef,
  passwordRef,
  submitHandler,
}: LogonPageType) {
  const { state, dispatch } = useHandleErroredContext();

  useLayoutEffect(() => {
    if (state.pageName !== 'logon-page') {
      dispatch({ type: 'RESET_INITIAL_STATE', pageName: 'logon-page' });
    }
  });

  return (
    <LogonScreen
      emailRef={emailRef}
      passwordRef={passwordRef}
      submitHandler={submitHandler}
      emailValue={state.emailValue}
      emailErrored={state.isEmailErrored}
      passwordErrored={state.isPasswordErrored}
    />
  );
}
