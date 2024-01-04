import { InputHTMLAttributes, ChangeEvent } from 'react';

export type AvatarType = InputHTMLAttributes<HTMLImageElement> & {
  file: string | any;
  fileUrl: string | any;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
  handleRemove(): void;
};
