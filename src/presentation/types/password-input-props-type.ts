import { InputPropsMappedType } from './input-props-mapped-type';

export type PasswordInputPropsType = InputPropsMappedType<{
  ref: 'passwordRef';
  value: 'passwordValue';
  errored: 'passwordErrored';
  filled: 'passwordFilled';
  handleFilled: 'handlePasswordFilled';
}>;
