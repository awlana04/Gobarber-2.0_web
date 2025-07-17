import { BarberDataType, UserDataType } from '@/infra/types/data-type';
import translate from '@/shared/utils/translate';
import { FiCalendar, FiClock } from 'react-icons/fi';
import TextWithIcon from '../../atoms/text-with-icon';

type RowHourAndDateType = {
  isModal?: boolean;
  textblack?: boolean;
  size: 'small' | 'medium' | 'large';
  data: BarberDataType & UserDataType;
  dataType: 'user' | 'barber';
  date?: number;
  hour?: number;
};

export default function RowHourAndDate(props: RowHourAndDateType) {
  return (
    <div
      data-modal={props.isModal}
      data-size={props.size}
      className='flex w-52 flex-col place-content-start place-items-start items-start justify-start text-base data-[size=large]:w-36 data-[size=small]:invisible data-[size=small]:group-hover:visible'
    >
      <div
        data-date={!!props.date || !!props.hour || props.dataType === 'barber'}
        className='text-input-text flex flex-row items-center data-[date=false]:my-1.5'
      >
        {props.dataType === 'barber' ? (
          props.data.openOnWeekends ? (
            <TextWithIcon
              icon={FiCalendar}
              color='grey'
              text={translate('Monday to Saturday')}
            />
          ) : (
            <TextWithIcon
              icon={FiCalendar}
              color='grey'
              text={translate('Monday to Friday')}
            />
          )
        ) : (
          props.date && (
            <TextWithIcon icon={FiCalendar} color='grey' text={props.date!} />
          )
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
