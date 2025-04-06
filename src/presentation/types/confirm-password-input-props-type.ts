import { InputPropsMappedType } from './input-props-mapped-type';

export type ConfirmPasswordInputPropsType = InputPropsMappedType<{
  ref: 'confirmPasswordRef';
  value: 'confirmPasswordValue';
  errored: 'confirmPasswordErrored';
  filled: 'confirmPasswordFilled';
  handleFilled: 'handleConfirmPasswordFilled';
}>;
