import { ButtonHTMLAttributes } from 'react';
import { ptBR } from 'date-fns/locale';
import { UTCDate } from '@date-fns/utc';
import {
  useDayPicker,
  getDefaultClassNames,
  DayPicker,
} from 'react-day-picker';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { isToday } from 'date-fns';
import { AppointmentDataType } from '@/infra/types/data-type';

type CalendarPropsType = {
  appointments?: AppointmentDataType[];
  selectedDate?: Date;
  setSelectedDate?(value?: Date): void;
  handleDayClick?(day?: Date): void;
};

function NextMonthCalendarButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const changeToNextMonth = (month: Date) => {
    if (props.onClick) {
      const syntheticEvent = {
        target: {
          value: month,
        },
      } as unknown as React.MouseEvent<HTMLButtonElement>;

      props.onClick(syntheticEvent);
    }
  };

  return (
    <button onClick={() => changeToNextMonth(new Date())}>
      <FiArrowRight className='absolute top-3.5 right-8 text-lg hover:cursor-pointer hover:text-white' />
    </button>
  );
}

function PreviousMonthCalendarButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { previousMonth } = useDayPicker();

  const changeToPreviousMonth = (month: Date) => {
    if (props.onClick) {
      const syntheticEvent = {
        target: {
          value: month,
        },
      } as unknown as React.MouseEvent<HTMLButtonElement>;

      props.onClick(syntheticEvent);
    }
  };

  return (
    <button onClick={() => changeToPreviousMonth(new Date())}>
      <FiArrowLeft
        data-month={previousMonth === undefined}
        className='absolute top-3.5 -left-80 text-lg data-[month=false]:hover:cursor-pointer data-[month=false]:hover:text-white data-[month=true]:opacity-0'
      />
    </button>
  );
}

export default function Calendar(props: CalendarPropsType) {
  const defaultClassNames = getDefaultClassNames();

  const today = new Date();

  const daysAlreadyBooked = props.appointments!.map(
    (appointment) => new UTCDate(appointment.date)
  );

  return (
    <DayPicker
      onSelect={props.handleDayClick}
      selected={props.selectedDate}
      components={{
        NextMonthButton: NextMonthCalendarButton,
        PreviousMonthButton: PreviousMonthCalendarButton,
        DayButton: (dayButtonProps) => {
          const { day, ...buttonProps } = dayButtonProps;

          return (
            <button
              {...buttonProps}
              data-disabled={buttonProps.disabled}
              data-today={isToday(props.selectedDate!)}
              className='rounded-2xl data-[disabled]:h-11 data-[disabled]:w-11 data-[disabled=true]:bg-black data-[disabled=true]:opacity-100'
            />
          );
        },
      }}
      locale={ptBR}
      startMonth={new Date()}
      disabled={[{ dayOfWeek: [0, 6] }, { before: today }]}
      modifiers={{
        booked: props.appointments && [...daysAlreadyBooked],
      }}
      mode='single'
      modifiersClassNames={{
        booked: 'bg-input rounded-2xl hover:cursor-pointer',
      }}
      classNames={{
        chevron: 'fill-grey',
        today: 'text-orange rounded-2xl hover:cursor-pointer bg-black',
        root: `${defaultClassNames.root} text-input-text place-items-center bg-black flex justify-center rounded-2xl w-[412] items-center text-center place-self-center`,
        month_caption:
          'text-center  text-sm text-white bg-button-text w-[412] items-center h-14 justify-center rounded-tl-2xl content-center rounded-tr-2xl',
        month_grid: 'm-4 place-self-center',
        selected: 'bg-orange rounded-2xl text-input',
        weekdays: 'h-14',
        week_number: 'text-orange',
        // day: `${defaultClassNames.day} hover:cursor-pointer `,
        week_number_header: 'text-orange',
      }}
    />
  );
}
