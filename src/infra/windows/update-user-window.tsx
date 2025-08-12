'use client';

import UpdateUserScreen from '@/presentation/screens/update-user-screen';
import { UserDataType } from '../types/data-type';

type UpdateUserWindowPropsType = {
  user: UserDataType;
};

export default function UpdateUserWindow(props: UpdateUserWindowPropsType) {
  return (
    <UpdateUserScreen
      email={props.user.email}
      handlePasswordFilled={() => {}}
      logoutOnclick={() => {}}
      name={props.user.name}
      passwordErrored={false}
      passwordFilled={false}
      passwordRef={null}
      submitHandler={() => {}}
      user={props.user}
      isButtonDisabled={false}
      passwordValue=''
      actualPasswordErrored={false}
      actualPasswordFilled={false}
      actualPasswordRef={null}
      confirmPasswordErrored={false}
      confirmPasswordFilled={false}
      confirmPasswordRef={null}
      handleActualPasswordFilled={() => {}}
      handleConfirmPasswordFilled={() => {}}
      actualPasswordValue=''
      confirmPasswordValue=''
      file={null}
      fileUrl={`${process.env.NEXT_PUBLIC_BACKEND_URI}/files/${props.user.avatar}`}
      handleChange={() => {}}
      handleRemove={() => {}}
    />
  );
}
