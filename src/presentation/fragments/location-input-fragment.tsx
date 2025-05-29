import { FiMapPin } from 'react-icons/fi';

import { Form } from '@/components/molecules/form';

import translate from '@/shared/utils/translate';
import { LocationInputPropsType } from '../types/location-input-props-type';

export default function LocationInputFragment(props: LocationInputPropsType) {
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
