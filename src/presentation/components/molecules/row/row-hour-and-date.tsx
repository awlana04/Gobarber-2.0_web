import { FiCalendar, FiClock } from 'react-icons/fi';

import { RowPropsType } from '@/presentation/types/row-props-type';

import TextWithIcon from '@/atoms/text-with-icon';

import translate from '@/shared/utils/translate';
import { format } from 'date-fns';

export default function RowHourAndDate(props: RowPropsType) {
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
            <TextWithIcon
              icon={FiClock}
              color='grey'
              text={format(props.hour, 'HH:mm')!}
            />
          )
        )}
      </div>
    </div>
  );
}
