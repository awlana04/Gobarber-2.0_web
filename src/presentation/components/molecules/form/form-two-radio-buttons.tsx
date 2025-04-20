import { FormTwoRadioButtonProps } from '@/presentation/types/two-radio-buttons-props-type';

import Title from '@/atoms/title';
import Label from '@/atoms/label';

import translate from '@/presentation/utils/translate';

export default function FormTwoRadioButton(props: FormTwoRadioButtonProps) {
  return (
    <div className='flex- my-2 flex flex-col p-4'>
      <Title>{translate('Does your barber shop open at night?')}</Title>

      <div className='m-4 mb-8 flex flex-row items-center justify-center'>
        <div className='mr-24'>
          <input
            type='radio'
            id='openAtNightYes'
            checked={props.isOpenAtNight === true}
            onChange={() => props.setIsOpenAtNight(true)}
            className='peer hidden'
          />

          <Label htmlFor='openAtNightYes'>{translate('Yes')}</Label>
        </div>

        <div>
          <input
            type='radio'
            id='openAtNightNo'
            checked={props.isOpenAtNight === false}
            onChange={() => props.setIsOpenAtNight(false)}
            className='peer hidden'
          />

          <Label htmlFor='openAtNightNo'>{translate('No')}</Label>
        </div>
      </div>

      <Title>{translate('Does your barber shop open on weekends?')}</Title>

      <div className='m-4 mb-8 flex flex-row items-center justify-center'>
        <div className='mr-24'>
          <input
            type='radio'
            id='openOnWeekendsYes'
            checked={props.isOpenOnWeekends === true}
            onChange={() => props.setIsOpenOnWeekends(true)}
            className='peer hidden'
          />

          <Label htmlFor='openOnWeekendsYes'>{translate('Yes')}</Label>
        </div>

        <div>
          <input
            type='radio'
            id='openOnWeekendsNo'
            checked={props.isOpenOnWeekends === false}
            onChange={() => props.setIsOpenOnWeekends(false)}
            className='peer hidden'
          />

          <Label htmlFor='openOnWeekendsNo'>{translate('No')}</Label>
        </div>
      </div>
    </div>
  );
}
