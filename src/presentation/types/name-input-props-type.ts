import { InputPropsMappedType } from './input-props-mapped-type';

export type NameInputPropsType = Required<
  InputPropsMappedType<{
    ref: 'nameRef';
    value: 'nameValue';
    errored: 'nameErrored';
    filled: 'nameFilled';
    handleFilled: 'handleNameFilled';
  }>
>;
