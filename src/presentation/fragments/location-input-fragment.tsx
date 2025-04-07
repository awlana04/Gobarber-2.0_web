import { FiMapPin } from 'react-icons/fi';

import { DescriptionInputPropsType } from '@/presentation/types/description-input-props-type';

import { Form } from '@/components/molecules/form';

export default function LocationInputFragment(
  props: DescriptionInputPropsType
) {
  return (
    <Form.Textarea
      textareaValue={props.descriptionValue}
      placeholder='Selecione o lugar no mapa'
      name='location'
      iconName={FiMapPin}
      textareaErrored={props.descriptionErrored}
      textareaFilled={props.descriptionFilled}
      textareaRef={props.descriptionRef}
      handleTextareaFilled={props.handleDescriptionFilled}
    />
  );
}
