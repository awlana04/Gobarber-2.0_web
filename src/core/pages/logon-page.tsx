import { useLayoutEffect } from 'react';

import { PasswordInputPropsType } from '@/presentation/types/password-input-props-type';
import { EmailInputPropsType } from '@/presentation/types/email-input-props-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import useHandleFilledHook from '@/hooks/use-handle-filled-hook';

import LogonScreen from '@/screens/logon-screen';

type EmailInputRef = Pick<EmailInputPropsType, 'emailRef'>;
type PasswordInputRef = Pick<PasswordInputPropsType, 'passwordRef'>;

type LogonPageType = EmailInputRef & PasswordInputRef & SubmitHandlerType;

export default function LogonPage(props: LogonPageType) {
  const { state, dispatch } = useHandleErroredContext();

  const { fieldFilled, handleFieldFilled } = useHandleFilledHook();

  useLayoutEffect(() => {
    if (state.pageName !== 'logon-page') {
      dispatch({ type: 'RESET_INITIAL_STATE', pageName: 'logon-page' });
    }
  });

  // console.log(!!(fieldFilled.length !== 2), fieldFilled.length, fieldFilled);

  return (
    <LogonScreen
      emailRef={props.emailRef}
      emailValue={state.emailValue}
      emailErrored={state.isEmailErrored}
      emailFilled={!!fieldFilled.find((email) => email === 'email')}
      handleEmailFilled={handleFieldFilled}
      passwordRef={props.passwordRef}
      passwordErrored={state.isPasswordErrored}
      passwordFilled={!!fieldFilled.find((password) => password === 'password')}
      handlePasswordFilled={handleFieldFilled}
      submitHandler={props.submitHandler}
      buttonDisabled={!!(fieldFilled.length !== 2)}
    />
  );
}
