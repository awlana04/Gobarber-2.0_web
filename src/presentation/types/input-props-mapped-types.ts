export type BaseInputPropsType = {
  ref: React.Ref<HTMLInputElement>;
  value?: string;
  errored: boolean;
  filled: boolean;
  handleFilled(event: React.ChangeEvent<HTMLInputElement>): void;
};

type BaseInputPropsWithoutMethodType = Omit<BaseInputPropsType, 'handleFilled'>;
type BaseInputPropsMethodType = Pick<BaseInputPropsType, 'handleFilled'>;
type BaseTextareaPropRefType = Pick<BaseInputPropsType, 'ref'>;
type BaseTextareaInputPropsWithoutRefAndMethodType = Required<
  Omit<BaseInputPropsType, 'ref' | 'handleFilled'>
>;
type BaseLocationPropsRefType = Pick<BaseInputPropsType, 'ref'>;
type BaseLocationPropsWithErroredAndFilledType = Pick<
  BaseInputPropsType,
  'errored' | 'filled'
>;

type TextareaPropsMappedType<Type extends string> = {
  [Property in keyof BaseTextareaPropRefType as `${Type}${Capitalize<string & Property>}`]: React.Ref<HTMLTextAreaElement>;
} & {
  [Property in keyof BaseTextareaInputPropsWithoutRefAndMethodType as `${Type}${Capitalize<string & Property>}`]: BaseTextareaInputPropsWithoutRefAndMethodType[Property];
} & {
  [Property in keyof BaseInputPropsMethodType as `handle${Capitalize<string & Type>}Filled`]: (
    event: React.ChangeEvent<HTMLDivElement>
  ) => void;
};

type InputPropsMappedType<Type extends string> = {
  [Property in keyof BaseInputPropsWithoutMethodType as `${Type}${Capitalize<string & Property>}`]: BaseInputPropsWithoutMethodType[Property];
} & {
  [Property in keyof BaseInputPropsMethodType as `handle${Capitalize<string & Type>}Filled`]: BaseInputPropsMethodType[Property];
};

export type NameInputPropsMappedType = Required<InputPropsMappedType<'name'>>;
export type EmailInputPropsMappedType = Required<InputPropsMappedType<'email'>>;
export type PasswordInputPropsMappedType = InputPropsMappedType<'password'>;
export type ActualPasswordInputPropsMappedType =
  InputPropsMappedType<'actualPassword'>;
export type ConfirmPasswordInputPropsMappedType =
  InputPropsMappedType<'confirmPassword'>;
export type TextareaInputPropsMappedType = TextareaPropsMappedType<'textarea'>;
export type LocationInputPropsMappedType = TextareaPropsMappedType<'location'>;
export type DescriptionInputPropsMappedType =
  TextareaPropsMappedType<'description'>;

export type LocationPropsMappedType = {
  [Property in keyof BaseLocationPropsRefType as `location${Capitalize<string & Property>}`]: React.Ref<HTMLDivElement>;
} & {
  [Property in keyof BaseLocationPropsWithErroredAndFilledType as `location${Capitalize<string & Property>}`]: BaseLocationPropsWithErroredAndFilledType[Property];
};
