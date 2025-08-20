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
          {props.isBarber && (
            <h3 className='text-grey mt-12 mb-5 text-xl'>
              {props.isBarber ? (
                <p>Atendimento a seguir</p>
              ) : (
                <p>Agendamento ativo</p>
              )}
            </h3>
          )}

          <Row.RowRoot
            data={props.appointment}
            size='extra-large'
            Render={Row.RowHourAndDate}
            dataType='barber'
            hour={props.appointment.date}
          />
        </section>
      )}
    </div>
  );
}
