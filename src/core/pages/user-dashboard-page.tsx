import { UserDataType, BarberDataType } from '@/infra/types/data-type';

import useHandleIsModalOpen from '@/hooks/use-handle-is-modal-open';

import UserDashboardScreen from '@/presentation/screens/user-dashboard-screen';

type UserDashboardPagePropsType = {
  user: UserDataType;
  userToken: string;
  barbers: BarberDataType[] | undefined;
  logoutOnclick(): void;
};

export default function UserDashboardPage(props: UserDashboardPagePropsType) {
  const { isModalOpen, setIsModalOpen } = useHandleIsModalOpen();

  return (
    <UserDashboardScreen
      user={props.user}
      userToken={props.userToken}
      barbers={props.barbers}
      logoutOnclick={props.logoutOnclick}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
  );
}
