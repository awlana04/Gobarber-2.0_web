import {
  NameInputRefAndValueType,
  EmailInputRefAndValueType,
  PasswordInputRefType,
  ConfirmPasswordInputRefType,
} from '@/core/types/values-and-refs-input-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import useHandleFilledHook from '../hooks/use-handle-filled-hook';
import useHandleAvatarHook from '@/hooks/use-handle-avatar-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import SigninScreen from '@/presentation/screens/signin-screen';

type SigninPagePropsType = NameInputRefAndValueType &
  EmailInputRefAndValueType &
  PasswordInputRefType &
  ConfirmPasswordInputRefType &
  SubmitHandlerType;

export default function SigninPage(props: SigninPagePropsType) {
  const { fieldFilled, handleFieldFilled } = useHandleFilledHook();
  const { file, fileUrl, handleChange, handleRemove } = useHandleAvatarHook();
  const { isClientSelected, setIsClientSelected } = useHandleUserHook();

  const { fieldErrored } = useHandleErroredContext();

  return (
    <SigninScreen
      nameRef={props.nameRef}
      nameValue={props.nameValue}
      nameErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((name) => name === 'name')
      }
      nameFilled={!!fieldFilled.find((name) => name === 'name')}
      handleNameFilled={handleFieldFilled}
      emailRef={props.emailRef}
      emailValue={props.emailValue}
      emailErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((email) => email === 'email')
      }
      emailFilled={!!fieldFilled.find((email) => email === 'email')}
      handleEmailFilled={handleFieldFilled}
      passwordRef={props.passwordRef}
      passwordErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((password) => password === 'password')
      }
      passwordFilled={!!fieldFilled.find((password) => password === 'password')}
      handlePasswordFilled={handleFieldFilled}
      confirmPasswordRef={props.confirmPasswordRef}
      confirmPasswordErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find(
          (confirmPassword) => confirmPassword === 'confirmPassword'
        )
      }
      confirmPasswordFilled={
        !!fieldFilled.find(
          (confirmPassword) => confirmPassword === 'confirmPassword'
        )
      }
      handleConfirmPasswordFilled={handleFieldFilled}
      file={file}
      fileUrl={fileUrl}
      handleChange={handleChange}
      handleRemove={handleRemove}
      isBarber={false}
      isBarberSelected={isClientSelected}
      setIsBarberSelected={setIsClientSelected}
      submitHandler={props.submitHandler}
    />
  );
}
