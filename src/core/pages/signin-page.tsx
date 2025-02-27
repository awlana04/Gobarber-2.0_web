'use client';

import { redirect } from 'next/navigation';
import { useReducer } from 'react';

import useHandleAvatarHook from '@hooks/use-handle-avatar-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { useToast } from '../contexts/use-toast-context';

import { SigninFormHandler } from '@handlers/signin-form-handler';

import SigninScreen from '@/presentation/screens/signin-screen';

import CreateUserService from '../../domain/services/create-user-service';

import useErrorHook from '../hooks/use-error-hook';

import EmailErrorHandling from '../../domain/validations/email-error-handling';
import NameErrorHandling from '../../domain/validations/name-error-handling';
import PasswordErrorHandling from '../../domain/validations/password-error-handling';

import { passwordError } from '../errors/password-toast-error-messages';
import { emailError } from '../errors/email-toast-error-messages';
import { nameError } from '../errors/name-toast-error-messages';

import CreateUserFakeServer from '../server/create-user-fake-server';

type Action = {
  type:
    | 'SET_NAME_ERROR'
    | 'SET_NAME_SUCCESS'
    | 'SET_EMAIL_ERROR'
    | 'SET_EMAIL_SUCCESS'
    | 'SET_PASSWORD_ERROR'
    | 'SET_PASSWORD_SUCCESS'
    | 'SET_CONFIRM_PASSWORD_ERROR'
    | 'SET_CONFIRM_PASSWORD_SUCCESS';
};

type formState = {
  isNameErrored: boolean;
  isEmailErrored: boolean;
  isPasswordErrored: boolean;
  isConfirmPasswordErrored: boolean;
};

const initialState: formState = {
  isNameErrored: false,
  isEmailErrored: false,
  isPasswordErrored: false,
  isConfirmPasswordErrored: false,
};

function handleErrored(state: formState, action: Action) {
  switch (action.type) {
    case 'SET_NAME_ERROR':
      return { ...state, isNameErrored: true };
    case 'SET_NAME_SUCCESS':
      return { ...state, isNameErrored: false };
    case 'SET_EMAIL_ERROR':
      return { ...state, isEmailErrored: true };
    case 'SET_EMAIL_SUCCESS':
      return { ...state, isEmailErrored: false };
    case 'SET_PASSWORD_ERROR':
      return { ...state, isPasswordErrored: true };
    case 'SET_PASSWORD_SUCCESS':
      return { ...state, isPasswordErrored: false };
    case 'SET_CONFIRM_PASSWORD_ERROR':
      return { ...state, isConfirmPasswordErrored: true };
    case 'SET_CONFIRM_PASSWORD_SUCCESS':
      return { ...state, isConfirmPasswordErrored: false };
    default:
      return state;
  }
}

export default function SigninPage() {
  const [state, dispatch] = useReducer(handleErrored, initialState);

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isClientSelected, setIsClientSelected } = useHandleUserHook();

  const { addToast } = useToast();

  const submitHandler = async (formData: FormData) => {
    const name = formData.get('name') as any;
    const email = formData.get('email') as any;
    const password = formData.get('password') as any;
    const confirmPassword = formData.get('confirmPassword') as any;

    const createUserService = new CreateUserService();

    const checkName = new NameErrorHandling();
    const checkEmail = new EmailErrorHandling();
    const checkPassword = new PasswordErrorHandling();

    (await checkName.length(name))
      ? dispatch({ type: 'SET_NAME_SUCCESS' })
      : (dispatch({ type: 'SET_NAME_ERROR' }),
        addToast(nameError.Length as any));

    (await checkName.exists(name))
      ? dispatch({ type: 'SET_NAME_SUCCESS' })
      : (dispatch({ type: 'SET_NAME_ERROR' }),
        addToast(nameError.Required as any));

    (await checkEmail.length(email))
      ? dispatch({ type: 'SET_EMAIL_SUCCESS' })
      : (dispatch({ type: 'SET_EMAIL_ERROR' }),
        addToast(emailError.Length as any));

    (await checkEmail.exists(email))
      ? dispatch({ type: 'SET_EMAIL_SUCCESS' })
      : (dispatch({ type: 'SET_EMAIL_ERROR' }),
        addToast(emailError.Required as any));

    (await checkEmail.isValid(email))
      ? dispatch({ type: 'SET_EMAIL_SUCCESS' })
      : (dispatch({ type: 'SET_EMAIL_ERROR' }),
        addToast(emailError.Valid as any));

    (await checkPassword.length(password)) && confirmPassword === password
      ? dispatch({ type: 'SET_PASSWORD_SUCCESS' })
      : (dispatch({ type: 'SET_PASSWORD_ERROR' }),
        addToast(passwordError.Length as any));

    (await checkPassword.exists(password)) && confirmPassword === password
      ? dispatch({ type: 'SET_PASSWORD_SUCCESS' })
      : (dispatch({ type: 'SET_PASSWORD_ERROR' }),
        addToast(passwordError.Required as any));

    if (
      password !== confirmPassword ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      dispatch({ type: 'SET_CONFIRM_PASSWORD_ERROR' });

      addToast({
        type: 'error',
        title: 'Erro na Senha',
        description: 'As senhas necessitam serem iguais',
      });
    } else {
      dispatch({ type: 'SET_CONFIRM_PASSWORD_SUCCESS' });
    }

    await createUserService.handle({
      name,
      email,
      password,
      location: 'Somewhere Over the Rainbow',
    });

    // if (
    //   state.isNameErrored === false &&
    //   state.isEmailErrored === false &&
    //   state.isPasswordErrored === false
    //   // isConfirmPasswordErrored === false
    //   // initialState.isNameErrored &&
    //   // initialState.isEmailErrored &&
    //   // initialState.isPasswordErrored
    // ) {
    //   process.env.NEXT_ENV === 'test'
    //     ? await SigninFormHandler({
    //         name,
    //         email,
    //         password,
    //         confirmPassword,
    //         file: file,
    //       })
    //     : await CreateUserFakeServer({ name, email, password });
    // }

    // isNameErrored === false &&
    // isEmailErrored === false &&
    // isPasswordErrored === false &&
    // isConfirmPasswordErrored === false
    //   ? setIsErrored(true)
    //   : isClientSelected === true
    //     ? redirect('../dashboard/client')
    //     : redirect('./signin/barber');
  };

  return (
    <SigninScreen
      submitHandler={submitHandler}
      avatar={{
        file: file,
        fileUrl: fileUrl,
        handleChange: handleChange,
        handleRemove: handleRemove,
      }}
      radio={{
        isBarberSelected: isClientSelected,
        setIsBarberSelected: setIsClientSelected,
      }}
      // nameErrored={isNameErrored}
      // emailErrored={isEmailErrored}
      // passwordErrored={isPasswordErrored}
      nameErrored={state.isNameErrored}
      emailErrored={state.isEmailErrored}
      passwordErrored={state.isPasswordErrored}
      confirmPasswordErrored={state.isConfirmPasswordErrored}
    />
  );
}
