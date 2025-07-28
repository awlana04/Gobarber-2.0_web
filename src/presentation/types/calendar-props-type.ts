import { BarberDataType, AppointmentDataType } from '@/infra/types/data-type';

export type CalendarPropsType = {
  barber?: BarberDataType;
  appointments?: AppointmentDataType[];
  selectedDate?: Date;
  setSelectedDate?(value?: Date): void;
  handleDayClick?(day?: Date): void;
};
