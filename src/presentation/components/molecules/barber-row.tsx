import { FiCalendar, FiClock } from 'react-icons/fi';

import { BarberDataType } from '@/infra/types/data-type';

import AvatarImage from '@/atoms/avatar-image';
import translate from '@/shared/utils/translate';

type BarberRowPropsType = {
  isModal: boolean;
  textblack?: boolean;
  barber: BarberDataType;
};

export default function BarberRow({ barber, ...props }: BarberRowPropsType) {
  return (
    <div className='flex flex-row place-content-between items-center justify-between space-x-4 py-4'>
      <AvatarImage src={barber.user.avatar} size='small' />

      <h5
        data-modal={props.isModal}
        data-textblack={props.textblack}
        className='data-[textblack=true]:text-background absolute left-28 w-44 truncate data-[modal=true]:left-32 data-[modal=true]:w-96'
      >
        {barber.name}
      </h5>

      <div
        data-modal={props.isModal}
        className='flex-col text-base data-[modal=false]:hidden data-[modal=false]:group-hover:flex'
      >
        <div className='text-input-text my-1.5 flex flex-row items-center'>
          <FiCalendar className='text-orange mx-2.5' />

          {barber.openOnWeekends ? (
            <p className='mr-4'>{translate('Monday to Saturday')}</p>
          ) : (
            <p className='mr-7'>{translate('Monday to Friday')}</p>
          )}
        </div>

        <div className='text-input-text flex flex-row items-center'>
          <FiClock className='text-orange mx-2.5' />
          {barber.openAtNight ? (
            <p>{translate('8am to 9pm')}</p>
          ) : (
            <p>{translate('8am to 6pm')}</p>
          )}
        </div>
      </div>
    </div>
  );
}
