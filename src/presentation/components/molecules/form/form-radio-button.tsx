import Label from '@/atoms/label';

import { RadioButtonPropsType } from '@/presentation/types/radio-button-props-type';

import translate from '@/presentation/utils/translate';

export default function FormRadioButton(props: RadioButtonPropsType) {
  return (
    <div className='my-2 mt-6 flex items-center justify-center p-4'>
      <div className='mr-24'>
        <input
          type='radio'
          id='radioButtonYes'
          checked={props.isBarberSelected === true}
          onChange={() => props.setIsBarberSelected(true)}
          className='peer hidden'
        />

        {props.isBarber ? (
          <Label htmlFor='radioButtonYes'>{translate('Yes')}</Label>
        ) : (
          <Label htmlFor='radioButtonYes'>{translate('Client')}</Label>
        )}
      </div>

      <div>
        <input
          type='radio'
          id='radioButtonNo'
          checked={props.isBarberSelected === false}
          onChange={() => props.setIsBarberSelected(false)}
          className='peer hidden'
        />

        {props.isBarber ? (
          <Label htmlFor='radioButtonNo'>{translate('No')}</Label>
        ) : (
          <Label htmlFor='radioButtonNo'>{translate('Barber')}</Label>
        )}
      </div>
    </div>
  );
}
