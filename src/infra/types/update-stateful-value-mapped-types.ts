import { BarberDataType } from './data-type';

export type UpdateStatefulValueType = {
  setBarbers(value: BarberDataType[] | undefined): void;
};
