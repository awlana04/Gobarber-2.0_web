import { Ref } from 'react';

export type BaseInputPropsType = {
  ref: Ref<HTMLInputElement>;
  value?: string;
  errored: boolean;
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
