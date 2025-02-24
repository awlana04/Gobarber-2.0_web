'use client';

import { useRouter } from 'next/navigation';

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

export default function SigninPage() {
  const Router = useRouter();

  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isClientSelected, setIsClientSelected } = useHandleUserHook();
  const {
    isErrored,
    setIsErrored,
    isNameErrored,
    setIsNameErrored,
    isEmailErrored,
    setIsEmailErrored,
    isPasswordErrored,
    setIsPasswordErrored,
    isConfirmPasswordErrored,
    setIsConfirmPasswordErrored,
  } = useErrorHook();

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
      ? setIsNameErrored(false)
      : (setIsNameErrored(true), addToast(nameError.Length as any));

    (await checkName.exists(name))
      ? setIsNameErrored(false)
      : (setIsNameErrored(true), addToast(nameError.Required as any));

    (await checkEmail.length(email))
      ? setIsEmailErrored(false)
      : (setIsEmailErrored(true), addToast(emailError.Length as any));

    (await checkEmail.exists(email))
      ? setIsEmailErrored(false)
      : (setIsEmailErrored(true), addToast(emailError.Required as any));

    (await checkEmail.isValid(email))
      ? setIsEmailErrored(false)
      : (setIsEmailErrored(true), addToast(emailError.Valid as any));

    (await checkPassword.length(password)) && confirmPassword === password
      ? setIsPasswordErrored(false)
      : (setIsPasswordErrored(true), addToast(passwordError.Length as any));

    (await checkPassword.exists(password)) && confirmPassword === password
      ? setIsPasswordErrored(false)
      : (setIsPasswordErrored(true), addToast(passwordError.Required as any));

    if (
      password !== confirmPassword ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setIsConfirmPasswordErrored(true);

      addToast({
        type: 'error',
        title: 'Erro na Senha',
        description: 'As senhas necessitam serem iguais',
      });
    } else {
      setIsConfirmPasswordErrored(false);
    }

    if (
      isNameErrored === false &&
      isEmailErrored === false &&
      isPasswordErrored === false &&
      isConfirmPasswordErrored === false
    ) {
      process.env.NEXT_ENV === 'test'
        ? await SigninFormHandler({
            name,
            email,
            password,
            confirmPassword,
            file: file,
          })
        : await createUserService.handle({
            name,
            email,
            password,
            location: 'Somewhere Over the Rainbow',
          });

      isNameErrored === false &&
      isEmailErrored === false &&
      isPasswordErrored === false &&
      isConfirmPasswordErrored === false
        ? setIsErrored(true)
        : isClientSelected === true
          ? Router.push('../dashboard/client')
          : Router.push('./signin/barber');
    }
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
      nameErrored={isNameErrored}
      emailErrored={isEmailErrored}
      passwordErrored={isPasswordErrored}
      confirmPasswordErrored={isConfirmPasswordErrored}
    />
  );
}
