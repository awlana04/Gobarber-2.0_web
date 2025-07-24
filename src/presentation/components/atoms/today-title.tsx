import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type TodayTitlePropsType = {
  title: string;
};

export default function TodayTitle(props: TodayTitlePropsType) {
  const selectedDateAsText = format(new Date(), "'Dia' dd 'de' MMMM", {
    locale: ptBR,
  });

  const selectedWeekDay = format(new Date(), 'cccc', {
    locale: ptBR,
  });

  return (
    <div>
      <h1 className='text-4xl font-bold'>{props.title}</h1>
      <p className='text-orange mt-4 mb-2 text-xl'>
        Hoje | {selectedDateAsText} | {selectedWeekDay}
      </p>
    </div>
  );
}
