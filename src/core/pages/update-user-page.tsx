import { SubmitHandlerType } from '@/presentation/types/submit-handler-type';
import {
  ActualPasswordInputRefType,
  ConfirmPasswordInputRefType,
  PasswordInputRefType,
} from '../types/values-and-refs-input-type';
import UpdateUserScreen from '@/presentation/screens/update-user-screen';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';
import useHandleFilledHook from '../hooks/use-handle-filled-hook';
import { UserDataType } from '@/infra/types/data-type';
import { HeaderPropsType } from '@/presentation/types/header-props-type';

type UpdateUserPagePropsType = PasswordInputRefType &
  ActualPasswordInputRefType &
  ConfirmPasswordInputRefType &
  HeaderPropsType &
  SubmitHandlerType & {
    file: File | undefined;
    fileUrl: string | undefined;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleRemove(): void;
    email: string;
    name: string;
    user: UserDataType;
  };

export default function UpdateUserPage(props: UpdateUserPagePropsType) {
  const { fieldFilled, handleFieldFilled } = useHandleFilledHook();

  const { fieldErrored } = useHandleErroredContext();

  return (
    <UpdateUserScreen
      actualPasswordErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find(
          (actualPassword) => actualPassword === 'actualPassword'
        )
      }
      actualPasswordFilled={
        !!fieldFilled.find(
          (actualPassword) => actualPassword === 'actualPassword'
        )
      }
      handleActualPasswordFilled={handleFieldFilled}
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
      passwordErrored={
        fieldErrored !== undefined &&
        !!fieldErrored.find((password) => password === 'password')
      }
      passwordFilled={!!fieldFilled.find((password) => password === 'password')}
      handlePasswordFilled={handleFieldFilled}
      isButtonDisabled={
        !!(fieldFilled.length !== 3 && fieldErrored !== undefined)
      }
      {...props}
    />
  );
}
