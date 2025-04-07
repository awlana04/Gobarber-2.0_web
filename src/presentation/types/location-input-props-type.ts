import { InputPropsMappedType } from './input-props-mapped-type';

export type LocationInputPropsType = Required<
  InputPropsMappedType<{
    ref: 'locationRef';
    value: 'locationValue';
    errored: 'locationErrored';
    filled: 'locationFilled';
    handleFilled: 'handleLocationFilled';
  }>
>;
