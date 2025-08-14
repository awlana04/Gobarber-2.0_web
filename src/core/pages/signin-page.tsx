import {
  NameInputRefAndValueType,
  EmailInputRefAndValueType,
  PasswordInputRefType,
  ConfirmPasswordInputRefType,
} from '@/core/types/values-and-refs-input-type';
import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';

import useHandleFilledHook from '../hooks/use-handle-filled-hook';
import useHandleUserHook from '@/hooks/use-handle-user-hook';

import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import SigninScreen from '@/presentation/screens/signin-screen';

type SigninPagePropsType = NameInputRefAndValueType &
  EmailInputRefAndValueType &
  PasswordInputRefType &
  ConfirmPasswordInputRefType &
  SubmitHandlerType & {
    file: File | undefined;
    fileUrl: string | undefined;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleRemove(): void;
    isClientSelected: boolean;
    setIsClientSelected(state: boolean): void;
  };

export default function SigninPage(props: SigninPagePropsType) {
  const { fieldFilled, handleFieldFilled } = useHandleFilledHook();

  const { fieldErrored } = useHandleErroredContext();

  return (
    <SigninScreen
      nameErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((name) => name === 'name')
      }
      nameFilled={!!fieldFilled.find((name) => name === 'name')}
      handleNameFilled={handleFieldFilled}
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
      isBarber={false}
      isBarberSelected={props.isClientSelected}
      setIsBarberSelected={props.setIsClientSelected}
      {...props}
    />
  );
}
