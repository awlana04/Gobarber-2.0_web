import { UserDataType, BarberDataType } from '@/infra/types/data-type';

import useHandleIsModalOpen from '@/hooks/use-handle-is-modal-open';
import useHandleSortedBarbers from '@/hooks/use-handle-sorted-barbers';

import UserDashboardScreen from '@/presentation/screens/user-dashboard-screen';
import AvailableLanguagesType from '@/shared/types/available-languages-type';

type UserDashboardPagePropsType = {
  user: UserDataType;
  userToken: string;
  barbers: BarberDataType[] | undefined;
  logoutOnclick(): void;
  setLanguage(language: AvailableLanguagesType): any;
};

export default function UserDashboardPage(props: UserDashboardPagePropsType) {
  const { isModalOpen, setIsModalOpen } = useHandleIsModalOpen();
  const { sortedBarbers, sortedLastBarbers } = useHandleSortedBarbers({
    user: props.user,
    barbers: props.barbers,
    isModalOpen,
  });

  return (
    <UserDashboardScreen
      user={props.user}
      userToken={props.userToken}
      barbers={props.barbers}
      logoutOnclick={props.logoutOnclick}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      sortedBarbers={sortedBarbers}
      sortedLastBarbers={sortedLastBarbers}
      setLanguage={props.setLanguage}
    />
  );
}
