export type BaseInputPropsType = {
  ref: React.Ref<HTMLInputElement>;
  value?: string;
  errored: boolean;
  filled: boolean;
  handleFilled(event: React.ChangeEvent<HTMLInputElement>): void;
};

type BaseInputPropsWithoutMethodType = Omit<BaseInputPropsType, 'handleFilled'>;
type BaseInputPropsWithMethodType = Pick<BaseInputPropsType, 'handleFilled'>;
type BaseTextareaPropWithRefType = Pick<BaseInputPropsType, 'ref'>;
type BaseTextareaInputPropsWithoutRefAndMethodType = Required<
  Omit<BaseInputPropsType, 'ref' | 'handleFilled'>
>;

type TextareaPropsMappedType<Type extends string> = {
  [Property in keyof BaseTextareaPropWithRefType as `${Type}${Capitalize<string & Property>}`]: React.Ref<HTMLTextAreaElement>;
} & {
  [Property in keyof BaseTextareaInputPropsWithoutRefAndMethodType as `${Type}${Capitalize<string & Property>}`]: BaseTextareaInputPropsWithoutRefAndMethodType[Property];
} & {
  [Property in keyof BaseInputPropsWithMethodType as `handle${Capitalize<string & Type>}Filled`]: (
    event: React.ChangeEvent<HTMLDivElement>
  ) => void;
};

type InputPropsMappedType<Type extends string> = {
  [Property in keyof BaseInputPropsWithoutMethodType as `${Type}${Capitalize<string & Property>}`]: BaseInputPropsWithoutMethodType[Property];
} & {
  [Property in keyof BaseInputPropsWithMethodType as `handle${Capitalize<string & Type>}Filled`]: BaseInputPropsWithMethodType[Property];
};

export type NameInputPropsMappedType = Required<InputPropsMappedType<'name'>>;
export type EmailInputPropsMappedType = Required<InputPropsMappedType<'email'>>;
export type PasswordInputPropsMappedType = InputPropsMappedType<'password'>;
export type ConfirmPasswordInputPropsMappedType =
  InputPropsMappedType<'confirmPassword'>;
export type TextareaInputPropsMappedType = TextareaPropsMappedType<'textarea'>;
export type LocationInputPropsMappedType = TextareaPropsMappedType<'location'>;
export type DescriptionInputPropsMappedType =
  TextareaPropsMappedType<'description'>;
