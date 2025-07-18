import { BarberDataType, UserDataType } from '@/infra/types/data-type';
import translate from '@/shared/utils/translate';
import { FiCalendar, FiClock } from 'react-icons/fi';
import TextWithIcon from '../../atoms/text-with-icon';

type RowHourAndDateType = {
  isModal?: boolean;
  textblack?: boolean;
  size: 'small' | 'medium' | 'large' | 'extra-large';
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
      className='flex w-52 flex-col place-content-start place-items-start items-start justify-start text-base data-[size=extra-large]:w-32 data-[size=extra-large]:text-xl data-[size=small]:invisible data-[size=small]:group-hover:visible'
    >
      <div
        data-date={!!props.date || !!props.hour || props.dataType === 'barber'}
        className='text-input-text flex flex-row data-[date=false]:my-1.5'
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

      <div
        data-date={!!props.date || !!props.hour || props.dataType === 'barber'}
        className='text-input-text flex flex-row data-[date=false]:my-1.5'
      >
        {props.dataType === 'barber' ? (
          props.data.openAtNight ? (
            <TextWithIcon
              icon={FiClock}
              color='grey'
              text={translate('8am to 9pm')}
            />
          ) : (
            <TextWithIcon
              icon={FiClock}
              color='grey'
              text={translate('8am to 6pm')}
            />
          )
        ) : (
          props.hour && (
            <TextWithIcon icon={FiClock} color='grey' text={props.hour!} />
          )
        )}
      </div>

      {/* 
      <div
        data-hour={!!props.hour || !!props.date || props.dataType === 'barber'}
        className='text-input-text flex flex-row data-[hour=false]:my-1.5'
      >
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
      </div> */}
    </div>
  );
}
