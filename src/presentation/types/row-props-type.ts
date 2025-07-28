import { BarberDataType, UserDataType } from '@/infra/types/data-type';

export type RowPropsType = {
  isModal?: boolean;
  textblack?: boolean;
  size: 'small' | 'medium' | 'large' | 'extra-large';
  data: BarberDataType & UserDataType;
  dataType: 'user' | 'barber';
  date?: number | Date;
  hour?: number | Date;
};
