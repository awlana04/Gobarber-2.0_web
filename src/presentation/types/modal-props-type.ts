import { UserDataType, BarberDataType } from '@/infra/types/data-type';

export type ModalPropsType = {
  dataType: 'user' | 'barber';
  data?: UserDataType[] | BarberDataType[] | UserDataType | BarberDataType;
  headerText: string;
  isModalOpen: boolean;
  setIsModalOpen(value: boolean): void;
};
