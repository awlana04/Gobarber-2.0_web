// import { InputPropsMappedType } from './input-props-mapped-type';

// export type TextareaInputPropsType = Required<
//   InputPropsMappedType<{
//     ref: 'textareaRef';
//     value: 'textareaValue';
//     errored: 'textareaErrored';
//     filled: 'textareaFilled';
//     handleFilled: 'handleTextareaFilled';
//   }>
// >;

export type TextareaInputPropsType = {
  textareaRef: React.Ref<HTMLTextAreaElement>;
  textareaValue: string;
  textareaErrored: boolean;
  textareaFilled: boolean;
  handleTextareaFilled(event: React.ChangeEvent<HTMLTextAreaElement>): void;
};
