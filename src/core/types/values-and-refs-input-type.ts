import { NameInputPropsType } from '@/presentation/types/name-input-props-type';
import { EmailInputPropsType } from '@/presentation/types/email-input-props-type';
import { PasswordInputPropsType } from '@/presentation/types/password-input-props-type';
import { ConfirmPasswordInputPropsType } from '@/presentation/types/confirm-password-input-props-type';
import { DescriptionInputPropsType } from '@/presentation/types/description-input-props-type';

export type NameInputRefAndValueType = Pick<
  NameInputPropsType,
  'nameRef' | 'nameValue'
>;

export type EmailInputRefAndValueType = Pick<
  EmailInputPropsType,
  'emailRef' | 'emailValue'
>;

export type PasswordInputRefType = Pick<PasswordInputPropsType, 'passwordRef'>;

export type ConfirmPasswordInputRefType = Pick<
  ConfirmPasswordInputPropsType,
  'confirmPasswordRef'
>;

export type DescriptionInputRefAndValueType = Pick<
  DescriptionInputPropsType,
  'descriptionRef' | 'descriptionValue'
>;
