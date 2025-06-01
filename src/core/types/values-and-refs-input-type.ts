import {
  NameInputPropsMappedType,
  EmailInputPropsMappedType,
  PasswordInputPropsMappedType,
  ConfirmPasswordInputPropsMappedType,
  DescriptionInputPropsMappedType,
  LocationInputPropsMappedType,
} from '@/presentation/types/input-props-mapped-type';

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

export type ConfirmPasswordInputRefType = Pick<
  ConfirmPasswordInputPropsMappedType,
  'confirmPasswordRef'
>;

export type DescriptionInputRefAndValueType = Pick<
  DescriptionInputPropsMappedType,
  'descriptionRef' | 'descriptionValue'
>;

export type LocationInputRefAndValueType = Pick<
  LocationInputPropsMappedType,
  'locationRef' | 'locationValue'
>;
