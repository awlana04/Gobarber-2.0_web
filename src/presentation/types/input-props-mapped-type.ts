export type BaseInputPropsType = {
  ref: React.Ref<HTMLInputElement>;
  value?: string;
  errored: boolean;
  filled: boolean;
  handleFilled(event: React.ChangeEvent<HTMLInputElement>): void;
};

export type InputPropsMappedType<Properties> = {
  [Key in keyof BaseInputPropsType as Key extends keyof Properties
    ? Properties[Key] extends string
      ? Properties[Key]
      : never
    : Key]: Key extends keyof BaseInputPropsType
    ? BaseInputPropsType[Key]
    : never;
};
