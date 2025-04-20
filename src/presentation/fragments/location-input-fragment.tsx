import { FiMapPin } from 'react-icons/fi';

import { DescriptionInputPropsType } from '@/presentation/types/description-input-props-type';

import { Form } from '@/components/molecules/form';

import translate from '@/presentation/utils/translate';

export default function LocationInputFragment(
  props: DescriptionInputPropsType
) {
  return (
    <Form.Textarea
      textareaValue={props.descriptionValue}
      placeholder={translate('Select the location on the map')}
      name='location'
      iconName={FiMapPin}
      textareaErrored={props.descriptionErrored}
      textareaFilled={props.descriptionFilled}
      textareaRef={props.descriptionRef}
      handleTextareaFilled={props.handleDescriptionFilled}
    />
  );
}
