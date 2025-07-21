import { ModalPropsType } from '@/presentation/types/modal-props-type';

import { Row } from '@/molecules/row';

export default function ModalRow(props: ModalPropsType) {
  return (
    <>
      {Array.isArray(props.data) ? (
        props.data.map((data) => (
          <Row.RowRoot
            key={data.id}
            isModal={true}
            data={data}
            Render={Row.RowHourAndDate}
            dataType={props.dataType}
            size='large'
          />
        ))
      ) : (
        <Row.RowRoot
          key={props.data.id}
          isModal={true}
          data={props.data}
          Render={Row.RowHourAndDate}
          dataType={props.dataType}
          size='large'
        />
      )}
    </>
  );
}
