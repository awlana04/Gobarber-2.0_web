import { InputHTMLAttributes } from 'react';

export type RadioType = InputHTMLAttributes<HTMLInputElement> & {
  isBarberSelected: boolean;
  setIsBarberSelected(state: boolean): void;
};
