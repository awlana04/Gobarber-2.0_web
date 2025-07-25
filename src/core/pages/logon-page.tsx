import {
  EmailInputRefAndValueType,
  PasswordInputRefType,
} from '@/core/types/values-and-refs-input-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import useHandleFilledHook from '@/hooks/use-handle-filled-hook';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import LogonScreen from '@/screens/logon-screen';

type LogonPagePropsType = EmailInputRefAndValueType &
  PasswordInputRefType &
  SubmitHandlerType;

export default function LogonPage(props: LogonPagePropsType) {
  const { fieldFilled, handleFieldFilled } = useHandleFilledHook();

  const { fieldErrored } = useHandleErroredContext();

  return (
    <LogonScreen
      emailErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((email) => email === 'email')
      }
      emailFilled={!!fieldFilled.find((email) => email === 'email')}
      handleEmailFilled={handleFieldFilled}
      passwordErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((password) => password === 'password')
      }
      passwordFilled={!!fieldFilled.find((password) => password === 'password')}
      handlePasswordFilled={handleFieldFilled}
      isButtonDisabled={
        !!(fieldFilled.length !== 2 && fieldErrored !== undefined)
      }
      {...props}
    />
  );
}
