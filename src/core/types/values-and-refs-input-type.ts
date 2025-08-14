import {
  NameInputPropsMappedType,
  EmailInputPropsMappedType,
  PasswordInputPropsMappedType,
  ConfirmPasswordInputPropsMappedType,
  DescriptionInputPropsMappedType,
  LocationInputPropsMappedType,
  ActualPasswordInputPropsMappedType,
} from '@/presentation/types/input-props-mapped-types';

export type NameInputRefAndValueType = Pick<
  NameInputPropsMappedType,
  'nameRef' | 'nameValue'
>;

export type EmailInputRefAndValueType = Pick<
  EmailInputPropsMappedType,
  'emailRef' | 'emailValue'
>;

export type PasswordInputRefType = Pick<
  PasswordInputPropsMappedType,
  'passwordRef'
>;

export type ActualPasswordInputRefType = Pick<
  ActualPasswordInputPropsMappedType,
  'actualPasswordRef'
>;

export type ConfirmPasswordInputRefType = Pick<
  ConfirmPasswordInputPropsMappedType,
  'confirmPasswordRef'
>;

export type DescriptionInputRefAndValueType = Pick<
  DescriptionInputPropsMappedType,
  'descriptionRef' | 'descriptionValue'
>;
