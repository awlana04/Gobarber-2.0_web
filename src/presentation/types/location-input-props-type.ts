// import { InputPropsMappedType } from './input-props-mapped-type';

// export type LocationInputPropsType = Required<
//   InputPropsMappedType<{
//     ref: 'locationRef';
//     value: 'locationValue';
//     errored: 'locationErrored';
//     filled: 'locationFilled';
//     handleFilled: 'handleLocationFilled';
//   }>
// >;

export type LocationInputPropsType = {
  locationRef: React.Ref<HTMLTextAreaElement>;
  locationValue: string;
  locationErrored: boolean;
  locationFilled: boolean;
  handleLocationFilled(event: React.ChangeEvent<HTMLTextAreaElement>): void;
};
