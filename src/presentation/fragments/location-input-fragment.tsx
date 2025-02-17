import { FiMapPin } from 'react-icons/fi';

import { Form } from '@components/molecules/form';

export default function LocationInputFragment() {
  return (
    <>
      <Form.Textarea
        placeholder='Selecione o lugar no mapa'
        name='location'
        iconName={FiMapPin}
        // errored={locationInput.errored}
      />
    </>
  );
}
