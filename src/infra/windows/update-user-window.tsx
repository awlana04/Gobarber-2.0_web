'use client';

import UpdateUserScreen from '@/presentation/screens/update-user-screen';
import { UserDataType } from '../types/data-type';

type UpdateUserWindowPropsType = {
  user: UserDataType;
};

export default function UpdateUserWindow(props: UpdateUserWindowPropsType) {
  return (
    <UpdateUserScreen
      emailValue={props.user.email}
      handlePasswordFilled={() => {}}
      logoutOnclick={() => {}}
      nameValue={props.user.name}
      passwordErrored={false}
      passwordFilled={false}
      passwordRef={null}
      submitHandler={() => {}}
      user={props.user}
      isButtonDisabled={false}
      passwordValue=''
    />
  );
}
