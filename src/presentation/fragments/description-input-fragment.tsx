import { FiMessageSquare } from 'react-icons/fi';

import { DescriptionInputPropsType } from '../types/description-input-props-type';

import { Form } from '@/components/molecules/form';

export default function DescriptionInputFragment(
  props: DescriptionInputPropsType
) {
  return (
    <Form.Textarea
      textareaValue={props.descriptionValue}
      placeholder='Descrição'
      name='description'
      iconName={FiMessageSquare}
      textareaErrored={props.descriptionErrored}
      textareaFilled={props.descriptionFilled}
      textareaRef={props.descriptionRef}
      handleTextareaFilled={props.handleDescriptionFilled}
    />
  );
}
