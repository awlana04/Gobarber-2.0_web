import { FiMapPin } from 'react-icons/fi';

import { TextareaInputPropsType } from '../types/textarea-input-props-type';

import { Form } from '@/components/molecules/form';

export default function LocationInputFragment(props: TextareaInputPropsType) {
  return (
    <Form.Textarea
      textareaValue={props.textareaValue}
      placeholder='Selecione o lugar no mapa'
      name='location'
      iconName={FiMapPin}
      textareaErrored={props.textareaErrored}
      textareaFilled={props.textareaFilled}
      textareaRef={props.textareaRef}
      handleTextareaFilled={props.handleTextareaFilled}
    />
  );
}
