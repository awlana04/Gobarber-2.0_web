'use client';

import { useLayoutEffect } from 'react';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import useAuthenticateFormSubmitHandler from '@/handlers/authenticate-form-submit-handler';

import LogonScreen from '@/screens/logon-screen';

export default function LogonPage() {
  const { state, dispatch } = useHandleErroredContext();

  useLayoutEffect(() => {
    if (state.pageName !== 'logon-page') {
      dispatch({ type: 'RESET_INITIAL_STATE', pageName: 'logon-page' });
    }
  });

  const { submitHandler } = useAuthenticateFormSubmitHandler();

  return (
    <LogonScreen
      submitHandler={submitHandler}
      emailValue={state.emailValue}
      emailErrored={state.isEmailErrored}
      isButtonDisabled={false}
      passwordErrored={state.isPasswordErrored}
    />
  );
}
