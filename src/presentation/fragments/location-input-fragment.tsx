import { FiMapPin } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

type LocationInputFragmentType = {
  errored: boolean;
  value: string;
};

export default function LocationInputFragment({
  errored,
  value,
}: LocationInputFragmentType) {
  return (
    <>
      <Form.Textarea
        value={value}
        placeholder='Selecione o lugar no mapa'
        name='location'
        iconName={FiMapPin}
        errored={errored}
      />
    </>
  );
}
