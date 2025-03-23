import { useLayoutEffect } from 'react';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import LogonScreen from '@/screens/logon-screen';

type LogonPageType = {
  submitHandler: (data: any) => void;
};

export default function LogonPage({ submitHandler }: LogonPageType) {
  const { state, dispatch } = useHandleErroredContext();

  useLayoutEffect(() => {
    if (state.pageName !== 'logon-page') {
      dispatch({ type: 'RESET_INITIAL_STATE', pageName: 'logon-page' });
    }
  });

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
