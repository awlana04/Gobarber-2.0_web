import { FiMapPin } from 'react-icons/fi';

import { LocationInputPropsMappedType } from '@/presentation/types/input-props-mapped-type';

import { Form } from '@/components/molecules/form';

import translate from '@/shared/utils/translate';

export default function LocationInputFragment(
  props: LocationInputPropsMappedType
) {
  return (
    <Form.Textarea
      textareaValue={props.locationValue}
      placeholder={translate('Select the location on the map')}
      name='location'
      iconName={FiMapPin}
      textareaErrored={props.locationErrored}
      textareaFilled={props.locationFilled}
      textareaRef={props.locationRef}
      handleTextareaFilled={props.handleLocationFilled}
    />
  );
}
