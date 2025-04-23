import { InputPropsMappedType } from './input-props-mapped-type';

export type ConfirmPasswordInputPropsType = InputPropsMappedType<{
  ref: 'confirmPasswordRef';
  errored: 'confirmPasswordErrored';
  filled: 'confirmPasswordFilled';
  handleFilled: 'handleConfirmPasswordFilled';
}>;
