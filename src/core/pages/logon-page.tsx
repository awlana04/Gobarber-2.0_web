'use client';

import { redirect } from 'next/navigation';

import { AuthenticateFormHandler } from '@handlers/authenticate-form-handler';

import LogonScreen from '@screens/logon-screen';

import useHandleErroredHook from '../hooks/use-handle-errored-hook';
import CreateUserService from '@/domain/services/create-user-service';
import EmailErrorHandling from '@/domain/validations/email-error-handling';
import PasswordErrorHandling from '@/domain/validations/password-error-handling';
import { emailError } from '../errors/email-toast-error-messages';
import { passwordError } from '../errors/password-toast-error-messages';
import { useToast } from '../contexts/use-toast-context';

type ErrorActions = {
  type: 'INVALID_PASSWORD_LENGTH' | 'INVALID_PASSWORD_NULL';
};

export default function LogonPage() {
  const { state, dispatch } = useHandleErroredHook();
  const { addToast } = useToast();

  const submitHandler = async (formData: FormData) => {
    const email = formData.get('email') as any;
    const password = formData.get('password') as any;

    const checkEmail = new EmailErrorHandling();
    const checkPassword = new PasswordErrorHandling();

    (await checkEmail.length(email))
      ? (dispatch({ type: 'SET_EMAIL_ERROR' }),
        addToast(emailError.Length as any))
      : dispatch({ type: 'SET_EMAIL_SUCCESS' });

    // (await checkEmail.length(email))
    //   ? dispatch({ type: 'SET_EMAIL_SUCCESS' })
    //   : (dispatch({ type: 'SET_EMAIL_ERROR' }),
    //     addToast(emailError.Length as any));

    // (await checkEmail.isValid(email))
    //   ? (dispatch({ type: 'SET_EMAIL_ERROR' }),
    //     addToast(emailError.Valid as any))
    //   : dispatch({ type: 'SET_EMAIL_SUCCESS' });

    (await checkPassword.length(password))
      ? (dispatch({ type: 'SET_PASSWORD_ERROR' }),
        addToast(passwordError.Length as any))
      : dispatch({ type: 'SET_PASSWORD_SUCCESS' });

    console.log(state);

    // const result = await AuthenticateFormHandler({
    //   email,
    //   password,
    // });

    // const { response } = result;

    // if (response.barber) {
    //   redirect('../dashboard/barber');
    // } else {
    //   redirect('../dashboard/client');
    // }
  };

  return (
    <LogonScreen
      submitHandler={submitHandler}
      emailErrored={state.isEmailErrored}
      passwordErrored={state.isPasswordErrored}
    />
  );
}
