import { FiMapPin } from 'react-icons/fi';

import { InputType } from '../interfaces/input-type';
import { ToastType } from '../interfaces/toast-type';

import Toast from '@components/atoms/toast';

import { Form } from '@components/molecules/form';

type LocationInputFragmentType = {
  locationInput: InputType;
  locationToast: ToastType;
};

export default function LocationInputFragment({
  locationInput,
  locationToast,
}: LocationInputFragmentType) {
  return (
    <>
      <Form.Textarea
        {...locationInput.submitField}
        placeholder='Selecione o lugar no mapa'
        iconName={FiMapPin}
        errored={locationInput.errored}
      />

      {locationToast.conditional && (
        <Toast
          id={locationToast.id!}
          title='Localização invalida'
          description={locationToast.description!}
        />
      )}
    </>
  );
}
