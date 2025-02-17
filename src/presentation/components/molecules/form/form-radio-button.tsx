import { InputHTMLAttributes } from 'react';

import Label from '@components/atoms/label';

type FormRadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  isBarberSelected: boolean;
  isBarber: boolean;
  setIsBarberSelected(state: boolean): void;
};

export default function FormRadioButton({
  isBarberSelected,
  isBarber,
  setIsBarberSelected,
}: FormRadioButtonProps) {
  return (
    <div className='my-2 mt-6 flex items-center justify-center p-4'>
      <div is-barber={isBarber} className='mr-24'>
        <input
          type='radio'
          id='radioButtonYes'
          checked={isBarberSelected === true}
          onChange={() => setIsBarberSelected(true)}
          className='peer hidden'
        />

        {isBarber ? (
          <Label htmlFor='radioButtonYes'>Sim</Label>
        ) : (
          <Label htmlFor='radioButtonYes'>Sou Cliente</Label>
        )}
      </div>

      <div>
        <input
          type='radio'
          id='radioButtonNo'
          checked={isBarberSelected === false}
          onChange={() => setIsBarberSelected(false)}
          className='peer hidden'
        />

        {isBarber ? (
          <Label htmlFor='radioButtonNo'>Não</Label>
        ) : (
          <Label htmlFor='radioButtonNo'>Sou Barbeiro</Label>
        )}
      </div>
    </div>
  );
}
