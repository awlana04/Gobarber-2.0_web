import { FiMessageSquare } from 'react-icons/fi';

import { DescriptionInputPropsMappedType } from '@/presentation/types/input-props-mapped-type';

import { Form } from '@/components/molecules/form';

import translate from '@/shared/utils/translate';

export default function DescriptionInputFragment(
  props: DescriptionInputPropsMappedType
) {
  return (
    <Form.Textarea
      textareaValue={props.descriptionValue}
      name='description'
      placeholder={translate('Description')}
      iconName={FiMessageSquare}
      textareaErrored={props.descriptionErrored}
      textareaFilled={props.descriptionFilled}
      textareaRef={props.descriptionRef}
      handleTextareaFilled={props.handleDescriptionFilled}
    />
  );
}
