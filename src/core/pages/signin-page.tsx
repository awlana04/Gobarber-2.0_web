'use client';

import { redirect } from 'next/navigation';

import useHandleAvatarHook from '@hooks/use-handle-avatar-hook';
import useHandleUserHook from '@hooks/use-handle-user-hook';

import { useToast } from '../contexts/use-toast-context';

import { SigninFormHandler } from '@handlers/signin-form-handler';

import SigninScreen from '@/presentation/screens/signin-screen';

import CreateUserService from '../../domain/services/create-user-service';

import EmailErrorHandling from '../../domain/validations/email-error-handling';
import NameErrorHandling from '../../domain/validations/name-error-handling';
import PasswordErrorHandling from '../../domain/validations/password-error-handling';

import { passwordError } from '../errors/password-toast-error-messages';
import { emailError } from '../errors/email-toast-error-messages';
import { nameError } from '../errors/name-toast-error-messages';

import CreateUserFakeServer from '../server/create-user-fake-server';

import useHandleErroredHook from '@hooks/use-handle-errored-hook';

export default function SigninPage() {
  // const [state, dispatch] = useReducer(useHandleErroredHook, initialState);
  const { state, dispatch } = useHandleErroredHook();

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

    const nameLength = await checkName.length(name);
    const nameExists = await checkName.exists(name);

    const emailLength = await checkEmail.length(email);
    const emailExists = await checkEmail.exists(email);
    const emailIsValid = await checkEmail.isValid(email);

    const passwordLength =
      (await checkPassword.length(password)) && confirmPassword === password;
    const passwordExists =
      (await checkPassword.exists(password)) && confirmPassword === password;

    switch (nameExists === false || nameLength === false) {
      case nameExists: {
        console.log(name);
        dispatch({ type: 'SET_NAME_ERROR' }), addToast(nameError.Length as any);
        break;
      }
      case nameLength: {
        dispatch({ type: 'SET_NAME_ERROR' }),
          addToast(nameError.Required as any);
        break;
      }
      default:
        dispatch({ type: 'SET_NAME_SUCCESS' });
    }

    switch (
      emailLength === false ||
      emailExists === false ||
      emailIsValid === false
    ) {
      case emailLength: {
        dispatch({ type: 'SET_EMAIL_ERROR' }),
          addToast(emailError.Length as any);
        break;
      }
      case emailExists: {
        dispatch({ type: 'SET_EMAIL_ERROR' }),
          addToast(emailError.Required as any);
        break;
      }
      case emailIsValid: {
        dispatch({ type: 'SET_EMAIL_ERROR' }),
          addToast(emailError.Valid as any);
        break;
      }
      default:
        dispatch({ type: 'SET_EMAIL_SUCCESS' });
    }

    switch (passwordLength === false || passwordExists === false) {
      case passwordLength: {
        dispatch({ type: 'SET_PASSWORD_ERROR' }),
          addToast(passwordError.Length as any);
        break;
      }
      case passwordExists: {
        dispatch({ type: 'SET_PASSWORD_ERROR' }),
          addToast(passwordError.Required as any);
        break;
      }
      default:
        dispatch({ type: 'SET_PASSWORD_SUCCESS' });
    }

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
      nameErrored={state.isNameErrored}
      emailErrored={state.isEmailErrored}
      passwordErrored={state.isPasswordErrored}
      confirmPasswordErrored={state.isConfirmPasswordErrored}
    />
  );
}
