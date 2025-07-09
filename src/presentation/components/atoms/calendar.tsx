import { ButtonHTMLAttributes, useState } from 'react';
import { ptBR } from 'date-fns/locale';
import {
  useDayPicker,
  getDefaultClassNames,
  DayPicker,
} from 'react-day-picker';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

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

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      components={{
        NextMonthButton: NextMonthCalendarButton,
        PreviousMonthButton: PreviousMonthCalendarButton,
      }}
      locale={ptBR}
      startMonth={new Date()}
      // modifiers={{
      //   available: { dayOfWeek: [1, 2, 3, 4, 5] },
      // }}
      mode='single'
      selected={selectedDate}
      onSelect={setSelectedDate}
      classNames={{
        chevron: 'fill-grey',
        today: 'text-white rounded-2xl hover:cursor-pointer',
        root: `${defaultClassNames.root} text-input-text place-items-center bg-black flex justify-center rounded-2xl w-[350] items-center text-center place-self-center`,
        month_caption:
          'text-center -my-1 text-sm text-white bg-button-text w-[350] place-self-center items-center h-[50] self-center justify-center justify-self-center object-center place-content-center rounded-tl-2xl content-center rounded-tr-2xl',
        month_grid: 'm-4 place-self-center',
        selected: 'bg-orange rounded-2xl text-input',
        // day_button: 'bg-orange',
        weekdays: 'h-14',
        week_number: 'text-orange',
        day: `${defaultClassNames.day} hover:cursor-pointer`,
        week_number_header: 'text-orange',
      }}
    />
  );
}
