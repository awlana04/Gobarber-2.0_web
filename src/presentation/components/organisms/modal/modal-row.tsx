import { ModalPropsType } from '@/presentation/types/modal-props-type';

import { Row } from '@/molecules/row';

export default function ModalRow(props: ModalPropsType) {
  return (
    <div className='mt-24 flex scale-100 flex-col items-center justify-center'>
      {
        props.dataType === 'barber'
          ? Array.isArray(props.data) &&
            props.data.map((data) => (
              <Row.RowRoot
                key={data.id}
                isModal={true}
                data={data}
                Render={Row.RowHourAndDate}
                dataType='barber'
                size='large'
              />
            ))
          : Array.isArray(props.data) &&
            props.data.map((data) => (
              <Row.RowRoot
                key={data.id}
                isModal={true}
                hour={data.date}
                data={data}
                Render={Row.RowHourAndDate}
                dataType='user'
                size='large'
              />
            ))
        //  :
        //  (
        //   <Row.RowRoot
        //     key={props.data!.id}
        //     isModal={true}
        //     data={props.data}
        //     Render={Row.RowHourAndDate}
        //     dataType={props.dataType}
        //     size='large'
        //   />
        // )
      }
    </div>
  );
}
