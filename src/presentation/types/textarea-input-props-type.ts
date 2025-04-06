import { InputPropsMappedType } from './input-props-mapped-type';

export type TextareaInputPropsType = Required<
  InputPropsMappedType<{
    ref: 'textareaRef';
    value: 'textareaValue';
    errored: 'textareaErrored';
    filled: 'textareaFilled';
    handleFilled: 'handleTextareaFilled';
  }>
>;
