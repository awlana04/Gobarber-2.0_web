import { FiMessageSquare } from 'react-icons/fi';

import { InputType } from '../interfaces/input-type';
import { ToastType } from '../interfaces/toast-type';

import Toast from '@components/atoms/toast';

import { Form } from '@components/molecules/form';

type DescriptionInputFragmentType = {
  descriptionInput: InputType;
  descriptionToast?: ToastType;
};

export default function DescriptionInputFragment({
  descriptionInput,
  descriptionToast,
}: DescriptionInputFragmentType) {
  return (
    <>
      <Form.Textarea
        {...descriptionInput.submitField}
        placeholder='Descrição'
        iconName={FiMessageSquare}
        errored={descriptionInput.errored}
      />

      {descriptionToast?.conditional && (
        <Toast
          id={descriptionToast.id!}
          title='Descrição invalida'
          description={descriptionToast.description!}
        />
      )}
    </>
  );
}
