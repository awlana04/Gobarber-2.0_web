import { InputPropsMappedType } from './input-props-mapped-type';

export type EmailInputPropsType = Required<
  InputPropsMappedType<{
    ref: 'emailRef';
    value: 'emailValue';
    errored: 'emailErrored';
    filled: 'emailFilled';
    handleFilled: 'handleEmailFilled';
  }>
>;
