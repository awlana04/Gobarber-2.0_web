import { BarberDataType, UserDataType } from '@/infra/types/data-type';
import translate from '@/shared/utils/translate';
import { FiCalendar, FiClock } from 'react-icons/fi';

type RowHourAndDateType = {
  isModal?: boolean;
  data: BarberDataType & UserDataType;
  dataType: 'user' | 'barber';
  date?: number;
  hour?: number;
};

export default function RowHourAndDate(props: RowHourAndDateType) {
  return (
    <div
      data-modal={props.isModal}
      className='flex-col text-base data-[modal=false]:hidden data-[modal=false]:group-hover:flex'
    >
      <div
        data-date={!!props.date || !!props.hour || props.dataType === 'barber'}
        className='text-input-text flex flex-row items-center data-[date=false]:my-1.5'
      >
        {props.dataType === 'barber' && (
          <FiCalendar className='text-orange mx-2.5' />
        )}
        {props.date && <FiCalendar className='text-orange mx-2.5' />}

        {props.dataType === 'barber' ? (
          props.data.openOnWeekends ? (
            <p className='mr-6'>{translate('Monday to Saturday')}</p>
          ) : (
            <p className='mr-8'>{translate('Monday to Friday')}</p>
          )
        ) : (
          props.date && <p className='mr-4'>{props.date}</p>
        )}
      </div>

      <div className='text-input-text flex flex-row items-center'>
        {props.dataType === 'barber' && (
          <FiClock className='text-orange mx-2.5' />
        )}
        {props.hour && <FiClock className='text-orange mx-2.5 text-xl' />}

        {props.dataType === 'barber' ? (
          props.data.openAtNight ? (
            <p>{translate('8am to 9pm')}</p>
          ) : (
            <p>{translate('8am to 6pm')}</p>
          )
        ) : (
          props.hour && <p className='mr-10 text-xl'>{props.hour}</p>
        )}
      </div>
    </div>
  );
}
