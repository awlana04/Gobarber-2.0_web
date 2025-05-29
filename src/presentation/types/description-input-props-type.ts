// import { InputPropsMappedType } from './input-props-mapped-type';

// export type DescriptionInputPropsType = Required<
//   InputPropsMappedType<{
//     ref: 'descriptionRef';
//     value: 'descriptionValue';
//     errored: 'descriptionErrored';
//     filled: 'descriptionFilled';
//     handleFilled: 'handleDescriptionFilled';
//   }>
// >;

export type DescriptionInputPropsType = {
  descriptionRef: React.Ref<HTMLTextAreaElement>;
  descriptionValue: string;
  descriptionErrored: boolean;
  descriptionFilled: boolean;
  handleDescriptionFilled(event: React.ChangeEvent<HTMLTextAreaElement>): void;
};
