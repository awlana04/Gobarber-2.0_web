import { format, parseISO } from 'date-fns';

import { AppointmentDataType } from '@/infra/types/data-type';

import { Row } from '@/molecules/row';

type NextActiveAppointmentPropsType = {
  appointment: AppointmentDataType | undefined;
  isBarber: boolean;
};

export default function NextActiveAppointmentRow(
  props: NextActiveAppointmentPropsType
) {
  return (
    <div>
      {props.appointment && (
        <section>
          <h3
            data-type={props.isBarber === false}
            className='text-grey mt-12 mb-5 text-xl data-[type=true]:mt-4'
          >
            {props.isBarber ? (
              <p>Atendimento a seguir</p>
            ) : (
              <p>Agendamento ativo</p>
            )}
          </h3>

          {props.isBarber ? (
            <Row.RowRoot
              data={props.appointment}
              size='extra-large'
              Render={Row.RowHourAndDate}
              dataType='barber'
              hour={props.appointment.date}
            />
          ) : (
            <Row.RowRoot
              data={props.appointment}
              size='extra-large'
              Render={Row.RowHourAndDate}
              dataType='user'
              hour={props.appointment.date}
              date={format(props.appointment.date, 'dd/MM/yy')}
            />
          )}
        </section>
      )}
    </div>
  );
}
