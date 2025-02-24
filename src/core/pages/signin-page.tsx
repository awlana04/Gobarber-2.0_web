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
  } = useErrorHook();

  const { addToast } = useToast();

  const submitHandler = async (formData: FormData) => {
    const name = formData.get('name') as any;
    const email = formData.get('email') as any;
    const password = formData.get('password') as any;

    const createUserService = new CreateUserService();

    process.env.NEXT_ENV === 'test'
      ? await SigninFormHandler({
          name,
          email,
          password,
          confirmPassword: formData.get('confirmPassword'),
          file: file,
        })
      : await createUserService.handle({
          name,
          email,
          password,
          location: 'Somewhere Over the Rainbow',
        });

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

    (await checkPassword.length(password))
      ? setIsPasswordErrored(false)
      : (setIsPasswordErrored(true), addToast(passwordError.Length as any));

    (await checkPassword.exists(password))
      ? setIsPasswordErrored(false)
      : (setIsPasswordErrored(true), addToast(passwordError.Required as any));

    isNameErrored === false &&
    isEmailErrored === false &&
    isPasswordErrored === false
      ? setIsErrored(true)
      : isClientSelected === true
        ? Router.push('../dashboard/client')
        : Router.push('./signin/barber');
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
      isErrored={isErrored}
      nameErrored={isNameErrored}
      emailErrored={isEmailErrored}
      passwordErrored={isPasswordErrored}
    />
  );
}
