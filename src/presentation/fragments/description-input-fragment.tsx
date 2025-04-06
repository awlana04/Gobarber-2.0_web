import { FiMessageSquare } from 'react-icons/fi';

import { TextareaInputPropsType } from '../types/textarea-input-props-type';

import { Form } from '@/components/molecules/form';

export default function DescriptionInputFragment(
  props: TextareaInputPropsType
) {
  return (
    <Form.Textarea
      textareaValue={props.textareaValue}
      placeholder='Descrição'
      name='description'
      iconName={FiMessageSquare}
      textareaErrored={props.textareaErrored}
      textareaFilled={props.textareaFilled}
      textareaRef={props.textareaRef}
      handleTextareaFilled={props.handleTextareaFilled}
    />
  );
}
