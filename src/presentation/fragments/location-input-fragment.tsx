import { FiMapPin } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type LocationInputFragmentType = {
  errored: boolean;
};

export default function LocationInputFragment({
  errored,
}: LocationInputFragmentType) {
  return (
    <>
      <Form.Textarea
        placeholder='Selecione o lugar no mapa'
        name='location'
        iconName={FiMapPin}
        errored={errored}
      />
    </>
  );
}
