import { InputPropsMappedType } from './input-props-mapped-type';

export type DescriptionInputPropsType = Required<
  InputPropsMappedType<{
    ref: 'descriptionRef';
    value: 'descriptionValue';
    errored: 'descriptionErrored';
    filled: 'descriptionFilled';
    handleFilled: 'handleDescriptionFilled';
  }>
>;
